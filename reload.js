// Detect touch start
var startY, moveY;
document.addEventListener('touchstart', function(e) {
    startY = e.touches[0].pageY;
    moveY = startY;
}, false);

// Detect touch move
document.addEventListener('touchmove', function(e) {
    moveY = e.touches[0].pageY;
}, false);

// Detect touch end
document.addEventListener('touchend', function(e) {
    if (moveY > startY + 50) {
        // User has pulled down
        location.reload(); // Refresh the page
    }
}, false);
