console.log("VU Meter loaded.");

let animationFrameId = null;
let currentVisualHeight = 0;

window.startVUMeter = function() {
    const container = document.getElementById("vu-meter-container");
    const fill = document.getElementById("vu-meter-fill");
    
    // Reset visual data and show the meter
    currentVisualHeight = 0;
    container.style.opacity = "1"; 
    
    function draw() {
        if (window.getGrumbleVolume) {
            // Get the actual real-time score
            const targetVolume = window.getGrumbleVolume();
            
            // Ease the visual height towards the target volume (makes it look fluid)
            currentVisualHeight += (targetVolume - currentVisualHeight) * 0.2;
            
            // Update the CSS
            fill.style.height = currentVisualHeight + "%";
        }
        
        // Loop at 60fps
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
    
    // Hide the meter and pull it back to zero
    container.style.opacity = "0";
    setTimeout(() => { fill.style.height = "0%"; }, 300); // Wait for fade out before snapping to 0
};