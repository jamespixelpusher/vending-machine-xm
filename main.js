const { app, BrowserWindow, ipcMain, session } = require('electron');
const path = require('path');
const { SerialPort } = require('serialport');

let mainWindow;
let arduinoPort = null;

// ==========================================
// ARDUINO SERIAL AUTO-DETECTION (CROSS-PLATFORM)
// ==========================================
async function connectToArduino() {
    try {
        const ports = await SerialPort.list();
        
        // Look for Mac signatures OR Windows COM ports that have a USB Vendor ID
        const targetPort = ports.find(p => 
            p.path.includes('usbmodem') || 
            p.path.includes('usbserial') || 
            (p.path.startsWith('COM') && p.vendorId) 
        );

        if (targetPort) {
            console.log(`[SERIAL SUCCESS] Found Arduino on port: ${targetPort.path}`);
            
            arduinoPort = new SerialPort({
                path: targetPort.path, 
                baudRate: 9600,
                autoOpen: true
            });

            arduinoPort.on('error', function(err) {
                console.log('[SERIAL ERROR] Connection dropped: ', err.message);
            });

        } else {
            console.log('[SERIAL WARNING] No Arduino detected. Is it plugged in?');
        }
    } catch (err) {
        console.error('[SERIAL FATAL] Could not list ports: ', err);
    }
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

    // Load the HTML file from the src folder
    mainWindow.loadFile(path.join(__dirname, 'src/index.html'));
    
    // Open DevTools for debugging (add '//' to the start of this line to hide it for production)
    mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
    // Auto-approve microphone permissions for the kiosk
    session.defaultSession.setPermissionCheckHandler((webContents, permission) => permission === 'media');
    session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => callback(permission === 'media'));

    // Trigger the hardware hunt when the app boots
    connectToArduino();
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

// ==========================================
// THE HARDWARE BRIDGE (IPC LISTENER)
// ==========================================
ipcMain.on('vend-item', (event, rowNumber) => {
    console.log(`[HARDWARE TRIGGER] Requesting drop from Row ${rowNumber}...`);
    
    if (arduinoPort && arduinoPort.isOpen) {
        arduinoPort.write(`${rowNumber}\n`, (err) => {
            if (err) return console.log('[SERIAL ERROR] Failed to send to Arduino: ', err.message);
            console.log(`[SERIAL SUCCESS] Sent command '${rowNumber}' to the machine.`);
        });
    } else {
        console.log('[SERIAL ERROR] Cannot vend. Arduino is not connected.');
    }
});