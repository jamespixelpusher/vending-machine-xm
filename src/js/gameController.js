console.log("Game Controller initialized.");

let currentClipName = null;
let targetClipName = null;
let baTestInterval = null;

window.onAnimateReady = () => {
    console.log("Animate timeline ready! Waiting for BA Setup...");
    if (createjs.Touch.isSupported()) createjs.Touch.enable(stage);
    setupKeyboardOverrides(); // Initialize keyboard listeners
};

// ==========================================
// BA SETUP SCREEN LOGIC
// ==========================================
window.handleMicInit = async () => {
    const success = await window.initAudio();
    if (success) {
        document.getElementById("btn-init-mic").style.display = "none";
        document.getElementById("tuning-controls").style.display = "block";
        baTestInterval = setInterval(() => {
            if (window.getGrumbleVolume) {
                const vol = window.getGrumbleVolume();
                document.getElementById("ba-test-meter-fill").style.width = vol + "%";
            }
        }, 50);
    }
};

window.updateTuning = () => {
    const sens = parseFloat(document.getElementById("slide-sens").value);
    const gate = parseInt(document.getElementById("slide-gate").value);
    const pen = parseFloat(document.getElementById("slide-pen").value);
    
    document.getElementById("val-sens").innerText = sens.toFixed(1) + "x";
    document.getElementById("val-gate").innerText = gate + "%";
    document.getElementById("val-pen").innerText = pen.toFixed(1) + "x";
    
    if (window.audioTuning) {
        window.audioTuning.sensitivity = sens;
        window.audioTuning.noiseGate = gate;
        window.audioTuning.penaltyWeight = pen;
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

// ==========================================
// CORE GAME LOGIC
// ==========================================
function initGame() {
    hideAllClips();
    transitionTo("clip_idle");
}

function hideAllClips() {
    if (!window.mcRoot || !window.mcRoot.clip_content) return;
    const clips = ["clip_idle", "clip_countdown", "clip_game", "clip_success", "clip_thanks"];
    clips.forEach(name => {
        if (window.mcRoot.clip_content[name]) window.mcRoot.clip_content[name].visible = false;
    });
}

function hideTempButtons() {
    document.getElementById("btn-game-continue").style.display = "none";
    document.getElementById("btn-success-continue").style.display = "none";
    document.getElementById("btn-thanks-continue").style.display = "none";
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
            document.getElementById("btn-game-continue").style.display = "block";
            break;
        case "clip_success":
            document.getElementById("btn-success-continue").style.display = "block";
            break;
        case "clip_thanks":
            document.getElementById("btn-thanks-continue").style.display = "block";
            break;
    }
};

window.onCountdownComplete = () => { transitionTo("clip_game"); };

window.onGameContinue = () => {
    if (window.stopVUMeter) window.stopVUMeter();
    
    let finalScore = window.getPeakScore ? window.getPeakScore() : 0;
    console.log(`Round ended. Final Peak Score: ${finalScore}`);
    
    if (window.resetPeakScore) window.resetPeakScore();
    
    let tier = 1; // Default Small
    if (finalScore >= 85) { tier = 3; } // Large
    else if (finalScore >= 50) { tier = 2; } // Medium
    
    triggerWin(tier);
};

function triggerWin(tier) {
    if (window.electronAPI && window.electronAPI.vendItem) window.electronAPI.vendItem(tier);
    transitionTo("clip_success");
}

// ==========================================
// KEYBOARD SIMULATION & OVERRIDES
// ==========================================
function setupKeyboardOverrides() {
    window.addEventListener('keydown', (e) => {
        // Only allow score simulation during the game or BA setup screen
        if (e.key === '1') { if (window.setSimulatedScore) window.setSimulatedScore(45); } // Small Grumble
        if (e.key === '2') { if (window.setSimulatedScore) window.setSimulatedScore(70); } // Medium Grumble
        if (e.key === '3') { if (window.setSimulatedScore) window.setSimulatedScore(98); } // Max Grumble
    });

    window.addEventListener('keyup', (e) => {
        // When the key is released, turn off the simulation so the meter drops
        if (['1', '2', '3'].includes(e.key)) {
            if (window.setSimulatedScore) window.setSimulatedScore(null); 
        }
    });
}