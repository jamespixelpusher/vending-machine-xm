@echo off
echo Cleaning up zombie processes...
taskkill /F /IM node.exe >nul 2>&1
taskkill /F /IM electron.exe >nul 2>&1

echo Navigating to project folder...
cd /d "%~dp0"

echo Launching Oh Henry Vending App...
npm start

echo.
echo === APP EXITED ===
pause
