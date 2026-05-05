console.log("Audio Processor loaded.");

let audioContext = null;
let analyser = null;
let microphone = null;
let dataArray = null;
let peakGrumbleScore = 0; 

// TUNING PARAMETERS
window.audioTuning = {
    sensitivity: 1.8,     
    noiseGate: 15,        
    penaltyWeight: 1.0    
};

// SIMULATION OVERRIDE
window.simulatedScore = null; 

window.initAudio = async function() {
    if (audioContext) return; 

    try {
        console.log("Requesting microphone access...");
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        
        analyser.fftSize = 1024; 
        const bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);

        microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyser);
        
        console.log("Microphone connected successfully!");
        return true; 
    } catch (err) {
        console.error("Microphone access denied:", err);
        return false;
    }
};

window.getGrumbleVolume = function() {
    let finalScore = 0;

    // IF WE ARE HOLDING A KEYBOARD OVERRIDE
    if (window.simulatedScore !== null) {
        // Add some random "jitter" (+/- 5%) so the meter looks like a real live voice
        let jitter = (Math.random() * 10) - 5;
        finalScore = window.simulatedScore + jitter;
    } 
    // OTHERWISE, READ THE REAL MIC
    else if (analyser) {
        analyser.getByteFrequencyData(dataArray);
        
        let growlSum = 0;
        for (let i = 2; i <= 10; i++) { growlSum += dataArray[i]; }
        let growlAverage = growlSum / 9;
        let rawScore = (growlAverage / 255) * 100;

        if (rawScore >= window.audioTuning.noiseGate) {
            let cheatSum = 0;
            for (let i = 22; i <= 65; i++) { cheatSum += dataArray[i]; }
            let cheatAverage = cheatSum / 44;
            let rawPenalty = (cheatAverage / 255) * 100;

            let weightedPenalty = rawPenalty * window.audioTuning.penaltyWeight;
            finalScore = (rawScore - weightedPenalty) * window.audioTuning.sensitivity;
        }
    }

    // Clamp between 0 and 100
    finalScore = Math.min(100, Math.max(0, finalScore)); 
    
    // Always track the highest score achieved
    if (finalScore > peakGrumbleScore) {
        peakGrumbleScore = finalScore;
    }
    
    return finalScore;
};

window.setSimulatedScore = function(score) {
    window.simulatedScore = score;
};

window.getPeakScore = function() { return peakGrumbleScore; };
window.resetPeakScore = function() { peakGrumbleScore = 0; };