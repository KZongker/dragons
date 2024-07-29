const gameBox = document.getElementById('gameBox');
const player = document.getElementById('player');
const sky = document.getElementById('sky');
const ground = document.getElementById('ground');
const landmark = document.getElementById('landmark');
const skyTwo = document.getElementById('skyTwo');
const skyThree = document.getElementById('skyThree');
const groundTwo = document.getElementById('groundTwo');
const groundThree = document.getElementById('groundThree');

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
    let gameSide = parseInt(window.getComputedStyle(gameBox).getPropertyValue("width"));
    player.style.display = "block";
    sky.style.display = "block";
    skyTwo.style.left = gameSide + 'px';
    skyTwo.style.width = 0 + 'px';
    skyThree.style.left = gameSide + 'px';
    skyThree.style.width = 0 + 'px';
    ground.style.display = "none";
    groundTwo.style.left = gameSide + 'px';
    groundTwo.style.width = 0 + 'px';
    groundThree.style.left = gameSide + 'px';
    groundThree.style.width = 0 + 'px';
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
let distance = 0;

const toNum = (pxVal) => {
    return parseInt(pxVal, 10);
};



document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
    horizontal = 0;
    vertical = 0;

    // Player
    let leftpos = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    let toppos = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    // let botpos = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
    // let rightpos = parseInt(window.getComputedStyle(player).getPropertyValue("right"));
    let heightpos = parseInt(window.getComputedStyle(player).getPropertyValue("height"));
    let widthpos = parseInt(window.getComputedStyle(player).getPropertyValue("width"));

    // Collision Borders
    let gameTop = parseInt(window.getComputedStyle(gameBox).getPropertyValue("top"));
    let gameLeft = parseInt(window.getComputedStyle(gameBox).getPropertyValue("left"));
    let gameRight = parseInt(window.getComputedStyle(gameBox).getPropertyValue("width"));
    // let gameBottom = parseInt(window.getComputedStyle(gameBox).getPropertyValue("bottom"));
    let groundTop = parseInt(window.getComputedStyle(ground).getPropertyValue("top"));
    let groundTwoTop = parseInt(window.getComputedStyle(groundTwo).getPropertyValue("top"));
    let groundThreeTop = parseInt(window.getComputedStyle(groundThree).getPropertyValue("top"));

    // Background Scrolling
    let landmarkpos = parseInt(window.getComputedStyle(landmark).getPropertyValue("left"));
    let landmarkwidth = parseInt(window.getComputedStyle(landmark).getPropertyValue("width"));
    let skypos = parseInt(window.getComputedStyle(sky).getPropertyValue("left"));
    let skywidth = parseInt(window.getComputedStyle(sky).getPropertyValue("width"));
    let skyright =  parseInt(window.getComputedStyle(sky).getPropertyValue("right"));
    let skyTwoRight = parseInt(window.getComputedStyle(skyTwo).getPropertyValue("right"));
    let skyThreeRight = parseInt(window.getComputedStyle(skyThree).getPropertyValue("right"));
    let groundpos = parseInt(window.getComputedStyle(sky).getPropertyValue("left"));
    let groundwidth = parseInt(window.getComputedStyle(sky).getPropertyValue("width"));
    let groundTwoPos = parseInt(window.getComputedStyle(groundTwo).getPropertyValue("left"));
    let groundTwoWidth = parseInt(window.getComputedStyle(groundTwo).getPropertyValue("width"));
    let groundThreePos = parseInt(window.getComputedStyle(groundThree).getPropertyValue("left"));
    let groundThreeWidth = parseInt(window.getComputedStyle(groundThree).getPropertyValue("width"));
    let skyTwoPos = parseInt(window.getComputedStyle(skyTwo).getPropertyValue("left"));
    let skyTwoWidth = parseInt(window.getComputedStyle(skyTwo).getPropertyValue("width"));
    let skyThreePos = parseInt(window.getComputedStyle(skyThree).getPropertyValue("left"));
    let skyThreeWidth = parseInt(window.getComputedStyle(skyThree).getPropertyValue("width"));


    // Begin functions
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
        if(distance === 0) {
            distance = 0;
        } else {
            distance -= 1;
        }
        if(skywidth <= 8) {
            sky.style.left = gameLeft + skywidth + 'px';
        }
        if(skyTwoWidth <= 8) {
            skyTwo.style.left = gameLeft + skyTwoWidth + 'px';
        }
        if(skyThreeWidth <= 8) {
            skyThree.style.left = gameLeft + skyThreeWidth + 'px';
            console.log("moving", skyThreePos, gameLeft + skywidth);
        }
        //console.log(distance, gameLeft, gameLeft + leftpos, leftpos);
    }
    else if (e.keyCode == '39' || e.keyCode == '68') {
        horizontal += 1;
        // console.log("D Key!");
        player.style.left = leftpos + horizontal + speed + 'px';
        if(player.style.transform !== 'scaleX(1)') {
        player.style.transform = 'scaleX(1)'; }
        distance += 1;
        console.log(distance);
        if(skywidth <= 8) {
            sky.style.left = gameRight - skywidth + 'px';
        }
        if(skyTwoWidth <= 8) {
            skyTwo.style.left = gameRight - skywidth+ 'px';
        }
        if(skyThreeWidth <= 8) {
            skyThree.style.left = gameRight - skywidth + 'px';
        }
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
   } else if(leftpos + widthpos >= gameRight) {
        leftpos = leftpos - 1;
        horizontal = -1;
        player.style.left = leftpos + horizontal - speed + 'px';
   } else if (toppos <= gameTop) {
        toppos = toppos + 1;
        vertical = 1;
        player.style.top = toppos + vertical + speed + 'px';
   } else if (toppos + heightpos -10 >= groundTop || toppos + heightpos -10 >= groundTwoTop || toppos + heightpos -10 >= groundThreeTop) {
    toppos = toppos - 1;
    vertical = -1;
    player.style.top = toppos + vertical - speed + 'px';
}
// End Collisions

// Start scrolling
if(leftpos + widthpos >= gameRight / 2 && e.keyCode == '39' || leftpos + widthpos >= gameRight / 2 && e.keyCode == '68') {
    /* landmarkpos = landmarkpos - 1; */

    /* landmark.style.left = landmarkpos + horizontal - speed + 'px'; */
    sky.style.left = skypos + horizontal - speed + 'px';
    ground.style.left = groundpos + horizontal - speed + 'px';
    player.style.left = leftpos + 'px';
    /* if(landmarkpos <= gameLeft) {
        landmark.style.display = 'none';
        landmark.style.left = gameRight - landmarkwidth + 'px';
        landmark.style.display = 'block';
    } */
    // console.log(leftpos);

    if(skypos <= gameLeft) {
        skypos = gameLeft - horizontal - speed;
        sky.style.width = skywidth - horizontal - speed + 'px';
        skypos += 1;
        sky.style.left = skypos - horizontal + speed + 'px';

        skyTwo.style.display = "block";
        skyTwoPos = skywidth - horizontal - speed;
        skyTwo.style.width = skyTwoWidth + horizontal + speed + 'px';
        skyTwoPos -= 1;
        skyTwo.style.left = skyTwoPos + horizontal + 'px';
        console.log("skypos:", skypos, "skywidth:", skywidth, "skyTwoPos:", skyTwoPos, "skyTwoWidth:", skyTwoWidth);
        // console.log(skyright, skywidth, skyright + skywidth);
        // console.log(skywidth, skypos);
        // console.log(skypos, skyTwoPos);
        if(skywidth <= 8) {
            sky.style.display = 'none';
            sky.style.left = gameRight - skywidth + 'px';
            console.log(gameRight - skywidth, gameRight, skywidth, skypos);
        }
    }

    if(skyTwoPos <= gameLeft) {
        skyTwoPos = gameLeft - horizontal - speed;
        skyTwo.style.width = skyTwoWidth - horizontal - speed + 'px';
        skyTwoPos += 1;
        skyTwo.style.left = skyTwoPos - horizontal + speed + 'px';

        skyThree.style.display = "block";
        skyThreePos = skyTwoWidth - horizontal - speed;
        skyThree.style.width = skyThreeWidth + horizontal + speed + 'px';
        skyThreePos -= 1;
        skyThree.style.left = skyThreePos + horizontal + speed + 'px';
        console.log("Sky 2 Scrolling", skyTwoPos);
        if(skyTwoWidth <= 8) {
            skyTwo.style.display = 'none';
            skyTwo.style.left = gameRight - skyTwoWidth + 'px';
            console.log(gameRight - skyTwoWidth, gameRight, skyTwoWidth, skyTwoPos);
        }
    }

    if(skyThreePos <= gameLeft) {
        skyThreePos = gameLeft - horizontal - speed;
        skyThree.style.width = skyThreeWidth - horizontal - speed + 'px';
        skyThreePos += 1;
        skyThree.style.left = skyThreePos - horizontal + speed + 'px';

        sky.style.display = "block";
        skypos = skyThreeWidth - horizontal - speed;
        sky.style.width = skywidth + horizontal + speed + 'px';
        skypos -= 1;
        sky.style.left = skypos + horizontal + speed + 'px';
        console.log("Sky 3 Scrolling", skyThreePos);
        if(skyThreeWidth <= 8) {
            skyThree.style.display = 'none';
            skyThree.style.left = gameRight - skyThreeWidth + 'px';
            console.log(gameRight - skyThreeWidth, gameRight, skyThreeWidth, skyThreePos);
        }
    }

    /* if(groundpos <= gameLeft) {
        groundpos = gameLeft - horizontal - speed;
        ground.style.width = groundwidth - horizontal - speed + 'px';
        groundpos += 1;
        ground.style.left = groundpos - horizontal + speed + 'px';

        groundTwo.style.display = "block";
        groundTwoPos = groundwidth - horizontal - speed;
        groundTwo.style.width = groundTwoWidth + horizontal + speed + 'px';
        groundTwoPos -= 1;
        groundTwo.style.left = groundTwoPos + horizontal + 'px';
        //console.log("Sky1 scrolling", skypos);
        // console.log(skyright, skywidth, skyright + skywidth);
        // console.log(skywidth, skypos);
        // console.log(skypos, skyTwoPos);
        if(groundwidth <= 8) {
            ground.style.display = 'none';
            ground.style.left = gameRight - groundwidth + 'px';
            //console.log(gameRight - groundwidth, gameRight, groundwidth, groundpos);
        }
    }

    if(groundTwoPos <= gameLeft) {
        groundTwoPos = gameLeft - horizontal - speed;
        groundTwo.style.width = groundTwoWidth - horizontal - speed + 'px';
        groundTwoPos += 1;
        groundTwo.style.left = groundTwoPos - horizontal + speed + 'px';

        groundThree.style.display = "block";
        groundThreePos = groundTwoWidth - horizontal - speed;
        groundThree.style.width = groundThreeWidth + horizontal + speed + 'px';
        groundThreePos -= 1;
        groundThree.style.left = groundThreePos + horizontal + speed + 'px';
        //console.log("Sky 2 Scrolling", skyTwoPos);
        if(groundTwoWidth <= 8) {
            groundTwo.style.display = 'none';
            groundTwo.style.left = gameRight - groundTwoWidth + 'px';
            //console.log(gameRight - groundTwoWidth, gameRight, groundTwoWidth, groundTwoPos);
        }
    }

    if(groundThreePos <= gameLeft) {
        groundThreePos = gameLeft - horizontal - speed;
        groundThree.style.width = groundThreeWidth - horizontal - speed + 'px';
        groundThreePos += 1;
        groundThree.style.left = groundThreePos - horizontal + speed + 'px';

        ground.style.display = "block";
        groundpos = groundThreeWidth - horizontal - speed;
        ground.style.width = groundwidth + horizontal + speed + 'px';
        groundpos -= 1;
        ground.style.left = groundpos + horizontal + speed + 'px';
        //console.log("Sky 3 Scrolling", skyThreePos);
        if(groundThreeWidth <= 8) {
            groundThree.style.display = 'none';
            groundThree.style.left = gameRight - groundThreeWidth + 'px';
            //console.log(gameRight - groundThreeWidth, gameRight, groundThreeWidth, groundThreePos);
        }
    } */
}

if(distance > 10 && leftpos <= 100 && e.keyCode == '37' || distance > 10 && leftpos <= 100 && e.keyCode == '65') {
    player.style.left = leftpos + 'px';
}

if(distance > 0 && leftpos <= 100 && e.keyCode == '37' || distance > 0 && leftpos <= 100 && e.keyCode == '65') {

    sky.style.left = skypos + horizontal + speed + 'px';
    ground.style.left = groundpos + horizontal + speed + 'px';

    if(skyTwoPos <= gameRight && skyThreePos <= gameLeft) {
        skypos = gameLeft + horizontal;
        sky.style.width = skywidth - horizontal + speed + 'px';
        sky.style.left = skypos + horizontal + 'px';

        skyTwo.style.width = skyTwoWidth + horizontal - speed + 'px';
        skyTwo.style.left = skyTwoPos - horizontal + speed + 'px';
        skyTwoPos -= 1;

        if(skyTwoWidth <= 8) {
            skyTwo.style.display = "none";
            skyTwo.style.left = gameLeft + skyTwoWidth + 'px';
        }
        
        console.log("skypos:", skypos, "skywidth:", skywidth, "skyTwoPos:", skyTwoPos, "skyTwoWidth:", skyTwoWidth, "skyThreePos:", skyThreePos, "S3W:", skyThreeWidth);

        /* Other direction: skypos consistently -9, skywidth -10, skytwopos - 10, skytwowidth + 10
            So this direction should be: skypos 9, skywidth + 10, SkytwoPos + 10, skytwoWidth - 10
            Currently: skypos 9, skywidth + 10, skytwopos + 10, skytwoWidth - 10
            May have solved
        */
        /*
        skyThree.style.display = "block";

        skyThreePos = gameLeft + horizontal + speed;
        skyThree.style.width = skyThreeWidth + horizontal + speed + 'px';
        skyThreePos -= 1;
        skyThree.style.left = skyThreePos + horizontal - speed + 'px'; */
      
    }

    /* if(skypos <= gameRight && skyTwoPos <= gameLeft) {
        skyThreePos = gameLeft + horizontal;
        skyThree.style.width = skyThreeWidth - horizontal + speed + 'px';
        skyThree.style.left = skyThreePos + horizontal + 'px';

        sky.style.width = skywidth + horizontal - speed + 'px';
        sky.style.left = skypos - horizontal + speed + 'px';
        skypos -= 1;

        if(skywidth <= 8) {
            sky.style.display = "none";
            sky.style.left = gameLeft + skywidth + 'px';
        }
    }

    if(skyThreePos <= gameRight && skypos <= gameLeft) {
        skyTwoPos = gameLeft + horizontal;
        skyTwo.style.width = skyTwoWidth - horizontal + speed + 'px';
        skyTwo.style.left = skyTwoPos + horizontal + 'px';

        skyThree.style.width = skyThreeWidth + horizontal - speed + 'px';
        skyThree.style.left = skyThreePos - horizontal + speed + 'px';
        skyThreePos -= 1;

        if(skyThreeWidth <= 8) {
            skyThree.style.display = "none";
            skyThree.style.left = gameLeft + skyThreeWidth + 'px';
        } 
    } */
    
}

// end scrolling
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