let animationFrameId = null;
let currentVisualHeight = 0;

window.startVUMeter = function() {
    const container = document.getElementById("vu-meter-container");
    const fill = document.getElementById("vu-meter-fill");
    if(!container || !fill) return;
    
    currentVisualHeight = 0;
    container.style.opacity = "1"; 
    
    function draw() {
        if (window.getGrumbleVolume) {
            const targetVolume = window.getGrumbleVolume();
            currentVisualHeight += (targetVolume - currentVisualHeight) * 0.6;
            fill.style.height = currentVisualHeight + "%";
        }
        animationFrameId = requestAnimationFrame(draw);
    }
    
    draw();
};

window.stopVUMeter = function() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    
    const container = document.getElementById("vu-meter-container");
    const fill = document.getElementById("vu-meter-fill");
    if(!container || !fill) return;

    container.style.opacity = "0";
    setTimeout(() => { fill.style.height = "0%"; }, 300); 
};