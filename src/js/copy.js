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

    let field = clip && clip[fieldName];

    if (clip && !field && clip.children) {

        field = clip.children.find(ch => ch && typeof ch.text === 'string' && ch.font !== undefined);

        if (field) {

            console.warn(`[COPY] "${fieldName}": named field missing, wrote to the clip's text child instead.`);

        }

    }

    if (field) {

        field.text = br(window.COPY[window.activeLang][fieldName]);

        const config = window.COPY._config && window.COPY._config[fieldName];

        // --- French text-field sizing ---
        // English size is owned by Animate and never changed here. For French, optionally
        // shrink via a per-field fr_fontSize in copy.json. Re-derive from the Animate-baked
        // font each time, so English stays exact and EN<->FR toggling can't drift.
        if (field._enFont === undefined) field._enFont = field.font;
        const frSize = config && config.fr_fontSize;
        field.font = (window.activeLang === 'fr' && frSize)
            ? field._enFont.replace(/\d+px/, `${frSize}px`)
            : field._enFont;

        if (config && config.lineHeight !== null && config.lineHeight !== undefined) {

            field.lineHeight = config.lineHeight;

        }

        if (config && typeof config.vCenter === 'number') {

            field.textBaseline = 'middle';

            // Center the whole block: shift up by half the extra line-height so a 2-line
            // field sits centered in its button instead of hanging below the midline.
            const _lines = String(field.text).split('\n').length;

            field.y = config.vCenter - (_lines - 1) * (field.lineHeight || 0) / 2;

        }

    } else {

        console.warn(`[COPY] Field not found: ${fieldName}`);

    }

}

// --- LOAD ---

window.loadCopy = () => {

    if (!_fs || !_path) {

        console.warn('[COPY] File system unavailable, copy.json not loaded.');

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

window.applyCopy = () => {

    if (!window.COPY || !window.mcRoot) return;

    if (!window.COPY[window.activeLang]) {

        console.error(`[COPY] No strings found for language: "${window.activeLang}"`);

        return;

    }

    const c = window.mcRoot.clip_content;

    // clip_idle

    set(c.clip_idle.clip_idle_headline_1, 'idle_headline_1');

    set(c.clip_idle.clip_idle_headline_2, 'idle_headline_2');

    set(c.clip_idle.clip_idle_headline_3, 'idle_headline_3');

    set(c.clip_idle.clip_idle_cta,        'idle_cta');

    // clip_countdown

    set(c.clip_countdown.clip_countdown_tagline1_1, 'countdown_tagline1_1');

    set(c.clip_countdown.clip_countdown_tagline1_2, 'countdown_tagline1_2');

    set(c.clip_countdown.clip_countdown_tagline2,   'countdown_tagline2');

    set(c.clip_countdown.clip_game_headline_1,      'game_headline_1');

    set(c.clip_countdown.clip_game_headline_2,      'game_headline_2');

    set(c.clip_countdown.clip_game_headline_3,      'game_headline_3');

    set(c.clip_countdown.clip_game_prompt_1,        'game_prompt_1');

    set(c.clip_countdown.clip_game_prompt_2,        'game_prompt_2');

    // clip_game

    set(c.clip_game.clip_game_calculating,  'game_calculating');

    set(c.clip_game.clip_game_level_low,    'game_level_low');

    set(c.clip_game.clip_game_level_mid,    'game_level_mid');

    set(c.clip_game.clip_game_level_high, 'game_level_high');

    // clip_success

    set(c.clip_success.clip_success_line1, 'success_line1');

    set(c.clip_success.clip_success_line2, 'success_line2');

    set(c.clip_success.clip_success_line3, 'success_line3');

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

window.loadCopy();