# Oh Henry! XM - Vending Machine Controller

This repository contains the physical hardware bridge and frontend kiosk application for the custom Oh Henry! voice-activated vending machine. It uses Electron.js to provide a full-screen, always-on-top interface and communicates via USB Serial to a custom Arduino relay matrix.

## ⚙️ Prerequisites (Mac & PC)
Before installing, ensure the host machine has the following software installed:
1. [Node.js](https://nodejs.org/) (LTS Version recommended)
2. [Git](https://git-scm.com/downloads)
3. [Arduino IDE](https://www.arduino.cc/en/software) (Only needed if updating hardware firmware)

---

## 🚀 Installation & Setup

1. **Clone the Repository**
   Open Terminal (Mac) or Command Prompt (PC) and run:
   ```bash
   git clone <YOUR_REPO_URL_HERE>
   cd vending-machine-xm

```

2. **Install Dependencies**
Run the Node package installer to grab Electron and SerialPort libraries:
```bash
npm install

```


3. **Updating the App (If changes are made online)**
To pull the latest code from the repository in the future:
```bash
git pull
npm install

```



---

## 🕹️ Running the Application

### Method 1: Developer Mode (Via Terminal)

Simply navigate to the project folder and start the Node environment:

```bash
npm start

```

### Method 2: Live Event Auto-Launchers (Recommended)

To prevent the OS from stealing focus and to automatically clean up crashed background processes, use the provided auto-launch scripts.

**🍏 For Mac (macOS):**

1. Locate the `launcher.command` file in the root folder.
2. The first time you clone the repo, you must make it executable. Open Terminal and run:
`chmod +x /path/to/vending-machine-xm/launcher.command`
3. Simply double-click `launcher.command` to start the kiosk!

**🪟 For PC (Windows):**

1. Create a new text file in the root folder named `launcher.bat`.
2. Paste the following code into it and save:
```bat
@echo off
echo Cleaning up zombie processes...
taskkill /F /IM node.exe >nul 2>&1
taskkill /F /IM electron.exe >nul 2>&1
echo Launching Oh Henry Vending App...
cd /d "%~dp0"
npm start

```


3. Simply double-click `launcher.bat` to start the kiosk!

---

## ⌨️ Administrator Keyboard Controls

When the app is running, the following hidden shortcuts are active:

* **`W`**: Auto-Win (Triggers a successful drop during the game phase)
* **`D`**: Emergency Drop (Bypasses the game, dispenses next available candy)
* **`1`, `2`, `3**`: Hold to simulate 45%, 70%, or 100% microphone volume
* **`Shift + (1-8)`**: Sniper Drop (Directly fires Motor 1 through 8)
* **`Ctrl + Shift + Q`**: QA Stress Test Mode (Infinite loop that tests all motors and spawns the dev tracking HUD)
* **`~` (Tilde)**: Shows the Diagnostic Panel
* **`Shift + Escape`**: Force Quit the Application

```

---

### 📄 4. `launcher.command` (For Mac, save in the Root Folder)
*Save this file and run `chmod +x launcher.command` via terminal to make it double-clickable.*

```bash
#!/bin/bash
echo "Cleaning up zombie processes..."
killall node 2>/dev/null
killall Electron 2>/dev/null

echo "Navigating to project folder..."
cd "$(dirname "$0")"

echo "Launching Oh Henry Vending App..."
npm start

```

---

### 📄 5. `launcher.bat` (For Windows, save in the Root Folder)

*If you end up using a PC on-site, simply double-click this file.*

```bat
@echo off
echo Cleaning up zombie processes...
taskkill /F /IM node.exe >nul 2>&1
taskkill /F /IM electron.exe >nul 2>&1

echo Launching Oh Henry Vending App...
cd /d "%~dp0"
npm start

```