let currentClipName = null;
let targetClipName = null;
let baTestInterval = null;
let isDevMode = false;

let gameDurationTimeout = null;
let gameVolumePollInterval = null;

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
            
            let cdTime = isDevMode ? 1000 : 3000;
            setTimeout(() => { transitionTo("clip_game"); }, cdTime);
            break;

        case "clip_game":
            if (window.startVUMeter) window.startVUMeter();
            document.getElementById("btn-game-continue").style.display = "block";
            
            gameVolumePollInterval = setInterval(() => {
                let currentVol = window.getGrumbleVolume ? window.getGrumbleVolume() : 0;
                let target = window.audioTuning ? window.audioTuning.targetVolume : 80;
                
                if (currentVol >= target) {
                    triggerWin();
                }
            }, 100); 

            gameDurationTimeout = setTimeout(() => {
                triggerWin();
            }, 5000);
            break;

        case "clip_success":
            document.getElementById("btn-success-continue").style.display = "block";
            setTimeout(() => { transitionTo("clip_idle"); }, 5000);
            break;
    }
};

window.forceGameWin = () => { triggerWin(); };

function triggerWin() {
    clearInterval(gameVolumePollInterval);
    clearTimeout(gameDurationTimeout);
    
    if (window.stopVUMeter) window.stopVUMeter();
    
    if (window.electronAPI && window.electronAPI.vendItem) window.electronAPI.vendItem(1);
    
    transitionTo("clip_success");
}

function setupKeyboardOverrides() {
    window.addEventListener('keydown', (e) => {
        if (e.key === '1') { if (window.setSimulatedScore) window.setSimulatedScore(45); } 
        if (e.key === '2') { if (window.setSimulatedScore) window.setSimulatedScore(70); } 
        if (e.key === '3') { if (window.setSimulatedScore) window.setSimulatedScore(100); } 
    });

    window.addEventListener('keyup', (e) => {
        if (['1', '2', '3'].includes(e.key)) {
            if (window.setSimulatedScore) window.setSimulatedScore(null); 
        }
    });
}