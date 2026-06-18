const { app, BrowserWindow, ipcMain, session } = require('electron');
const path = require('path');
const { SerialPort } = require('serialport');

let mainWindow;
let arduinoPort = null;
let isHardwareConnected = false; 
let isConnecting = false; 

// QA TRACKING VARIABLES
let electronRequestedDrops = 0;
let arduinoConfirmedDrops = 0;
let usbDisconnects = 0;
let pendingVends = []; // The Recovery Queue

function broadcastQAStats() {
    if (mainWindow) {
        mainWindow.webContents.send('qa-stats', { 
            requested: electronRequestedDrops, 
            confirmed: arduinoConfirmedDrops, 
            disconnects: usbDisconnects,
            queued: pendingVends.length
        });
    }
}

// ==========================================
// THE HYPER-POLLING HEARTBEAT
// ==========================================
function startHardwareHeartbeat() {
    // Scan every 500ms for lightning-fast detection
    setInterval(async () => {
        try {
            const ports = await SerialPort.list();
            
            const targetPort = ports.find(p => 
                p.path.includes('usbmodem') || 
                p.path.includes('usbserial') || 
                (p.path.startsWith('COM') && p.vendorId) 
            );

            if (targetPort) {
                if (!isHardwareConnected && !isConnecting) {
                    isConnecting = true; 
                    console.log(`[SERIAL INIT] Arduino detected. Stabilizing: ${targetPort.path}...`);
                    
                    if (arduinoPort) {
                        if (arduinoPort.isOpen) arduinoPort.close();
                        arduinoPort.removeAllListeners();
                        arduinoPort = null;
                    }

                    // Keep the 1000ms buffer so Mac OS doesn't throw a Resource Busy error
                    setTimeout(() => {
                        try {
                            arduinoPort = new SerialPort({
                                path: targetPort.path, 
                                baudRate: 9600,
                                autoOpen: true
                            });

                            let serialBuffer = ''; // Buffer to catch incoming Arduino text

                            arduinoPort.on('open', () => {
                                console.log(`[SERIAL SUCCESS] Connected to: ${targetPort.path}`);
                                isHardwareConnected = true;
                                isConnecting = false; 
                                
                                if (mainWindow) mainWindow.webContents.send('hardware-status', { connected: true, port: targetPort.path });
                                
                                // RECOVERY QUEUE CHECK
                                if (pendingVends.length > 0) {
                                    console.log(`[RECOVERY] Firing ${pendingVends.length} missed vend!`);
                                    // Wait 1.5s for relays to initialize, then fire the single queued vend
                                    setTimeout(() => {
                                        const recoveredVend = pendingVends.shift();
                                        
                                        // V2.0: Format string based on benchTest flag stored in the queue
                                        const command = recoveredVend.benchTest ? `${recoveredVend.motor}\n` : `H${recoveredVend.motor}\n`;
                                        arduinoPort.write(command);
                                        
                                        broadcastQAStats();
                                    }, 1500);
                                }
                            });

                            arduinoPort.on('data', (data) => {
                                serialBuffer += data.toString();
                                if (serialBuffer.includes('\n')) {
                                    const lines = serialBuffer.split('\n');
                                    serialBuffer = lines.pop(); // Keep incomplete fragments
                                    lines.forEach(line => {
                                        if (line.includes('HOMING_COMPLETE') || line.includes('BLIND_VEND_COMPLETE')) {
                                            arduinoConfirmedDrops++;
                                            broadcastQAStats();
                                        }
                                    });
                                }
                            });

                            arduinoPort.on('error', (err) => {
                                console.log('[SERIAL BIND ERROR]', err.message);
                                isConnecting = false; 
                            });

                            arduinoPort.on('close', () => {
                                console.log('[SERIAL WARNING] Connection dropped by OS!');
                                isHardwareConnected = false;
                                usbDisconnects++;
                                broadcastQAStats();
                            });

                        } catch (err) {
                            console.log('[SERIAL FATAL] Failed to create port: ', err.message);
                            isConnecting = false;
                        }
                    }, 1000); 
                }
            } else {
                if (isHardwareConnected || arduinoPort) {
                    console.log('[SERIAL OFFLINE] Arduino missing.');
                    isHardwareConnected = false;
                    isConnecting = false;
                    usbDisconnects++;
                    broadcastQAStats();
                    
                    if (arduinoPort) {
                        if (arduinoPort.isOpen) arduinoPort.close();
                        arduinoPort.removeAllListeners();
                        arduinoPort = null;
                    }
                }

                if (mainWindow) {
                    mainWindow.webContents.send('hardware-status', { connected: false, error: 'USB connection lost.' });
                }
            }
        } catch (err) {
            console.error('[SERIAL SCAN FATAL] Port scan failed: ', err);
        }
    }, 500); 
}

// ==========================================
// ELECTRON APP SETUP
// ==========================================
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        kiosk: true, 
        alwaysOnTop: true, // The Ultimate Hammer
        autoHideMenuBar: true,
        backgroundColor: '#000000', 
        webPreferences: {
            nodeIntegration: true, 
            contextIsolation: false, 
            webSecurity: false 
        }
    });

    mainWindow.loadFile(path.join(__dirname, 'src/index.html'));
    
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        mainWindow.focus();
    });
    
    // Uncomment the line below if you want DevTools to open automatically
    // mainWindow.webContents.openDevTools(); 
    
    mainWindow.webContents.on('did-finish-load', () => {
        startHardwareHeartbeat();
    });
}

app.whenReady().then(() => {
    session.defaultSession.setPermissionCheckHandler((webContents, permission) => permission === 'media');
    session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => callback(permission === 'media'));
    
    createWindow();
    
    app.focus({ steal: true }); // Steal focus from macOS
    
    app.on('activate', function () { 
        if (BrowserWindow.getAllWindows().length === 0) createWindow(); 
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

// ==========================================
// THE HARDWARE BRIDGE
// ==========================================
ipcMain.on('vend-item', (event, payload) => {
    electronRequestedDrops++;
    broadcastQAStats();

    // V2.0: EXTRACT THE NEW PAYLOAD OBJECT
    const rowNumber = payload.motor;
    const isBenchTest = payload.benchTest;
    
    // V2.0: FORMAT THE COMMAND (Number only for bench test, 'H' prefix for production)
    const command = isBenchTest ? `${rowNumber}\n` : `H${rowNumber}\n`;

    if (arduinoPort && arduinoPort.isOpen) {
        arduinoPort.write(command, (err) => {
            if (err) return console.log('[SERIAL ERROR] Failed to send: ', err.message);
        });
    } else {
        // THE ANTI-JACKPOTTING FIX
        console.log(`[QUEUED] Arduino offline. Queuing Row ${rowNumber} (Bench Test: ${isBenchTest})`);
        pendingVends = [{ motor: rowNumber, benchTest: isBenchTest }]; 
        broadcastQAStats();
    }
});