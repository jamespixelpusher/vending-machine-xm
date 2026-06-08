const { app, BrowserWindow, ipcMain, session } = require('electron');
const path = require('path');
const { SerialPort } = require('serialport');

let mainWindow;
let arduinoPort = null;
let isHardwareConnected = false; 
let isConnecting = false; // Prevents spamming the port during a micro-disconnect

// ==========================================
// THE BULLETPROOF HARDWARE HEARTBEAT
// ==========================================
function startHardwareHeartbeat() {
    // Actively scan the physical USB ports every 2 seconds
    setInterval(async () => {
        try {
            const ports = await SerialPort.list();
            
            // Look for the physical footprint of the Arduino
            const targetPort = ports.find(p => 
                p.path.includes('usbmodem') || 
                p.path.includes('usbserial') || 
                (p.path.startsWith('COM') && p.vendorId) 
            );

            if (targetPort) {
                // STATUS: ARDUINO IS PLUGGED IN
                if (!isHardwareConnected && !isConnecting) {
                    isConnecting = true; // Lock the connection sequence
                    console.log(`[SERIAL INIT] Arduino detected. Letting OS stabilize port: ${targetPort.path}...`);
                    
                    // Nuke any ghost ports from previous micro-disconnects
                    if (arduinoPort) {
                        if (arduinoPort.isOpen) arduinoPort.close();
                        arduinoPort.removeAllListeners();
                        arduinoPort = null;
                    }

                    // Wait 1 second before grabbing it to avoid "Resource Busy" OS locks
                    setTimeout(() => {
                        try {
                            arduinoPort = new SerialPort({
                                path: targetPort.path, 
                                baudRate: 9600,
                                autoOpen: true
                            });

                            arduinoPort.on('open', () => {
                                console.log(`[SERIAL SUCCESS] Rock solid connection established on: ${targetPort.path}`);
                                isHardwareConnected = true;
                                isConnecting = false; // Unlock
                                
                                if (mainWindow) {
                                    mainWindow.webContents.send('hardware-status', { connected: true, port: targetPort.path });
                                }
                            });

                            arduinoPort.on('error', (err) => {
                                console.log('[SERIAL BIND ERROR]', err.message);
                                isConnecting = false; // Unlock so it tries again on the next pulse
                            });

                            // Instant trigger if the physical cable wiggles
                            arduinoPort.on('close', () => {
                                console.log('[SERIAL WARNING] Connection unexpectedly dropped by Mac OS!');
                                isHardwareConnected = false;
                            });

                        } catch (err) {
                            console.log('[SERIAL FATAL] Failed to create port: ', err.message);
                            isConnecting = false;
                        }
                    }, 1000); 
                }
            } else {
                // STATUS: ARDUINO IS MISSING
                if (isHardwareConnected || arduinoPort) {
                    console.log('[SERIAL OFFLINE] Arduino physically missing from USB bus.');
                    isHardwareConnected = false;
                    isConnecting = false;
                    
                    // Aggressive cleanup
                    if (arduinoPort) {
                        if (arduinoPort.isOpen) arduinoPort.close();
                        arduinoPort.removeAllListeners();
                        arduinoPort = null;
                    }
                }

                // Constantly remind the UI that we are disconnected
                if (mainWindow) {
                    mainWindow.webContents.send('hardware-status', { 
                        connected: false, 
                        error: 'USB connection lost. Check cables!' 
                    });
                }
            }
        } catch (err) {
            console.error('[SERIAL SCAN FATAL] Port scan failed: ', err);
        }
    }, 2000); // 2-second polling
}

// ==========================================
// ELECTRON APP SETUP
// ==========================================
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        kiosk: true, 
        autoHideMenuBar: true,
        backgroundColor: '#000000', 
        webPreferences: {
            nodeIntegration: true, 
            contextIsolation: false, 
            webSecurity: false 
        }
    });

    mainWindow.loadFile(path.join(__dirname, 'src/index.html'));
    
    // Open DevTools for debugging
    mainWindow.webContents.openDevTools();
    
    // Once the UI loads, start the heartbeat immediately
    mainWindow.webContents.on('did-finish-load', () => {
        startHardwareHeartbeat();
    });
}

app.whenReady().then(() => {
    session.defaultSession.setPermissionCheckHandler((webContents, permission) => permission === 'media');
    session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => callback(permission === 'media'));

    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

// ==========================================
// THE HARDWARE BRIDGE (IPC LISTENERS)
// ==========================================
ipcMain.on('vend-item', (event, rowNumber) => {
    if (arduinoPort && arduinoPort.isOpen) {
        arduinoPort.write(`H${rowNumber}\n`, (err) => {
            if (err) return console.log('[SERIAL ERROR] Failed to send: ', err.message);
            console.log(`[SERIAL SUCCESS] Sent command 'H${rowNumber}' to machine.`);
        });
    } else {
        console.log('[SERIAL ERROR] Cannot vend. Arduino is not connected.');
    }
});

// If the user manually clicks "Run Diagnostic" (~ key)
ipcMain.on('request-hardware-status', (event) => {
    if (mainWindow) {
        mainWindow.webContents.send('hardware-status', { 
            connected: isHardwareConnected, 
            error: isHardwareConnected ? null : 'USB cable disconnected. Waiting for Arduino...',
            port: isHardwareConnected && arduinoPort ? arduinoPort.path : null
        });
    }
});