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
const SPECTRUM_SEGMENTS = 28;   // more segments so columns fill the full screen height cleanly
const COLOR_BOTTOM = [236, 163, 54]; // Orange
const COLOR_TOP    = [193,  43, 50]; // Red

// Spectrum: an animated beat pattern whose overall energy rises with mic volume.
//   SPECTRUM_IDLE  — liveliness when no one is growling (bars stay animated, never flat)
//   SPECTRUM_DRIVE — how hard mic volume pushes the bars up toward the top
const SPECTRUM_IDLE  = 0.6;
const SPECTRUM_DRIVE = 0.9;

let _spectrumData   = [];
let _spectrumRafId  = null;
let _spectrumBuilt  = false;
let _spectrumSmooth = [];
let _spectrumHideTimer = null;
let _volSmooth      = 0;

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

    // Overall mic loudness (the game's own score) drives the energy, smoothed —
    // so the bars visibly climb toward the top as the participant gets louder.
    const vol = window.getGrumbleVolume ? window.getGrumbleVolume() / 100 : 0;
    _volSmooth += (vol - _volSmooth) * 0.18;
    const energy = SPECTRUM_IDLE + _volSmooth * SPECTRUM_DRIVE;

    // 120 BPM kick (500ms) + offbeat hi-hat — the lively fake beat
    const kickPhase = (t % 500) / 500;
    const kick = Math.pow(1 - kickPhase, 3);
    const hatPhase = ((t + 250) % 500) / 500;
    const hat = Math.pow(1 - hatPhase, 4) * 0.6;

    _spectrumData.forEach((col, i) => {
        const band    = i / (SPECTRUM_COLUMNS - 1);
        const bass    = (1 - band) * kick;
        const treble  = band * hat;
        const mids    = 0.12 + (Math.sin(t / 100 + i) * 0.18) + (Math.random() * 0.12);
        const pattern = bass + treble + mids;          // lively beat shape

        let signal = pattern * energy;
        signal = Math.min(1, Math.max(0, signal));     // clamp: peaks reach the top, never beyond

        const prev = _spectrumSmooth[i] || 0;
        _spectrumSmooth[i] = prev + (signal - prev) * 0.5;
        const active = Math.round(_spectrumSmooth[i] * col.max); // col.max = full column (all segments)
        col.elements.forEach((seg, j) => seg.classList.toggle('active', j < active));
    });

    _spectrumRafId = requestAnimationFrame(_tickSpectrum);
}

window.showSpectrumBg = function() {
    _buildSpectrum();
    const bg = document.getElementById('spectrum-bg');
    clearTimeout(_spectrumHideTimer);
    bg.style.display = 'flex';
    // next frame so the opacity transition actually animates in
    requestAnimationFrame(() => { bg.style.opacity = '1'; });
    if (!_spectrumRafId) _tickSpectrum();
};

window.hideSpectrumBg = function() {
    const bg = document.getElementById('spectrum-bg');
    bg.style.opacity = '0';                    // fade out via the CSS opacity transition
    clearTimeout(_spectrumHideTimer);
    _spectrumHideTimer = setTimeout(() => { bg.style.display = 'none'; }, 500);
    // RAF keeps running so re-showing is instant
};

// ==========================================
// 2. OH HENRY METER (Animate clip rotation)
// ==========================================
// Positioned horizontally at volume 0, rotates counter-clockwise to -90° at volume 100.

let _meterRafId  = null;
let _meterSmooth = 0;
let _meterLock   = null;   // when set (0..100) the needle is driven to this value, ignoring mic

function _getMeter() {
    return window.mcRoot
        && window.mcRoot.clip_content
        && window.mcRoot.clip_content.clip_game
        && window.mcRoot.clip_content.clip_game.oh_henry_meter;
}

// Snap the needle back to its starting position (rotation 0) WITHOUT starting the
// live loop — used to reset it before the game intro animates in.
window.resetVUMeter = function() {
    _meterSmooth = 0;
    _meterLock = null;
    const meter = _getMeter();
    if (meter) meter.rotation = 0;
};

window.startVUMeter = function() {
    _meterSmooth = 0;
    _meterLock = null;

    function draw() {
        // _meterLock lets the win sequence sweep the needle to the top regardless of mic
        const vol = (_meterLock !== null)
            ? _meterLock
            : (window.getGrumbleVolume ? window.getGrumbleVolume() : 0);
        _meterSmooth += (vol - _meterSmooth) * 0.15; // gentle smoothing

        const meter = _getMeter();
        if (meter) meter.rotation = -(_meterSmooth / 100) * 90;

        _meterRafId = requestAnimationFrame(draw);
    }

    draw();
};

window.stopVUMeter = function(resetRotation = true) {
    if (_meterRafId) {
        cancelAnimationFrame(_meterRafId);
        _meterRafId = null;
    }
    _meterLock = null;
    // Pass resetRotation = false to freeze the needle at its current (e.g. winning)
    // position instead of snapping it back to 0.
    if (resetRotation) {
        const meter = _getMeter();
        if (meter) meter.rotation = 0;
    }
};

// Drive the needle to a fixed value (0..100), ignoring the mic — used to sweep it up to the
// winning position during the pre-win hold so a sudden spike doesn't freeze it partway.
// Pass null to release back to live mic tracking.
window.lockVUMeter = function(value) {
    _meterLock = value;
};
