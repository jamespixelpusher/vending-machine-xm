// ==========================================
// OH HENRY XM — VU METER MODULE
// ==========================================
// Two independent systems:
//   1. Spectrum background — ambient animated equaliser, HTML/CSS, shown on idle + game screens
//   2. oh_henry_meter — Animate clip in clip_game, rotates with live mic volume

// ==========================================
// 1. SPECTRUM BACKGROUND
// ==========================================

const SPECTRUM_COLUMNS  = 19;
const SPECTRUM_SEGMENTS = 14;
const COLOR_BOTTOM = [236, 163, 54]; // Orange
const COLOR_TOP    = [193,  43, 50]; // Red

let _spectrumData  = [];
let _spectrumRafId = null;
let _spectrumBuilt = false;

function _lerpColor(a, b, t) {
    return a.map((v, i) => Math.round(v + t * (b[i] - v)));
}

function _buildSpectrum() {
    const meter = document.getElementById('spectrumMeter');
    if (!meter || _spectrumBuilt) return;
    _spectrumBuilt = true;

    for (let c = 0; c < SPECTRUM_COLUMNS; c++) {
        const col = document.createElement('div');
        col.className = 'spectrum-column';
        const segs = [];

        for (let i = 0; i < SPECTRUM_SEGMENTS; i++) {
            const seg = document.createElement('div');
            seg.className = 'spectrum-segment';
            const rgb = _lerpColor(COLOR_BOTTOM, COLOR_TOP, i / (SPECTRUM_SEGMENTS - 1));
            seg.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
            col.appendChild(seg);
            segs.push(seg);
        }

        meter.appendChild(col);
        _spectrumData.push({ elements: segs, max: SPECTRUM_SEGMENTS });
    }
}

function _tickSpectrum() {
    const t = Date.now();

    // 120 BPM kick (500ms) + offbeat hi-hat
    const kickPhase = (t % 500) / 500;
    const kick = Math.pow(1 - kickPhase, 3);
    const hatPhase = ((t + 250) % 500) / 500;
    const hat = Math.pow(1 - hatPhase, 4) * 0.6;

    _spectrumData.forEach((col, i) => {
        const band = i / (SPECTRUM_COLUMNS - 1);
        const bass   = (1 - band) * kick * 0.95;
        const treble = band * hat;
        const mids   = (Math.sin(t / 100 + i) * 0.15) + (Math.random() * 0.15);
        const signal = Math.min(1, Math.max(0, bass + treble + mids));
        const active = Math.ceil(signal * col.max);
        col.elements.forEach((seg, j) => seg.classList.toggle('active', j < active));
    });

    _spectrumRafId = requestAnimationFrame(_tickSpectrum);
}

window.showSpectrumBg = function() {
    _buildSpectrum();
    document.getElementById('spectrum-bg').style.display = 'flex';
    if (!_spectrumRafId) _tickSpectrum();
};

window.hideSpectrumBg = function() {
    document.getElementById('spectrum-bg').style.display = 'none';
    // RAF keeps running so the display is instant when shown again
};

// ==========================================
// 2. OH HENRY METER (Animate clip rotation)
// ==========================================
// Positioned horizontally at volume 0, rotates counter-clockwise to -90° at volume 100.

let _meterRafId  = null;
let _meterSmooth = 0;

function _getMeter() {
    return window.mcRoot
        && window.mcRoot.clip_content
        && window.mcRoot.clip_content.clip_game
        && window.mcRoot.clip_content.clip_game.oh_henry_meter;
}

window.startVUMeter = function() {
    _meterSmooth = 0;

    function draw() {
        const vol = window.getGrumbleVolume ? window.getGrumbleVolume() : 0;
        _meterSmooth += (vol - _meterSmooth) * 0.15; // gentle smoothing

        const meter = _getMeter();
        if (meter) meter.rotation = -(_meterSmooth / 100) * 90;

        _meterRafId = requestAnimationFrame(draw);
    }

    draw();
};

window.stopVUMeter = function() {
    if (_meterRafId) {
        cancelAnimationFrame(_meterRafId);
        _meterRafId = null;
    }
    const meter = _getMeter();
    if (meter) meter.rotation = 0;
};
