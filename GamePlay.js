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
    //skyTwo.style.width = 0 + 'px';
    skyThree.style.left = gameSide + 'px';
    //skyThree.style.width = 0 + 'px';
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
let skydist = 1300;
let skyTwoDist = 1300;
let skyThreeDist = 1300;

const toNum = (pxVal) => {
    return parseInt(pxVal, 10);
};



document.onkeydown = checkKey;

let positions = {}

function updatePositions() {
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

  positions = {
    player: {
      left: leftpos,
      top: toppos,
      height: heightpos,
      width: widthpos
    },
    game: {
      top: gameTop,
      left: gameLeft,
      right: gameRight
    }, 
    ground: {
      top: groundTop,
      topTwo: groundTwoTop,
      topThree: groundThreeTop
    },
    landmark: {
      left: landmarkpos,
      width: landmarkwidth
    },
    sky: {
      left: skypos,
      leftTwo: skyTwoPos,
      leftThree: skyThreePos,
      width: skywidth,
      widthTwo: skyTwoWidth,
      widthThree: skyThreeWidth,
      right: skyright,
      rightTwo: skyTwoRight,
      rightThree: skyThreeRight
    },
    ground: {
      left: groundpos,
      leftTwo: groundTwoPos,
      leftThree: groundThreePos,
      width: groundwidth,
      widthTwo: groundTwoWidth,
      widthThree: groundThreeWidth
    }
  }
}

function checkKey(e) {

    e = e || window.event;
    horizontal = 0;
    vertical = 0;
    updatePositions();

    
    


    // Begin functions
    if (e.keyCode == '38' || e.keyCode == '87') {
        if (e.keyCode == '38') {
            event.preventDefault();
        }
        vertical -= 1;
        // console.log("W Key!");
        player.style.top = positions.player.top + vertical - speed + 'px';
    }
    else if (e.keyCode == '40' || e.keyCode == '83') {
        if (e.keyCode == '40') {
            event.preventDefault();
        }
        vertical += 1;
        // console.log("S Key!");
        player.style.top = positions.player.top + vertical + speed + 'px';
    }
    else if (e.keyCode == '37' || e.keyCode == '65') {
        horizontal -= 1;
        // console.log("A Key!");
        player.style.left = positions.player.left + horizontal - speed + 'px';
        if(player.style.transform !== 'scaleX(-1)') {
            player.style.transform = 'scaleX(-1)'; }
        if(distance === 0) {
            distance = 0;
        } else {
            distance -= 1;
        }

        if(skydist >= 1300 && positions.sky.leftTwo >= 1300) {
            skyTwo.style.display = "none";
            skyTwoDist = 0;
            positions.sky.leftTwo = -1300;
            skyTwo.style.left = positions.sky.leftTwo + 'px';
        }
        if(skyThreeDist >= 1300 && positions.sky.left >= 1300) {
            sky.style.display = "none";
            skydist = 0;
            positions.sky.left = -1300;
            sky.style.left = positions.sky.left + 'px';
        }
        if(skyTwoDist >= 1300 && positions.sky.leftThree >= 1300) {
            skyThree.style.display = "none";
            skyThreeDist = 0;
            positions.sky.leftThree = -1300;
            skyThree.style.left = positions.sky.leftThree + 'px';
        }

    }
    else if (e.keyCode == '39' || e.keyCode == '68') {
        horizontal += 1;
        // console.log("D Key!");
        player.style.left = positions.player.left + horizontal + speed + 'px';
        if(player.style.transform !== 'scaleX(1)') {
        player.style.transform = 'scaleX(1)'; }
        distance += 1;
        console.log(distance);

        if(skydist <= 0) {
            sky.style.display = "none";
            skydist = 1300;
            positions.sky.left = 0;
            sky.style.left = positions.sky.left + skydist + 'px';
            console.log(positions.sky.left, skydist, positions.sky.left + skydist, positions.game.right);
        }
        if(skyTwoDist <= 0) {
            skyTwo.style.display = "none";
            skyTwoDist = 1300;
            positions.sky.leftTwo = 0;
            skyTwo.style.left = positions.sky.leftTwo + skyTwoDist + 'px';
        }
        if(skyThreeDist <= 0) {
            skyThree.style.display = "none";
            skyThreeDist = 1300;
            positions.sky.leftThree = 0;
            skyThree.style.left = positions.sky.leftThree + skyThreeDist + 'px';
        }
        
    }
   
  
   // Start Collisions
   if(positions.player.left <= positions.game.left) {
    positions.player.left = positions.player.left + 1;
        horizontal = 1;
        player.style.left = positions.player.left + horizontal + speed + 'px';
   } else if(positions.player.left + positions.player.width >= positions.game.right) {
    positions.player.left = positions.player.left - 1;
        horizontal = -1;
        player.style.left = positions.player.left + horizontal - speed + 'px';
   } else if (positions.player.top <= positions.game.top) {
    positions.player.top = positions.player.top + 1;
        vertical = 1;
        player.style.top = positions.player.top + vertical + speed + 'px';
   } else if (positions.player.top + positions.player.height -10 >= positions.ground.top || positions.player.top + positions.player.height -10 >= positions.ground.topTwo || positions.player.top + positions.player.height -10 >= positions.ground.topThree) {
    positions.player.top = positions.player.top - 1;
    vertical = -1;
    player.style.top = positions.player.top + vertical - speed + 'px';
}
// End Collisions

// Start scrolling
if(positions.player.left + positions.player.width >= positions.game.right / 2 && e.keyCode == '39' || positions.player.left + positions.player.width >= positions.game.right / 2 && e.keyCode == '68') {

    player.style.left = positions.player.left + 'px';
    console.log("S1P:", positions.sky.left, "S1D:", skydist, "S2P:", positions.sky.leftTwo, "S2D:", skyTwoDist, "S3P:", positions.sky.leftThree, "S3D:", skyThreeDist);

    if(positions.sky.left <= positions.game.left && positions.sky.leftThree >= positions.game.right) {
        sky.style.left = positions.sky.left - horizontal - speed + 'px';
        console.log("skydist:", skydist)
        skydist = skydist - horizontal - speed;

        skyTwo.style.display = "block";
        skyTwo.style.left = skydist + 'px';
        
        if(skydist <= 0) {
            sky.style.display = "none";
            skydist = 1300;
            positions.sky.left = 0;
            sky.style.left = positions.sky.left + skydist + 'px';
            console.log(positions.sky.left, skydist, positions.sky.left + skydist, positions.game.right);
        }
    }

    if(positions.sky.leftTwo <= positions.game.left && positions.sky.left >= positions.game.right) {
        skyTwo.style.left = positions.sky.leftTwo - horizontal - speed + 'px';
        console.log("skyTwoDist:", skyTwoDist)
        skyTwoDist = skyTwoDist - horizontal - speed;

        skyThree.style.display = "block";
        skyThree.style.left = skyTwoDist + 'px';
        
        if(skyTwoDist <= 0) {
            skyTwo.style.display = "none";
            skyTwoDist = 1300;
            positions.sky.leftTwo = 0;
            skyTwo.style.left = positions.sky.leftTwo + skyTwoDist + 'px';
        }
    }

    if(positions.sky.leftThree <= positions.game.left && positions.sky.leftTwo >= positions.game.right) {
        skyThree.style.left = positions.sky.leftThree - horizontal - speed + 'px';
        console.log("skyThreeDist:", skyThreeDist)
        skyThreeDist = skyThreeDist - horizontal - speed;

        sky.style.display = "block";
        sky.style.left = skyThreeDist + 'px';
        
        if(skyThreeDist <= 0) {
            skyThree.style.display = "none";
            skyThreeDist = 1300;
            positions.sky.leftThree = 0;
            skyThree.style.left = positions.sky.leftThree + skyThreeDist + 'px';
        }
    }

    
}

if(distance > 10 && positions.player.left <= 100 && e.keyCode == '37' || distance > 10 && positions.player.left <= 100 && e.keyCode == '65') {
    player.style.left = positions.player.left + 'px';
}

if(distance > 0 && positions.player.left <= 100 && e.keyCode == '37' || distance > 0 && positions.player.left <= 100 && e.keyCode == '65') {
    console.log("S1P:", positions.sky.left, "S1D:", skydist, "S2P:", positions.sky.leftTwo, "S2D:", skyTwoDist, "S3P:", positions.sky.leftThree, "S3D:", skyThreeDist);

    if(positions.sky.leftTwo <= positions.game.right && positions.sky.leftThree <= positions.game.left) {
        skyTwo.style.left = positions.sky.leftTwo - horizontal + speed + 'px';
        console.log("skyTwoDist:", skyTwoDist)
        skydist = skydist - horizontal + speed;

        sky.style.display = "block";
        sky.style.left = positions.sky.left - horizontal + speed + 'px';
        console.log(positions.sky.leftTwo, positions.sky.widthTwo, positions.sky.leftTwo - positions.sky.widthTwo, positions.game.left);
        
        if(skydist >= 1300) {
            skyTwo.style.display = "none";
            skyTwoDist = 0;
            positions.sky.leftTwo = -1300;
            skyTwo.style.left = positions.sky.leftTwo + 'px';
        }
    }

    if(positions.sky.left <= positions.game.right && positions.sky.leftTwo <= positions.game.left) {
        sky.style.left = positions.sky.left - horizontal + speed + 'px';
        console.log("skydist:", skydist)
        skyThreeDist = skyThreeDist - horizontal + speed;

        skyThree.style.display = "block";
        skyThree.style.left = positions.sky.leftThree - horizontal + speed + 'px';
        
        if(skyThreeDist >= 1300) {
            sky.style.display = "none";
            skydist = 0;
            positions.sky.left = -1300;
            sky.style.left = positions.sky.left + 'px';
        }
    }

    if(positions.sky.leftThree <= positions.game.right && positions.sky.left <= positions.game.left) {
        skyThree.style.left = positions.sky.leftThree - horizontal + speed + 'px';
        console.log("skyThreeDist:", skyThreeDist)
        skyTwoDist = skyTwoDist - horizontal + speed;

        skyTwo.style.display = "block";
        skyTwo.style.left = positions.sky.leftTwo - horizontal + speed + 'px';
        
        if(skyTwoDist >= 1300) {
            skyThree.style.display = "none";
            skyThreeDist = 0;
            positions.sky.leftThree = -1300;
            skyThree.style.left = positions.sky.leftThree + 'px';
        }
    }


    
}

// end scrolling
}
// End Movement

//start background scrolling
//end background scrolling


