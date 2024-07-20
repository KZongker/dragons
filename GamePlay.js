const gameBox = document.getElementById('gameBox');
const player = document.getElementById('player');
const ground = document.getElementById('ground');

//temp in case player offscreen
const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener("click", resetPosition);

function resetPosition() {
    player.style.top = 0;
    player.style.left = 0;
    if(player.style.transform !== 'scaleX(1)') {
        player.style.transform = 'scaleX(1)'; }
    console.log("reset");
    return;
}
// code above temporary until collisions added or game finished

// Start Movement
let horizontal = 0;
let vertical = 0;
let speed = 9;
let playerX = 0;
let playerY = 0;

const toNum = (pxVal) => {
    return parseInt(pxVal, 10);
};



document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
    horizontal = 0;
    vertical = 0;
    let leftpos = parseInt(window.getComputedStyle(player).getPropertyValue("left"))
    let toppos = parseInt(window.getComputedStyle(player).getPropertyValue("top"))

    if (e.keyCode == '38' || e.keyCode == '87') {
        if (e.keyCode == '38') {
            event.preventDefault();
        }
        vertical -= 1;
        // console.log("W Key!");
        player.style.top = toppos + vertical - speed + 'px';
    }
    else if (e.keyCode == '40' || e.keyCode == '83') {
        if (e.keyCode == '40') {
            event.preventDefault();
        }
        vertical += 1;
        // console.log("S Key!");
        player.style.top = toppos + vertical + speed + 'px';
    }
    else if (e.keyCode == '37' || e.keyCode == '65') {
        horizontal -= 1;
        // console.log("A Key!");
        player.style.left = leftpos + horizontal - speed + 'px';
        if(player.style.transform !== 'scaleX(-1)') {
            player.style.transform = 'scaleX(-1)'; }
    }
    else if (e.keyCode == '39' || e.keyCode == '68') {
        horizontal += 1;
        // console.log("D Key!");
        player.style.left = leftpos + horizontal + speed + 'px';
        if(player.style.transform !== 'scaleX(1)') {
        player.style.transform = 'scaleX(1)'; }
    }
    playerX = playerX + horizontal;
    playerY = playerY + vertical;
    // console.log(playerX, playerY);

}
// End Movement



/* OLD MOVEMENT
const movement = (e) => {
    horizontal = 0;
    vertical = 0;
    let leftpos = parseInt(window.getComputedStyle(player).getPropertyValue("left"))
    let toppos = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
    switch(e.key) {
        case 'w':
            vertical -= 1;
            console.log("W Key!");
            player.style.top = toppos + vertical - speed + 'px';
            break;
        case 'a':
            horizontal -= 1;
            console.log("A Key!");
            player.style.left = leftpos + horizontal - speed + 'px';
            if(player.style.transform !== 'scaleX(-1)') {
                player.style.transform = 'scaleX(-1)'; }
            break;
        case 's':
            vertical += 1;
            console.log("S Key!");
            player.style.top = toppos + vertical + speed + 'px';
            break;
        case 'd':
            horizontal += 1;
            console.log("D Key!");
            player.style.left = leftpos + horizontal + speed + 'px';
            if(player.style.transform !== 'scaleX(1)') {
            player.style.transform = 'scaleX(1)'; }
            break;
    } */
    /* playerX = playerX + horizontal;
    playerY = playerY + vertical;
    console.log(playerX, playerY); */
// };

// window.addEventListener("keydown", movement)
//END OLD MOVEMENT