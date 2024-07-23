const gameBox = document.getElementById('gameBox');
const player = document.getElementById('player');
const sky = document.getElementById('sky');
const ground = document.getElementById('ground');
const landmark = document.getElementById('landmark');

const startBtn = document.getElementById('startBtn');
const startScreen = document.getElementById('startScreen');

const mango = document.getElementById('mango');
const fern = document.getElementById('fern');
const juniper = document.getElementById('juniper');
const violet = document.getElementById('violet');
let mangoSel = true;
let fernSel = false;
let juniperSel = false;
let violetSel = false;

const dcMain = document.querySelectorAll('.dcMain');
const dcSecondary = document.querySelectorAll('.dcSecondary');
const dcThree = document.querySelectorAll('.dcThree');
const dwcOne = document.querySelectorAll('.dwcOne');
const dwcTwo = document.querySelectorAll('.dwcTwo');

//temp in case player offscreen
const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener("click", resetPosition);

function resetPosition() {
    player.style.top = 0;
    player.style.left = 0;
    if(player.style.transform !== 'scaleX(1)') {
        player.style.transform = 'scaleX(1)'; }
    playerX = 0;
    playerY = 0;
    console.log("reset");
    return;
}
// code above temporary until collisions added or game finished

//Start StartScreen
startBtn.addEventListener("click", startGame);
mango.addEventListener("click", mangoSelected);
fern.addEventListener("click", fernSelected);
juniper.addEventListener("click", juniperSelected);
violet.addEventListener("click", violetSelected);

function startGame() {
    console.log("started");
    player.style.display = "block";
    sky.style.display = "block";
    ground.style.display = "block";
    landmark.style.display = "block";
    startScreen.style.display = "none";
    resetPosition();
    return;
}

function mangoSelected() {
    mango.style.color = 'yellow';
    fern.style.color = 'white';
    juniper.style.color = 'white';
    violet.style.color = 'white';
    mangoSel = true;
    fernSel = false;
    juniperSel = false;
    violetSel = false;
    dcMain.forEach((el) => el.style.backgroundColor = 'red');
    dcSecondary.forEach((el) => el.style.backgroundColor = 'darkred');
    dcThree.forEach((el) => el.style.backgroundColor = 'rgb(88, 0, 0)');
    dwcOne.forEach((el) => el.style.backgroundColor = 'orange');
    dwcTwo.forEach((el) => el.style.backgroundColor = 'rgb(210, 136, 0)');
    return;
}

function fernSelected() {
    mango.style.color = 'white';
    fern.style.color = 'yellow';
    juniper.style.color = 'white';
    violet.style.color = 'white';
    mangoSel = false;
    fernSel = true;
    juniperSel = false;
    violetSel = false;
    dcMain.forEach((el) => el.style.backgroundColor = 'green');
    dcSecondary.forEach((el) => el.style.backgroundColor = 'darkgreen');
    dcThree.forEach((el) => el.style.backgroundColor = 'rgb(0, 88, 0)');
    dwcOne.forEach((el) => el.style.backgroundColor = 'yellow');
    dwcTwo.forEach((el) => el.style.backgroundColor = 'rgb(210, 200, 0)');
    return;
}

function juniperSelected() {
    mango.style.color = 'white';
    fern.style.color = 'white';
    juniper.style.color = 'yellow';
    violet.style.color = 'white';
    mangoSel = false;
    fernSel = false;
    juniperSel = true;
    violetSel = false;
    dcMain.forEach((el) => el.style.backgroundColor = 'blue');
    dcSecondary.forEach((el) => el.style.backgroundColor = 'darkblue');
    dcThree.forEach((el) => el.style.backgroundColor = 'rgb(0, 0, 88)');
    dwcOne.forEach((el) => el.style.backgroundColor = 'rgb(144, 0, 180)');
    dwcTwo.forEach((el) => el.style.backgroundColor = 'rgb(103, 0, 129)');
    return;
}

function violetSelected() {
    mango.style.color = 'white';
    fern.style.color = 'white';
    juniper.style.color = 'white';
    violet.style.color = 'yellow';
    mangoSel = false;
    fernSel = false;
    juniperSel = false;
    violetSel = true;
    dcMain.forEach((el) => el.style.backgroundColor = 'rgb(144, 0, 180)');
    dcSecondary.forEach((el) => el.style.backgroundColor = 'rgb(103, 0, 129)');
    dcThree.forEach((el) => el.style.backgroundColor = 'rgb(73, 0, 92)');
    dwcOne.forEach((el) => el.style.backgroundColor = 'rgb(248, 96, 149)');
    dwcTwo.forEach((el) => el.style.backgroundColor = 'rgb(205, 79, 123)');
    return;
}
//End StartScreen

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
    let leftpos = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    let toppos = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    // let botpos = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
    // let rightpos = parseInt(window.getComputedStyle(player).getPropertyValue("right"));
    let heightpos = parseInt(window.getComputedStyle(player).getPropertyValue("height"));
    let widthpos = parseInt(window.getComputedStyle(player).getPropertyValue("width"));
    let gameTop = parseInt(window.getComputedStyle(gameBox).getPropertyValue("top"));
    let gameLeft = parseInt(window.getComputedStyle(gameBox).getPropertyValue("left"));
    let gameRight = parseInt(window.getComputedStyle(gameBox).getPropertyValue("width"));
    // let gameBottom = parseInt(window.getComputedStyle(gameBox).getPropertyValue("bottom"));
    let groundTop = parseInt(window.getComputedStyle(ground).getPropertyValue("top"));
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
   // playerX = playerX + horizontal;
   // playerY = playerY + vertical;
    // console.log('first XY:', playerX, playerY);
    // console.log('first hor, vert:', horizontal, vertical);
  
   // Start Collisions
   if(leftpos <= gameLeft) {
        leftpos = leftpos + 1;
        horizontal = 1;
        player.style.left = leftpos + horizontal + speed + 'px';
   } 
   if(leftpos + widthpos >= gameRight) {
        leftpos = leftpos - 1;
        horizontal = -1;
        player.style.left = leftpos + horizontal - speed + 'px';
   }
   if (toppos <= gameTop) {
        toppos = toppos + 1;
        vertical = 1;
        player.style.top = toppos + vertical + speed + 'px';
   }
   if (toppos + heightpos -10 >= groundTop) {
    toppos = toppos - 1;
    vertical = -1;
    player.style.top = toppos + vertical - speed + 'px';
}
// End Collisions
}
// End Movement

//start background scrolling
//end background scrolling



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