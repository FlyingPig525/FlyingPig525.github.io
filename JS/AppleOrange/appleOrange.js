const d = document;
const player = d.getElementsByClassName('player')[0];
const e = d.getElementsByClassName('one')[0];
let mouseX, mouseY;
let dead = 0;
let enemyToX, enemyToY;

// On mousemove use event.clientX and event.clientY to set the location of the div to the location of the cursor:
d.addEventListener('mousemove', (event) => {
    mouseX = event.clientX - 22;
    mouseY = event.clientY - 22;
    document.getElementsByClassName('player')[0].style.marginLeft = mouseX + 'px';
    document.getElementsByClassName('player')[0].style.marginTop = mouseY + 'px';
});

// Check if cursor hovers over an enemy
e.addEventListener('mouseover', () => {
    dead++;
});

setInterval(function () {
    enemyToX = mouseX;
    enemyToY = mouseY;
    e.style.position = 'absolute';
    e.style.left = enemyToX-10 + 'px';
    e.style.top = enemyToY-10 + 'px';
    if (dead === 2) {
        console.log('ded')
    }
}, 500)