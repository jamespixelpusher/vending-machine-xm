const { app, BrowserWindow, ipcMain, session } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    // 1. Create the browser window
    mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        kiosk: true, // Forces true fullscreen (no menu bar, no dock)
        autoHideMenuBar: true,
        backgroundColor: '#FFFFFF', // Prevents white flash on load if your app is dark
        webPreferences: {
            nodeIntegration: true, // Allows us to use Node.js features in our front-end
            contextIsolation: false, // Simplifies the IPC bridge for local kiosk apps
            webSecurity: false // Prevents CORS issues with local audio/image files
        }
    });

    // 2. Load your Adobe Animate HTML file
    mainWindow.loadFile(path.join(__dirname, 'src/index.html'));

    // 3. Optional: Open the DevTools automatically for debugging
    // mainWindow.webContents.openDevTools();
}

// 4. Auto-allow Microphone Access
// Kiosks can't have popup prompts asking for permission, so we auto-approve it.
app.whenReady().then(() => {
    session.defaultSession.setPermissionCheckHandler((webContents, permission, requestingOrigin, details) => {
        if (permission === 'media') {
            return true; // Always allow microphone
        }
        return false;
    });

    session.defaultSession.setPermissionRequestHandler((webContents, permission, callback, details) => {
        if (permission === 'media') {
            callback(true); // Always allow microphone
        } else {
            callback(false);
        }
    });

    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// 5. Quit when all windows are closed
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

// 6. The IPC Bridge (Placeholder for Hardware Integration)
// This listens for the 'vend-item' message from your gameController.js
ipcMain.on('vend-item', (event, tier) => {
    console.log(`[HARDWARE TRIGGER] Time to vend tier ${tier} chocolate!`);
    // Future hardware code (like Arduino serial commands) will go right here.
});