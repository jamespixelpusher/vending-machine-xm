const { app, BrowserWindow, ipcMain, session } = require('electron');
const path = require('path');
const { SerialPort } = require('serialport');

let mainWindow;
let arduinoPort = null;
let isHardwareConnected = false; 

// ==========================================
// THE ACTIVE HEARTBEAT (SELF-HEALING POLLING)
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
                if (!isHardwareConnected) {
                    console.log(`[SERIAL SUCCESS] Arduino found on: ${targetPort.path}`);
                    
                    // Create a fresh connection
                    arduinoPort = new SerialPort({
                        path: targetPort.path, 
                        baudRate: 9600,
                        autoOpen: true
                    });

                    arduinoPort.on('error', (err) => console.log('[SERIAL ERROR]', err.message));
                    
                    isHardwareConnected = true;
                    
                    // Tell the UI to turn green and dismiss the panel
                    if (mainWindow) {
                        mainWindow.webContents.send('hardware-status', { 
                            connected: true, 
                            port: targetPort.path 
                        });
                    }
                }
            } else {
                // STATUS: ARDUINO IS MISSING
                if (isHardwareConnected) {
                    console.log('[SERIAL WARNING] Arduino physically unplugged!');
                    isHardwareConnected = false;
                    
                    // Force close the ghost port so it doesn't jam when replugged
                    if (arduinoPort && arduinoPort.isOpen) {
                        arduinoPort.close();
                    }
                }

                // Constantly remind the UI that we are disconnected so the panel pops up/stays up
                if (mainWindow) {
                    mainWindow.webContents.send('hardware-status', { 
                        connected: false, 
                        error: 'USB cable disconnected. Waiting for Arduino...' 
                    });
                }
            }
        } catch (err) {
            console.error('[SERIAL FATAL] Port scan failed: ', err);
        }
    }, 2000); // 2000ms = 2 seconds
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