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

} else {
    console.warn("[DEV MODE] Standard browser detected.");
}

// --- GAME STATE ---
let currentClipName = null;
let targetClipName = null;
let baTestInterval = null;
let isDevMode = false;
let gameDurationTimeout = null;
let gameVolumePollInterval = null;

// QA TEST MODE VARIABLES
let qaInterval = null;
let qaMotor = 1;

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

window.fillAllInventory = () => {
    window.motorInventory.forEach((item, index) => {
        item.stock = 10; 
        document.getElementById(`stock-val-${index}`).innerText = "10";
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
        availableMotor.stock -= 1;
        window.saveInventory(); 
        
        console.log(`Dispensing from Row ${availableMotor.motor}.`);
        if (ipcRenderer) {
            ipcRenderer.send('vend-item', availableMotor.motor);
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
};

window.handleMicInit = async () => {
    const success = await window.initAudio();
    if (success) {
        document.getElementById("btn-init-mic").style.display = "none";
        document.getElementById("tuning-controls").style.display = "block";
        baTestInterval = setInterval(() => {
            if (window.getGrumbleVolume) {
                document.getElementById("ba-test-meter-fill").style.width = window.getGrumbleVolume() + "%";
            }
        }, 50);
    }
};

window.runCalibration = () => {
    const btn = document.getElementById("btn-calibrate");
    const display = document.getElementById("val-floor");
    btn.disabled = true;
    btn.innerText = "Listening...";
    
    let samples = [];
    let calInterval = setInterval(() => {
        if (window.getRawVolume) samples.push(window.getRawVolume());
    }, 50);

    setTimeout(() => {
        clearInterval(calInterval);
        let sum = samples.reduce((a, b) => a + b, 0);
        let floor = Math.min(80, Math.round((sum / samples.length) + 3));
        
        if (window.audioTuning) window.audioTuning.noiseFloor = floor;
        display.innerText = "Baseline Floor: " + floor + "%";
        
        btn.innerText = "Recalibrate";
        btn.disabled = false;
    }, 3000);
};

window.updateTuning = () => {
    isDevMode = document.getElementById("check-devmode").checked;
    const target = parseInt(document.getElementById("slide-target").value);
    const boost = parseFloat(document.getElementById("slide-boost").value);
    const deepOnly = document.getElementById("check-deep").checked;
    
    document.getElementById("val-target").innerText = target + "%";
    document.getElementById("val-boost").innerText = boost.toFixed(1) + "x";
    document.getElementById("win-line-indicator").style.left = target + "%";
    document.getElementById("win-label").style.left = target + "%";

    if (window.audioTuning) {
        window.audioTuning.targetVolume = target;
        window.audioTuning.micBoost = boost;
        window.audioTuning.deepGrowlOnly = deepOnly;
    }
};

window.launchKiosk = () => {
    clearInterval(baTestInterval);
    document.getElementById("ba-setup-screen").style.display = "none";
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

function transitionTo(newClipName) {
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

    activeClip.visible = true;
    activeClip.gotoAndPlay("anim_in");
}

window.onOutroComplete = () => { bringInNextClip(); };

window.onIntroComplete = () => {
    const activeClip = window.mcRoot.clip_content[currentClipName];
    activeClip.gotoAndStop("active");

    switch(currentClipName) {
        case "clip_idle":
            const beginBtn = activeClip.button_begin;
            if (beginBtn) {
                beginBtn.cursor = "pointer"; 
                beginBtn.removeAllEventListeners("click"); 
                beginBtn.on("click", () => { transitionTo("clip_countdown"); });
            }
            break;

        case "clip_countdown":
            if (activeClip.countdown_anim) activeClip.countdown_anim.gotoAndPlay("countdown_start");
            break;

        case "clip_game":
            if (window.startVUMeter) window.startVUMeter();
            
            gameVolumePollInterval = setInterval(() => {
                let currentVol = window.getGrumbleVolume ? window.getGrumbleVolume() : 0;
                let target = window.audioTuning ? window.audioTuning.targetVolume : 80;
                if (currentVol >= target) triggerWin();
            }, 100); 

            gameDurationTimeout = setTimeout(() => { triggerWin(); }, 5000);
            break;

        case "clip_success":
            setTimeout(() => { transitionTo("clip_idle"); }, 5000);
            break;
    }
};

window.onCountdownComplete = () => { transitionTo("clip_game"); };

function triggerWin() {
    clearInterval(gameVolumePollInterval);
    clearTimeout(gameDurationTimeout);
    
    if (window.stopVUMeter) window.stopVUMeter();
    window.vendNextAvailableItem();
    transitionTo("clip_success");
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
    if (qaInterval) {
        clearInterval(qaInterval);
        qaInterval = null;
        console.log("[QA MODE] Sequence Terminated.");
    } else {
        console.log("[QA MODE] INITIATED. Firing sequential loop...");
        qaMotor = 1;
        qaInterval = setInterval(() => {
            console.log(`[QA MODE] Stress testing Motor ${qaMotor}...`);
            if (ipcRenderer) ipcRenderer.send('vend-item', qaMotor);
            qaMotor++;
            if (qaMotor > 8) qaMotor = 1; // Loop back to 1
        }, 5000); // 5000ms delay safely spaces out the motor runs
    }
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
                if (ipcRenderer) ipcRenderer.send('vend-item', motorNumber);
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