let audioContext = null;
let analyser = null;
let microphone = null;
let dataArray = null;

window.audioTuning = {
    targetVolume: 80,
    micBoost: 2.0,   // gain multiplier — higher = easier to hit the target
    noiseFloor: 0,
    // Fixed floor — no automatic per-round re-measure. Auto-calibration was the cause of
    // the "volume drops after ~1s" problem: it sampled for 1.2s then raised the floor,
    // which both dropped every reading and banked your own test tone as "ambient". Use the
    // Calibrate button to set a fixed floor once on-site if a venue is noisy.
    autoCalibrate: false
};

window.simulatedScore = null; 

window.initAudio = async function() {
    if (audioContext) return; 

    try {
        // Disable the browser's automatic gain control / noise suppression / echo
        // cancellation so the same growl always reads the same. (AGC silently
        // re-normalises the mic gain, which makes the game randomly easy or impossible.)
        const noDSP = { echoCancellation: false, noiseSuppression: false, autoGainControl: false };
        const stream = await navigator.mediaDevices.getUserMedia({ audio: noDSP, video: false });

        // Belt-and-suspenders: re-assert the constraints on the live track, then log
        // what actually stuck. If autoGainControl reads false here but the level still
        // peaks-then-drops, the gain control is happening at the OS / driver level.
        const micTrack = stream.getAudioTracks()[0];
        if (micTrack) {
            try { await micTrack.applyConstraints(noDSP); } catch (e) {}
            const s = micTrack.getSettings ? micTrack.getSettings() : {};
            console.log('[MIC DSP] autoGainControl=' + s.autoGainControl +
                        ' noiseSuppression=' + s.noiseSuppression +
                        ' echoCancellation=' + s.echoCancellation);
        }

        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 1024; 
        const bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);

        microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyser);
        return true; 
    } catch (err) {
        return false;
    }
};

window.getRawVolume = function() {
    if (!analyser) return 0;
    analyser.getByteFrequencyData(dataArray);

    const minBin = 1;
    const maxBin = 64;   // ~50 Hz–3 kHz: the full grumble range, so deep male growls AND
                         // higher-pitched women's / children's grumbles all register.

    // Average the loudest ~20 bins in the band. A grumble is BROADBAND (energy spread
    // across many bins) so it keeps a high average here; a hum or whistle is TONAL (energy
    // in just a few bins), so averaging 20 bins pulls its score right down. That makes
    // grumbling — not humming — the sound that wins.
    const band = [];
    for (let i = minBin; i <= maxBin; i++) band.push(dataArray[i]);
    band.sort((a, b) => b - a);
    const k = Math.min(20, band.length);
    let sum = 0;
    for (let i = 0; i < k; i++) sum += band[i];
    const avg = sum / k;

    return (avg / 255) * 100;
};

window.getGrumbleVolume = function() {
    if (window.simulatedScore !== null) {
        let jitter = (Math.random() * 10) - 5;
        return Math.min(100, Math.max(0, window.simulatedScore + jitter));
    } 

    let raw = window.getRawVolume();
    
    if (raw <= window.audioTuning.noiseFloor) {
        return 0;
    }

    let usableRange = 100 - window.audioTuning.noiseFloor;
    let scaledScore = ((raw - window.audioTuning.noiseFloor) / usableRange) * 100;
    let finalScore = scaledScore * window.audioTuning.micBoost;

    return Math.min(100, Math.max(0, finalScore)); 
};

window.setSimulatedScore = function(score) {
    window.simulatedScore = score;
};

// Sample ~durationMs of ambient room noise and set noiseFloor from it.
// Call this in a quiet moment (e.g. the countdown, before the participant growls)
// so the win threshold adapts to the room. Returns a Promise resolving to the floor.
window.calibrateNoiseFloor = function(durationMs = 1200) {
    return new Promise((resolve) => {
        if (!analyser) { resolve(window.audioTuning.noiseFloor); return; }
        const samples = [];
        const id = setInterval(() => { samples.push(window.getRawVolume()); }, 50);
        setTimeout(() => {
            clearInterval(id);
            const avg = samples.length
                ? samples.reduce((a, b) => a + b, 0) / samples.length
                : 0;
            // ambient + a small margin, capped so a noisy room can't make it unwinnable
            const floor = Math.min(60, Math.round(avg + 4));
            window.audioTuning.noiseFloor = floor;
            resolve(floor);
        }, durationMs);
    });
};

// Live mic frequency content for the on-screen spectrum.
// Returns `bands` values in 0..1 (low frequencies on the left).
window.getSpectrumLevels = function(bands) {
    if (!analyser || !dataArray) return new Array(bands).fill(0);
    analyser.getByteFrequencyData(dataArray);

    const binCount = dataArray.length;            // 512 bins (fftSize 1024)
    const minBin = 1;
    const maxBin = Math.min(binCount - 1, 200);   // low–mid range, where voice/growl energy lives
    const span = maxBin - minBin;
    const levels = new Array(bands).fill(0);

    for (let b = 0; b < bands; b++) {
        // Log-ish spacing so low frequencies spread across more columns.
        const lo = minBin + Math.floor(span * Math.pow(b / bands, 1.7));
        const hi = Math.max(lo + 1, minBin + Math.floor(span * Math.pow((b + 1) / bands, 1.7)));
        let sum = 0, n = 0;
        for (let i = lo; i < hi && i < binCount; i++) { sum += dataArray[i]; n++; }
        levels[b] = n ? (sum / n) / 255 : 0;       // 0..1
    }
    return levels;
};