const d = document;
const player = d.getElementsByClassName('player')[0];
const e = d.getElementsByClassName('one')[0];
let mouseX, mouseY;
let dead = false;
let enemyToX, enemyToY;

// On mousemove use event.clientX and event.clientY to set the location of the div to the location of the cursor:
d.addEventListener('mousemove', (event) => {
    if (dead === false) {
        mouseX = event.clientX - 35;
        mouseY = event.clientY + 60;
        document.getElementsByClassName('player')[0].style.left = mouseX + 'px';
        document.getElementsByClassName('player')[0].style.top = mouseY + 'px';
    }
});

// Check if cursor hovers over an enemy
e.addEventListener('mouseover', function () {
    if (dead === false) {
        dead = true;
        console.log('You died')
    }
});

setInterval(function () {
    if (dead === false) {
        enemyToX = mouseX;
        enemyToY = mouseY;
        e.style.left = enemyToX + 'px';
        e.style.top = enemyToY - 50 + 'px';
    }
}, 500)