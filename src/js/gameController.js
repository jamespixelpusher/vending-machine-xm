// --- ELECTRON IPC & NODE SETUP ---
let ipcRenderer = null;
let fs = null;
let path = null;
let inventoryFilePath = null;
let isHardwareConnected = true; 

const getRequire = () => {
    if (typeof require !== 'undefined') return require;
    if (typeof window !== 'undefined' && window.require) return window.require;
    return null;
};

const nodeRequire = getRequire();

if (nodeRequire) {
    ipcRenderer = nodeRequire('electron').ipcRenderer;
    fs = nodeRequire('fs');
    path = nodeRequire('path');
    
    if (typeof process !== 'undefined') {
        inventoryFilePath = path.join(process.cwd(), 'inventory.json');
    }

    ipcRenderer.on('hardware-status', (event, data) => {
        const debugPanel = document.getElementById('debug-panel');
        const debugLog = document.getElementById('debug-log');
        
        if (!data.connected) {
            if (isHardwareConnected || debugPanel.style.display !== 'block') {
                debugPanel.style.display = 'block';
                debugLog.innerHTML += `<div style="color: #FF3333;">[SCANNING] ${data.error}</div>`;
            }
            isHardwareConnected = false;
        } else {
            if (!isHardwareConnected) {
                debugLog.innerHTML += `<div style="color: #00FF00;">[OK] ARDUINO CONNECTED (${data.port})</div>`;
                isHardwareConnected = true;
                
                setTimeout(() => {
                    if (isHardwareConnected) debugPanel.style.display = 'none';
                }, 2500);
            }
        }
        debugLog.scrollTop = debugLog.scrollHeight;
    });

    // LISTENER FOR THE QA HUD STATS
    ipcRenderer.on('qa-stats', (event, stats) => {
        const qaPanel = document.getElementById('qa-live-stats');
        if (qaPanel) {
            qaPanel.innerHTML = `
                <div style="font-size: 24px; font-weight: bold; margin-bottom: 10px; color: #FFD200;">QA STRESS TEST LIVE</div>
                <div>Electron Requested: <span style="color:#00FF00;">${stats.requested}</span></div>
                <div>Arduino Confirmed: <span style="color:#00FF00;">${stats.confirmed}</span></div>
                <div>Missed Drops: <span style="color:#E21836;">${stats.requested - stats.confirmed}</span></div>
                <hr style="border-color: #555; margin: 10px 0;">
                <div>USB Disconnects: <span style="color:#FFD200;">${stats.disconnects}</span></div>
                <div>Queued Recovery Vends: <span style="color:#00FF00;">${stats.queued}</span></div>
            `;
        }
    });

} else {
    console.warn("[DEV MODE] Standard browser detected.");
}

// --- DEV MODE ---
window.applyDevMode = () => {
    const checkbox = document.getElementById('check-devmode-main');
    isDevMode = checkbox.checked;

    const wrap = document.getElementById('dev-toggle-wrap');
    if (wrap) wrap.classList.toggle('active', isDevMode);

    console.log(`[SYSTEM] Dev Mode: ${isDevMode ? 'ON — inventory protected, relay testing active' : 'OFF'}`);
};

// --- GAME STATE ---
let currentClipName = null;
let targetClipName = null;
let baTestInterval = null;
let isDevMode = false;
let gameDurationTimeout = null;
let gameVolumePollInterval = null;
let gameWinDelayTimeout = null;

// QA TEST MODE VARIABLES
let qaInterval = null;   // holds the active setTimeout handle
let qaRunning = false;   // true while the stress test is active
let qaDevMotorIndex = 0; // tracks position in the motor list for dev mode cycling

// --- INVENTORY MANAGEMENT ---
const defaultInventory = [
    { motor: 1, stock: 10 }, { motor: 2, stock: 10 },
    { motor: 3, stock: 10 }, { motor: 4, stock: 10 },
    { motor: 5, stock: 10 }, { motor: 6, stock: 10 },
    { motor: 7, stock: 10 }, { motor: 8, stock: 10 }
];

window.motorInventory = JSON.parse(JSON.stringify(defaultInventory));

if (fs && inventoryFilePath && fs.existsSync(inventoryFilePath)) {
    try {
        const rawData = fs.readFileSync(inventoryFilePath, 'utf8');
        window.motorInventory = JSON.parse(rawData);
    } catch (err) {}
} else if (!fs) {
    const saved = localStorage.getItem('ohHenryInventory');
    if (saved) window.motorInventory = JSON.parse(saved);
}

window.checkLowStock = () => {
    const totalStock = window.motorInventory.reduce((sum, item) => sum + item.stock, 0);
    const warningBadge = document.getElementById("low-stock-warning");
    if (warningBadge) {
        warningBadge.style.display = (totalStock <= 15) ? 'block' : 'none';
    }
};

window.saveInventory = () => {
    if (fs && inventoryFilePath) {
        try { fs.writeFileSync(inventoryFilePath, JSON.stringify(window.motorInventory, null, 4)); } catch (err) {}
    } else {
        localStorage.setItem('ohHenryInventory', JSON.stringify(window.motorInventory));
    }
    window.checkLowStock();
};

function renderInventoryUI() {
    const container = document.getElementById("inventory-grid-container");
    container.innerHTML = "";
    
    window.motorInventory.forEach((item, index) => {
        container.innerHTML += `
            <div class="motor-card">
                <div class="motor-label">Row ${item.motor}</div>
                <div class="stock-control">
                    <button class="stock-btn" onclick="window.adjustStock(${index}, -1)">-</button>
                    <div class="stock-display" id="stock-val-${index}">${item.stock}</div>
                    <button class="stock-btn" onclick="window.adjustStock(${index}, 1)">+</button>
                </div>
            </div>
        `;
    });
}

window.adjustStock = (index, amount) => {
    let newStock = window.motorInventory[index].stock + amount;
    if (newStock < 0) newStock = 0;
    if (newStock > 15) newStock = 15; 
    
    window.motorInventory[index].stock = newStock;
    document.getElementById(`stock-val-${index}`).innerText = newStock;
    window.saveInventory(); 
};

window.fillAllInventory = (count = 10) => {
    window.motorInventory.forEach((item, index) => {
        item.stock = count;
        document.getElementById(`stock-val-${index}`).innerText = count;
    });
    window.saveInventory();
};

window.showInventoryScreen = () => {
    document.getElementById("tuning-controls").style.display = "none";
    document.getElementById("inventory-controls").style.display = "block";
    renderInventoryUI();
};

window.backToTuning = () => {
    document.getElementById("inventory-controls").style.display = "none";
    document.getElementById("tuning-controls").style.display = "block";
};

window.vendNextAvailableItem = () => {
    let availableMotor = window.motorInventory.find(m => m.stock > 0);

    if (availableMotor) {
        if (!isDevMode) {
            availableMotor.stock -= 1;
            window.saveInventory();
        } else {
            console.log(`[DEV MODE] Inventory protected. Relay command firing for Row ${availableMotor.motor}.`);
        }

        console.log(`Dispensing from Row ${availableMotor.motor}.`);
        if (ipcRenderer) {
            ipcRenderer.send('vend-item', { motor: availableMotor.motor, benchTest: false });
        }
        return true;
    } else {
        console.log("CRITICAL: Machine is completely empty!");
        return false;
    }
};

// --- CORE GAME ENGINE ---
window.onAnimateReady = () => {
    if (createjs.Touch.isSupported()) createjs.Touch.enable(stage);
    setupKeyboardOverrides();
    window.checkLowStock();
    window.applyCopy();
};

window.handleMicInit = async () => {
    const success = await window.initAudio();
    if (success) {
        document.getElementById("btn-init-mic").style.display = "none";
        document.getElementById("tuning-controls").style.display = "block";
        // Calibrate the baseline the same way the game does — but only when auto-
        // calibration is on. Set audioTuning.autoCalibrate = false for standardized
        // testing so the noise floor stays fixed and the same tone always reads the same.
        if (window.audioTuning && window.audioTuning.autoCalibrate && window.calibrateNoiseFloor) {
            window.calibrateNoiseFloor();
        }
        startMicTestMeter();
    }
};

// Live peak-hold meter on the mic settings screen. Re-started whenever that screen is shown.
function startMicTestMeter() {
    clearInterval(baTestInterval);
    let peakHold = 0;
    baTestInterval = setInterval(() => {
        if (window.getGrumbleVolume) {
            const v = window.getGrumbleVolume();
            // Peak-hold so a momentary peak (which would win the game) stays
            // visible against the win line instead of flicking past it.
            peakHold = Math.max(v, peakHold - 2);
            document.getElementById("ba-test-meter-fill").style.width = peakHold + "%";
        }
    }, 50);
}

// Return to the mic settings screen from anywhere (the 'm' key). Stops the running game
// and re-shows the setup panel with the live tuning meter going.
window.showMicSettings = () => {
    clearInterval(gameVolumePollInterval);
    clearTimeout(gameDurationTimeout);
    clearTimeout(gameWinDelayTimeout);
    if (window.stopVUMeter) window.stopVUMeter();
    if (window.hideSpectrumBg) window.hideSpectrumBg();
    if (window.setSimulatedScore) window.setSimulatedScore(null);

    const anim = document.getElementById("animation_container");
    if (anim) { anim.style.opacity = "0"; anim.style.display = "none"; }
    const idleBtn = document.getElementById("idle-tap-btn");
    if (idleBtn) idleBtn.style.display = "none";

    document.getElementById("ba-setup-screen").style.display = "flex";
    currentClipName = null;   // so the next launch starts cleanly at idle
    startMicTestMeter();
};

window.runCalibration = () => {
    const btn = document.getElementById("btn-calibrate");
    const display = document.getElementById("val-floor");
    btn.disabled = true;
    btn.innerText = "Listening...";

    // Use the exact routine the game runs each round, so manual and automatic
    // calibration always produce the same baseline floor.
    window.calibrateNoiseFloor(3000).then((floor) => {
        if (display) display.innerText = "Baseline Floor: " + floor + "%";
        btn.innerText = "Recalibrate";
        btn.disabled = false;
    });
};

window.updateTuning = () => {
    const target = parseInt(document.getElementById("slide-target").value);
    const boost = parseFloat(document.getElementById("slide-boost").value);

    document.getElementById("val-target").innerText = target + "%";
    document.getElementById("val-boost").innerText = boost.toFixed(1) + "x";
    document.getElementById("win-line-indicator").style.left = target + "%";
    document.getElementById("win-label").style.left = target + "%";

    if (window.audioTuning) {
        window.audioTuning.targetVolume = target;
        window.audioTuning.micBoost = boost;
    }
};

window.launchKiosk = () => {
    clearInterval(baTestInterval);
    document.getElementById("ba-setup-screen").style.display = "none";

    const devBanner = document.getElementById('dev-mode-banner');
    if (devBanner) devBanner.style.display = isDevMode ? 'block' : 'none';

    const animContainer = document.getElementById("animation_container");
    animContainer.style.display = "block";
    setTimeout(() => {
        animContainer.style.opacity = "1";
        initGame();
    }, 50);
};

function initGame() {
    hideAllClips();
    transitionTo("clip_idle");
}

function hideAllClips() {
    if (!window.mcRoot || !window.mcRoot.clip_content) return;
    const clips = ["clip_idle", "clip_countdown", "clip_game", "clip_success"];
    clips.forEach(name => {
        if (window.mcRoot.clip_content[name]) window.mcRoot.clip_content[name].visible = false;
    });
}

window.handleIdleTap = () => {
    document.getElementById('idle-tap-btn').style.display = 'none';
    // Re-measure the room's ambient noise at the start of each round (during the
    // countdown, before the participant growls) so difficulty stays consistent.
    if (window.audioTuning && window.audioTuning.autoCalibrate && window.calibrateNoiseFloor) {
        window.calibrateNoiseFloor();
    }
    transitionTo("clip_countdown");
};

function transitionTo(newClipName) {
    document.getElementById('idle-tap-btn').style.display = 'none';
    // Fade the spectrum out the moment the game screen starts animating out
    if (currentClipName === "clip_game" && window.hideSpectrumBg) window.hideSpectrumBg();
    targetClipName = newClipName;
    if (currentClipName && window.mcRoot.clip_content[currentClipName]) {
        window.mcRoot.clip_content[currentClipName].gotoAndPlay("anim_out");
    } else {
        bringInNextClip();
    }
}

function bringInNextClip() {
    hideAllClips();
    currentClipName = targetClipName;
    
    window.mcRoot.clip_content.gotoAndStop(currentClipName);
    const activeClip = window.mcRoot.clip_content[currentClipName];

    if (currentClipName === "clip_countdown" && activeClip.countdown_anim) {
        activeClip.countdown_anim.gotoAndStop(0); 
    }

    // Reset the meter to its starting position before the game's intro animates in
    if (currentClipName === "clip_game" && window.resetVUMeter) window.resetVUMeter();

    activeClip.visible = true;
    activeClip.gotoAndPlay("anim_in");

    // Re-apply copy after gotoAndPlay so Animate timeline keyframes
    // don't overwrite programmatically-set language text
    if (window.applyCopy) window.applyCopy();

    // Idle loops in Animate — show tap overlay immediately, don't wait for onIntroComplete
    if (currentClipName === "clip_idle") {
        document.getElementById('idle-tap-btn').style.display = 'block';
    }
}

window.onOutroComplete = () => { bringInNextClip(); };

window.onIntroComplete = () => {
    const activeClip = window.mcRoot.clip_content[currentClipName];
    activeClip.gotoAndStop("active");

    // gotoAndStop() recreates Animate frame objects with their baked-in defaults.
    // Re-apply copy immediately so FR text isn't wiped back to EN.
    if (window.applyCopy) window.applyCopy();

    switch(currentClipName) {
        case "clip_countdown":
            if (window.hideSpectrumBg) window.hideSpectrumBg();
            if (activeClip.countdown_anim) activeClip.countdown_anim.gotoAndPlay("countdown_start");
            break;

        case "clip_game":
            if (window.showSpectrumBg) window.showSpectrumBg();
            if (window.startVUMeter) window.startVUMeter();

            gameVolumePollInterval = setInterval(() => {
                let currentVol = window.getGrumbleVolume ? window.getGrumbleVolume() : 0;
                let target = window.audioTuning ? window.audioTuning.targetVolume : 80;
                if (currentVol >= target) {
                    // Win detected: stop polling, sweep the needle to the top, and wait ~500ms
                    // so the meter reaches the winning position before we freeze it. (A sudden
                    // loud spike otherwise freezes the needle partway up.)
                    clearInterval(gameVolumePollInterval);
                    if (window.lockVUMeter) window.lockVUMeter(100);
                    gameWinDelayTimeout = setTimeout(triggerWin, 500);
                }
            }, 100);

            if (isDevMode) gameDurationTimeout = setTimeout(() => { triggerWin(); }, 5000);
            break;

        case "clip_success":
            if (window.hideSpectrumBg) window.hideSpectrumBg();
            setTimeout(() => { transitionTo("clip_idle"); }, 5000);
            break;
    }
};

window.onCountdownComplete = () => {
    // frame_319 calls this.stop() before this callback fires, so the clip is
    // frozen at 319. Play forward 10 frames to reach frame 329 where
    // onOutroComplete fires → bringInNextClip("clip_game").
    targetClipName = "clip_game";
    const countdown = window.mcRoot.clip_content.clip_countdown;
    if (countdown) {
        countdown.gotoAndPlay(320);
        // Re-apply copy — the outro frames may recreate text objects with EN defaults
        if (window.applyCopy) window.applyCopy();
    }
};

function triggerWin() {
    clearInterval(gameVolumePollInterval);
    clearTimeout(gameDurationTimeout);
    clearTimeout(gameWinDelayTimeout);

    // Freeze the meter where it is (its winning position) — do NOT snap it back to 0.
    if (window.stopVUMeter) window.stopVUMeter(false);
    window.vendNextAvailableItem();

    // Hold on the game screen for 2 seconds with the needle frozen in the winning
    // position, then transition to the win screen.
    setTimeout(() => {
        transitionTo("clip_success");
    }, 2000);
}

window.runDiagnostic = () => {
    const debugPanel = document.getElementById('debug-panel');
    const debugLog = document.getElementById('debug-log');
    debugPanel.style.display = 'block';
    
    debugLog.innerHTML = `<div style="color: #FFD200; border-bottom: 1px solid #FFD200; margin-bottom: 10px;">Running System Scan...</div>`;

    if (fs && inventoryFilePath) {
        debugLog.innerHTML += `<div style="color: #00FF00;">[OK] Native File System Active</div>`;
        if (fs.existsSync(inventoryFilePath)) {
            debugLog.innerHTML += `<div style="color: #00FF00;">[OK] inventory.json Verified</div>`;
        } else {
            debugLog.innerHTML += `<div style="color: #FF3333;">[FAIL] inventory.json Missing</div>`;
        }
    } else {
        debugLog.innerHTML += `<div style="color: #FF3333;">[FAIL] File System Disabled</div>`;
    }

    if (ipcRenderer) {
        debugLog.innerHTML += `<div style="color: #00FF00;">[OK] IPC Bridge Active</div>`;
        ipcRenderer.send('request-hardware-status');
    } else {
        debugLog.innerHTML += `<div style="color: #FF3333;">[FAIL] IPC Bridge Disconnected</div>`;
    }
};

// --- QA STRESS TEST MODULE ---
window.toggleQAMode = () => {
    // --- STOP ---
    if (qaRunning) {
        qaRunning = false;
        if (qaInterval) { clearTimeout(qaInterval); qaInterval = null; }
        console.log("[QA MODE] Sequence Terminated.");
        const panel = document.getElementById('qa-live-stats');
        if (panel) panel.remove();
        return;
    }

    // --- START ---
    qaRunning = true;
    qaDevMotorIndex = 0;
    console.log("[QA MODE] INITIATED.");

    let qaPanel = document.getElementById('qa-live-stats');
    if (!qaPanel) {
        qaPanel = document.createElement('div');
        qaPanel.id = 'qa-live-stats';
        qaPanel.style.cssText = 'position:absolute; top:20px; right:20px; background:rgba(12, 35, 64, 0.95); color:#fff; padding:20px; border:3px solid #E21836; border-radius:10px; z-index:10000; font-family:monospace; font-size:18px; box-shadow: 0px 5px 15px rgba(0,0,0,0.5); min-width: 300px;';
        qaPanel.innerHTML = `<div style="font-size: 24px; font-weight: bold; margin-bottom: 10px; color: #FFD200;">QA STRESS TEST LIVE</div><div>Awaiting Data...</div>`;
        document.body.appendChild(qaPanel);
    }

    function stopTest(message) {
        qaRunning = false;
        qaInterval = null;
        console.log(`[QA MODE] ${message}`);
        const p = document.getElementById('qa-live-stats');
        if (p) p.innerHTML += `<div style="margin-top:10px; color:#FF3333; font-weight:bold;">${message}</div>`;
    }

    function runNextVend() {
        if (!qaRunning) return;

        if (isDevMode) {
            // DEV MODE: blind drop (benchTest: true) — Arduino runs relay 2.5s, no optocoupler needed.
            // Depletes inventory so the full stock cycle can be validated.
            const motor = window.motorInventory.find(m => m.stock > 0);
            if (!motor) { stopTest("INVENTORY EMPTY — TEST STOPPED"); return; }
            motor.stock -= 1;
            window.saveInventory();
            console.log(`[QA DEV] Blind drop Motor ${motor.motor} (stock now ${motor.stock})...`);
            if (ipcRenderer) ipcRenderer.send('vend-item', { motor: motor.motor, benchTest: true });
        } else {
            // NORMAL MODE: full auto-home vend via inventory, motor cool-off buffer between drops
            const result = window.vendNextAvailableItem();
            if (!result) { stopTest("INVENTORY EMPTY — TEST STOPPED"); return; }
        }

        // Wait for Arduino to confirm (HOMING_COMPLETE or BLIND_VEND_COMPLETE),
        // then pause 1s for motor cool-off before firing the next one.
        // Fallback: if no confirmation in 10s, proceed anyway.
        const COOLOFF_MS  = 1000;
        const FALLBACK_MS = 10000;
        let settled = false;

        const proceed = () => {
            if (settled || !qaRunning) return;
            settled = true;
            if (ipcRenderer) ipcRenderer.removeListener('vend-complete', onConfirm);
            clearTimeout(fallback);
            qaInterval = setTimeout(runNextVend, COOLOFF_MS);
        };

        const onConfirm = () => {
            console.log('[QA] Arduino confirmed vend — cooling off 1s...');
            proceed();
        };

        const fallback = setTimeout(() => {
            console.log('[QA] No Arduino confirmation after 10s — proceeding anyway.');
            proceed();
        }, FALLBACK_MS);

        if (ipcRenderer) ipcRenderer.on('vend-complete', onConfirm);
    }

    runNextVend();
};

// --- KEYBOARD CONTROLS ---
let autoWinInterval = null;

window.triggerOrganicWin = () => {
    if (autoWinInterval) return; 
    window.simulatedScore = 0; 
    autoWinInterval = setInterval(() => {
        window.simulatedScore += 5; 
        if (window.simulatedScore >= 100) {
            clearInterval(autoWinInterval);
            autoWinInterval = null;
            setTimeout(() => { window.simulatedScore = null; }, 1000); 
        }
    }, 50);
};

function setupKeyboardOverrides() {
    window.addEventListener('keydown', (e) => {
        const key = e.key.toLowerCase(); 

        // 1. QA STRESS TEST (Ctrl + Shift + Q)
        if (e.ctrlKey && e.shiftKey && key === 'q') {
            window.toggleQAMode();
            return;
        }

        // 2. SPECIFIC MOTOR OVERRIDES (Shift + 1 through 8)
        if (e.shiftKey && e.code.startsWith('Digit')) {
            const motorNumber = parseInt(e.code.replace('Digit', ''));
            if (motorNumber >= 1 && motorNumber <= 8) {
                console.log(`[ADMIN OVERRIDE] Directly triggering Motor ${motorNumber}`);
                if (ipcRenderer) ipcRenderer.send('vend-item', { motor: motorNumber, benchTest: false });
                return; 
            }
        }

        // 3. VOLUME TEST VALUES (Press 1, 2, or 3 without Shift)
        if (!e.shiftKey && !e.ctrlKey) {
            if (key === '1') { if (window.setSimulatedScore) window.setSimulatedScore(45); } 
            if (key === '2') { if (window.setSimulatedScore) window.setSimulatedScore(70); } 
            if (key === '3') { if (window.setSimulatedScore) window.setSimulatedScore(100); } 
        }
        
        // 4. GAMEPLAY OVERRIDES
        if (key === 'm') { window.showMicSettings(); }
        if (key === 'w' && currentClipName === "clip_game") { window.triggerOrganicWin(); }
        if (key === 'd') { window.vendNextAvailableItem(); }
        if (key === '`' || key === '~') { window.runDiagnostic(); }
        if (e.key === 'Escape' && e.shiftKey) { window.close(); }
    });

    window.addEventListener('keyup', (e) => {
        if (!e.shiftKey && ['1', '2', '3'].includes(e.key)) {
            if (window.setSimulatedScore) window.setSimulatedScore(null); 
        }
    });
}