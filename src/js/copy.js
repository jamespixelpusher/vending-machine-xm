// ==========================================
// OH HENRY XM - COPY / LANGUAGE MANAGER
// ==========================================

// --- SETUP ---
let _fs = null;
let _path = null;

const _nodeRequire = (typeof require !== 'undefined') ? require
    : (typeof window !== 'undefined' && window.require ? window.require : null);

if (_nodeRequire) {
    _fs   = _nodeRequire('fs');
    _path = _nodeRequire('path');
}

window.activeLang = 'en';
window.COPY = null;

// --- HELPERS ---

// Convert pipe characters to newlines for Animate text fields
function br(str) {
    return (str || '').replace(/\|/g, '\n');
}

// Safely write to a named Animate text field on a clip
function set(clip, fieldName) {
    if (clip && clip[fieldName]) {
        const field = clip[fieldName];

        // Apply text content
        field.text = br(window.COPY[window.activeLang][fieldName]);

        // Apply lineHeight if configured (null = leave Animate default)
        const config = window.COPY._config && window.COPY._config[fieldName];
        if (config && config.lineHeight !== null && config.lineHeight !== undefined) {
            field.lineHeight = config.lineHeight;
        }
    } else {
        console.warn(`[COPY] Field not found: ${fieldName}`);
    }
}

// --- LOAD ---

window.loadCopy = () => {
    if (!_fs || !_path) {
        console.warn('[COPY] File system unavailable — copy.json not loaded.');
        return;
    }
    try {
        const filePath = _path.join(process.cwd(), 'copy.json');
        const raw = _fs.readFileSync(filePath, 'utf8');
        window.COPY = JSON.parse(raw);
        console.log('[COPY] copy.json loaded successfully.');
    } catch (err) {
        console.error('[COPY] Failed to load copy.json:', err.message);
    }
};

// --- APPLY ---
// Called once from onAnimateReady, and again whenever setLanguage() is called.
// All clips are instantiated at construction time, so every field exists even
// when its clip is hidden — safe to write to all of them up front.

window.applyCopy = () => {
    if (!window.COPY || !window.mcRoot) return;
    if (!window.COPY[window.activeLang]) {
        console.error(`[COPY] No strings found for language: "${window.activeLang}"`);
        return;
    }

    const c = window.mcRoot.clip_content;

    // clip_idle
    set(c.clip_idle.clip_idle_headline, 'idle_headline');
    set(c.clip_idle.clip_idle_cta,      'idle_cta');

    // clip_countdown (game_headline and game_prompt live here too)
    set(c.clip_countdown.clip_countdown_tagline1, 'countdown_tagline1');
    set(c.clip_countdown.clip_countdown_tagline2, 'countdown_tagline2');
    set(c.clip_countdown.clip_game_headline,      'game_headline');
    set(c.clip_countdown.clip_game_prompt,        'game_prompt');

    // clip_game
    set(c.clip_game.clip_game_calculating, 'game_calculating');
    set(c.clip_game.clip_game_level_low,  'game_level_low');
    set(c.clip_game.clip_game_level_mid,  'game_level_mid');
    set(c.clip_game.clip_game_level_high, 'game_level_high');

    // clip_success
    set(c.clip_success.clip_success_line1, 'success_line1');
    set(c.clip_success.clip_success_line2, 'success_line2');

    // clip_thanks — still sprite-based, no text fields yet
    // set(c.clip_thanks.clip_thanks_line1, 'thanks_line1');
    // set(c.clip_thanks.clip_thanks_line2, 'thanks_line2');

    console.log(`[COPY] ${window.activeLang.toUpperCase()} copy applied.`);
};

// --- LANGUAGE TOGGLE ---

window.setLanguage = (lang) => {
    window.activeLang = lang;
    window.applyCopy();

    const btnEn = document.getElementById('lang-btn-en');
    const btnFr = document.getElementById('lang-btn-fr');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    if (btnFr) btnFr.classList.toggle('active', lang === 'fr');

    console.log(`[COPY] Language set to: ${lang.toUpperCase()}`);
};

// --- INIT ---
// Load copy.json immediately when this script runs.
window.loadCopy();
