let audioContext = null;
let analyser = null;
let microphone = null;
let dataArray = null;

window.audioTuning = {
    deepGrowlOnly: true, 
    targetVolume: 80,
    micBoost: 1.0,
    noiseFloor: 0
};

window.simulatedScore = null; 

window.initAudio = async function() {
    if (audioContext) return; 

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        
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
    
    let sum = 0;
    let minBin = 1; 
    let maxBin = window.audioTuning.deepGrowlOnly ? 10 : 64;

    for (let i = minBin; i <= maxBin; i++) { 
        sum += dataArray[i]; 
    }
    
    let avg = sum / (maxBin - minBin + 1);
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