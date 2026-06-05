// --- ELECTRON IPC & NODE SETUP ---
let ipcRenderer = null;
let fs = null;
let path = null;
let inventoryFilePath = null;

// Bulletproof node detection
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
    
    // Save the file right in your main project folder!
    if (typeof process !== 'undefined') {
        inventoryFilePath = path.join(process.cwd(), 'inventory.json');
    }
    
    console.log("[HARDWARE STATUS] Electron detected. Hardware & File System active.");
} else {
    console.warn("[DEV MODE] Standard browser detected. Hardware & File saving disabled.");
}

// --- GAME STATE ---
let currentClipName = null;
let targetClipName = null;
let baTestInterval = null;
let isDevMode = false;
let gameDurationTimeout = null;
let gameVolumePollInterval = null;

// --- INVENTORY MANAGEMENT (HARD DRIVE PERSISTENT) ---
const defaultInventory = [
    { motor: 1, stock: 10 }, { motor: 2, stock: 10 },
    { motor: 3, stock: 10 }, { motor: 4, stock: 10 },
    { motor: 5, stock: 10 }, { motor: 6, stock: 10 },
    { motor: 7, stock: 10 }, { motor: 8, stock: 10 }
];

window.motorInventory = JSON.parse(JSON.stringify(defaultInventory));

// 1. Boot up: Try to read the file from the hard drive
if (fs && inventoryFilePath && fs.existsSync(inventoryFilePath)) {
    try {
        const rawData = fs.readFileSync(inventoryFilePath, 'utf8');
        window.motorInventory = JSON.parse(rawData);
        console.log("[INVENTORY] Successfully loaded stock from inventory.json.");
    } catch (err) {
        console.error("[INVENTORY ERROR] Failed to read file, using defaults.", err);
    }
} else if (!fs) {
    // Fallback for normal web browsers
    const saved = localStorage.getItem('ohHenryInventory');
    if (saved) window.motorInventory = JSON.parse(saved);
}

// 2. Helper: Physically write the current state to the hard drive
window.saveInventory = () => {
    if (fs && inventoryFilePath) {
        try {
            fs.writeFileSync(inventoryFilePath, JSON.stringify(window.motorInventory, null, 4));
            console.log("[INVENTORY] Hard drive stock successfully updated.");
        } catch (err) {
            console.error("[INVENTORY ERROR] Could not save to hard drive.", err);
        }
    } else {
        localStorage.setItem('ohHenryInventory', JSON.stringify(window.motorInventory));
    }
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
    window.saveInventory(); // Write to file
};

window.fillAllInventory = () => {
    window.motorInventory.forEach((item, index) => {
        item.stock = 10; 
        document.getElementById(`stock-val-${index}`).innerText = "10";
    });
    window.saveInventory(); // Write to file
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
        window.saveInventory(); // Write to file immediately on drop!
        
        console.log(`Dispensing from Row ${availableMotor.motor}. (${availableMotor.stock} left on this coil)`);
        
        if (ipcRenderer) {
            ipcRenderer.send('vend-item', availableMotor.motor);
        } else {
            console.log(`[SIMULATED VEND] Sent command '${availableMotor.motor}' to hardware.`);
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
        let avg = sum / samples.length;
        
        let floor = Math.min(80, Math.round(avg + 3));
        
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

function hideTempButtons() {
    document.getElementById("btn-game-continue").style.display = "none";
    document.getElementById("btn-success-continue").style.display = "none";
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
    hideTempButtons(); 
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

            gameDurationTimeout = setTimeout(() => {
                triggerWin(); 
            }, 5000);
            break;

        case "clip_success":
            setTimeout(() => { transitionTo("clip_idle"); }, 5000);
            break;
    }
};

window.onCountdownComplete = () => {
    transitionTo("clip_game");
};

window.forceGameWin = () => { triggerWin(); };

function triggerWin() {
    clearInterval(gameVolumePollInterval);
    clearTimeout(gameDurationTimeout);
    
    if (window.stopVUMeter) window.stopVUMeter();
    window.vendNextAvailableItem();
    transitionTo("clip_success");
}

function setupKeyboardOverrides() {
    window.addEventListener('keydown', (e) => {
        if (e.key === '1') { if (window.setSimulatedScore) window.setSimulatedScore(45); } 
        if (e.key === '2') { if (window.setSimulatedScore) window.setSimulatedScore(70); } 
        if (e.key === '3') { if (window.setSimulatedScore) window.setSimulatedScore(100); } 
        // Admin Force Quit Shortcut
        if (e.key === 'Escape' && e.shiftKey) { window.close(); }
    });

    window.addEventListener('keyup', (e) => {
        if (['1', '2', '3'].includes(e.key)) {
            if (window.setSimulatedScore) window.setSimulatedScore(null); 
        }
    });
}