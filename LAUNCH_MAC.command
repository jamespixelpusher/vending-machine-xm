#!/bin/bash
echo "Cleaning up zombie processes..."
killall node 2>/dev/null
killall Electron 2>/dev/null

echo "Navigating to project folder..."
# This magical line automatically finds the folder the script is sitting in!
cd "$(dirname "$0")"

echo "Launching Oh Henry Vending App..."
npm start