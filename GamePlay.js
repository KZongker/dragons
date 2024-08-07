const gameBox = document.getElementById('gameBox');
const player = document.getElementById('player');
const sky = document.getElementById('sky');
const ground = document.getElementById('ground');
const landmark = document.getElementById('landmark');
const skyTwo = document.getElementById('skyTwo');
const skyThree = document.getElementById('skyThree');
const groundTwo = document.getElementById('groundTwo');
const groundThree = document.getElementById('groundThree');

const sheep = document.getElementById('sheep');
const scc = document.querySelectorAll('.scc');
const sheepCounter = document.getElementById('sheepCounter');
const sheepNum = document.getElementById('sheepNum');

const ringFront = document.getElementById('ringFront');
const rfTop = document.getElementById('rfTop');
const rfSide = document.getElementById('rfSide');
const rfBottom = document.getElementById('rfBottom');
const ringBack = document.getElementById('ringBack');
const rbSide = document.getElementById('rbSide');
const ringCounter = document.getElementById('ringCounter');
const ringNum = document.getElementById('ringNum');

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

const pauseGameBtn = document.getElementById('pauseGameBtn');
const gameTimer = document.getElementById('gameTimer');
const pauseScreen = document.getElementById('pauseScreen');
const currentTime = document.getElementById('currentTime');
const resumeGameBtn = document.getElementById('resumeGameBtn');

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

    showGame();
   
    skyTwo.style.left = gameSide + 'px';
    skyThree.style.left = (gameSide * 2) + 'px';

    groundTwo.style.left = gameSide + 'px';
    groundThree.style.left = (gameSide * 2) + 'px';

    landmark.style.display = "none";
    startScreen.style.display = "none";

    resetTimer();
    resetPosition();
    return;
}

function showGame() {
  player.style.display = "block";

  sky.style.display = "block";
  skyTwo.style.display = "block";
  skyThree.style.display = "block";

  ground.style.display = "block";
  groundTwo.style.display = "block";
  groundThree.style.display = "block";

  sheep.style.display = "block";
  sheepCounter.style.display = "block";

  ringFront.style.display = "block";
  ringBack.style.display = "block";
  ringCounter.style.display = "block";

  pauseGameBtn.style.display = "block";
  gameTimer.style.display = "block";
}

function hideGame() {
  player.style.display = "none";

  sky.style.display = "none";
  skyTwo.style.display = "none";
  skyThree.style.display = "none";

  ground.style.display = "none";
  groundTwo.style.display = "none";
  groundThree.style.display = "none";

  sheep.style.display = "none";
  sheepCounter.style.display = "none";

  ringFront.style.display = "none";
  ringBack.style.display = "none";
  ringCounter.style.display = "none";

  pauseGameBtn.style.display = "none";
  gameTimer.style.display = "none";
}

pauseGameBtn.addEventListener("click", pauseGame);
resumeGameBtn.addEventListener("click", resumeGame);

function pauseGame() {
  hideGame();

  gamePaused = true;
  pauseScreen.style.display = "block";
  setPlayPause();
  currentTime.textContent = `Current Time: ${hours}:${minuteTens}${minuteOnes}:${secondsTens}${secondsOnes}`;
}

function resumeGame() {
  showGame();

  gamePaused = false;
  pauseGameBtn.style.display = "block";
  gameTimer.style.display = "block";
  setPlayPause();
  pauseScreen.style.display = "none";
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
let grounddist = 1300;
let groundTwoDist = 1300;
let groundThreeDist = 1300;

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

  //sheep
  let sheeppos = parseInt(window.getComputedStyle(sheep).getPropertyValue("left"));
  let sheeptop = parseInt(window.getComputedStyle(sheep).getPropertyValue("top"));
  let sheepwidth = parseInt(window.getComputedStyle(sheep).getPropertyValue("width"));
  let sheepheight = parseInt(window.getComputedStyle(sheep).getPropertyValue("height"));

  //ring
  let rfpos = parseInt(window.getComputedStyle(rfSide).getPropertyValue("left"));
  let rfwidth = parseInt(window.getComputedStyle(rfSide).getPropertyValue("width"));
  let rftoppos = parseInt(window.getComputedStyle(rfTop).getPropertyValue("top"));
  let rftopheight = parseInt(window.getComputedStyle(rfTop).getPropertyValue("height"));
  let rfbotpos = parseInt(window.getComputedStyle(rfBottom).getPropertyValue("top"));
  let rfmpos = parseInt(window.getComputedStyle(ringFront).getPropertyValue("left"));
  let rbpos = parseInt(window.getComputedStyle(rbSide).getPropertyValue("left"));
  let rbmpos = parseInt(window.getComputedStyle(ringBack).getPropertyValue("left"));

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
      widthThree: groundThreeWidth,
      top: groundTop,
      topTwo: groundTwoTop,
      topThree: groundThreeTop
    },
    sheep: {
        left: sheeppos,
        top: sheeptop,
        width: sheepwidth,
        height: sheepheight
    },
    ring: {
      frontleft: rfpos,
      frontwidth: rfwidth,
      fronttop: rftoppos,
      frontheight: rftopheight,
      frontbottom: rfbotpos,
      frontmost: rfmpos,
      backleft: rbpos,
      backmost: rbmpos
    }
  }
}

function handleInput(e) {
  if (e.keyCode == '38' || e.keyCode == '87') handleUp(e);
  else if (e.keyCode == '40' || e.keyCode == '83') handleDown(e);
  else if (e.keyCode == '37' || e.keyCode == '65') handleLeft(e);
  else if (e.keyCode == '39' || e.keyCode == '68') handleRight(e);
}

function handleUp(e) {
  if (e.keyCode == '38') {
    e.preventDefault();
  }
  vertical -= 1;
  // console.log("W Key!");
  player.style.top = positions.player.top + vertical - speed + 'px';
}

function handleDown(e) {
  if (e.keyCode == '40') {
    event.preventDefault();
  }
  vertical += 1;
  // console.log("S Key!");
  player.style.top = positions.player.top + vertical + speed + 'px';
}

function handleLeft(e) {
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

}

function handleRight(e) {
  horizontal += 1;
  // console.log("D Key!");
  player.style.left = positions.player.left + horizontal + speed + 'px';
  if(player.style.transform !== 'scaleX(1)') {
  player.style.transform = 'scaleX(1)'; }
  distance += 1;
  console.log(distance);
  //console.log("PL - PW: <= RFL + (RFW * 3)", positions.player.left - positions.player.width <= positions.ring.frontleft + (positions.ring.frontwidth * 3),"PL - PW >= RFL + (RFW *2):", positions.player.left - positions.player.width >= positions.ring.frontleft + (positions.ring.frontwidth * 2), "PT - PH >= RFT - RFH:", positions.player.top - positions.player.height >= positions.ring.fronttop - positions.ring.frontheight, "PT <= RFB + RFH:", positions.player.top <= positions.ring.frontbottom + positions.ring.frontheight);
  //console.log("PL - PW >= SL:", positions.player.left + positions.player.width >= positions.sheep.left, "PL <= SL + SW:", positions.player.left <= positions.sheep.left + positions.sheep.width, "PT + PH >= ST:", positions.player.top + positions.player.height >= positions.sheep.top, "PT <= ST + SH:", positions.player.top <= positions.sheep.top + positions.sheep.height);
}

function handleCollissions() {
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
}

function handleRightScroll(e) {
  if(positions.player.left + positions.player.width >= positions.game.right / 2 && e.keyCode == '39' || positions.player.left + positions.player.width >= positions.game.right / 2 && e.keyCode == '68') {
    //console.log("S1P:", positions.sky.left, "S1D:", skydist, "S2P:", positions.sky.leftTwo, "S2D:", skyTwoDist, "S3P:", positions.sky.leftThree, "S3D:", skyThreeDist);
    player.style.left = positions.player.left + 'px';
    keepBackgroundsInBounds();

    sky.style.left = positions.sky.left - horizontal - speed + 'px';
    skyTwo.style.left = positions.sky.leftTwo - horizontal - speed + 'px';
    skyThree.style.left = positions.sky.leftThree - horizontal - speed + 'px';

    ground.style.left = positions.ground.left - horizontal - speed + 'px';
    groundTwo.style.left = positions.ground.leftTwo - horizontal - speed + 'px';
    groundThree.style.left = positions.ground.leftThree - horizontal - speed + 'px';

    if(positions.sheep.left > positions.game.left && positions.sheep.left < positions.game.right) {
      sheep.style.display = "block";
      sheep.style.left = positions.sheep.left - horizontal - speed + 'px';
    } else {
      sheep.style.display = "none";
    }

    if(positions.ring.frontmost > positions.game.left && positions.ring.frontmost < positions.game.right) {
      ringFront.style.display = "block";
      ringFront.style.left = positions.ring.frontmost - horizontal - speed + 'px';
    } else {
      ringFront.style.display = "none";
    }

    if(positions.ring.backmost > positions.game.left && positions.ring.backmost < positions.game.right) {
      ringBack.style.display = "block";
      ringBack.style.left = positions.ring.backmost - horizontal - speed + 'px';
    } else {
      ringBack.style.display = "none";
    }
  }
}

//left can be between -1300 and 2600
function keepBackgroundsInBounds() {
  //console.log("SkyLeft2 is", positions.sky.leftTwo);
  if (positions.sky.left > 2600) positions.sky.left = -1290;
  else if (positions.sky.left <= -1300) positions.sky.left = 2600;
  if (positions.ground.left > 2600) positions.ground.left = -1290;
  else if (positions.ground.left <= -1300) positions.ground.left = 2600;

  if (positions.sky.leftTwo > 2600) positions.sky.leftTwo = -1290;
  else if (positions.sky.leftTwo <= -1300) positions.sky.leftTwo = 2600;
  if (positions.ground.leftTwo > 2600) positions.ground.leftTwo = -1290;
  else if (positions.ground.leftTwo <= -1300) positions.ground.leftTwo = 2600;

  if (positions.sky.leftThree > 2600) positions.sky.leftThree = -1290;
  else if (positions.sky.leftThree <= -1300) positions.sky.leftThree = 2600;
  if (positions.ground.leftThree > 2600) positions.ground.leftThree = -1290;
  else if (positions.ground.leftThree <= -1300) positions.ground.leftThree = 2600;
  //console.log("SkyLeft2 NOW is", positions.sky.leftTwo);
}



function handleLeftScroll(e) {
  if((distance > 8 && positions.player.left <= 100 && e.keyCode == '37') || (distance > 10 && positions.player.left <= 100 && e.keyCode == '65')) {
    //We're scrolling left
    console.log("Scrolling left")
    console.log("S1P:", positions.sky.left, "S1D:", skydist, "S2P:", positions.sky.leftTwo, "S2D:", skyTwoDist, "S3P:", positions.sky.leftThree, "S3D:", skyThreeDist);
    keepBackgroundsInBounds();
    console.log(positions.sky.left, positions.sky.left + positions.sky.width, positions.game.right)

    sky.style.left = positions.sky.left - horizontal + speed + 'px';
    skyTwo.style.left = positions.sky.leftTwo - horizontal + speed + 'px';
    skyThree.style.left = positions.sky.leftThree - horizontal + speed + 'px';

    ground.style.left = positions.ground.left - horizontal + speed + 'px';
    groundTwo.style.left = positions.ground.leftTwo - horizontal + speed + 'px';
    groundThree.style.left = positions.ground.leftThree - horizontal + speed + 'px';
    
    if(positions.sheep.left > positions.game.left && positions.sheep.left < positions.game.right) {
      sheep.style.display = "block";
      sheep.style.left = positions.sheep.left - horizontal + speed + 'px';
    } else {
      sheep.style.display = "none";
    }

    if(positions.ring.frontmost > positions.game.left && positions.ring.frontmost < positions.game.right) {
      ringFront.style.display = "block";
      ringFront.style.left = positions.ring.frontmost - horizontal + speed + 'px';
    } else {
      ringFront.style.display = "none";
    }

    if(positions.ring.backmost > positions.game.left && positions.ring.backmost < positions.game.right) {
      ringBack.style.display = "block";
      ringBack.style.left = positions.ring.backmost - horizontal + speed + 'px';
    } else {
      ringBack.style.display = "none";
    }
  }
    
}

//collections start
let sheepCount = 0;
let sheepWoolColored = false;

function catchSheep() {
  if(sheepWoolColored) {
    return;
  } else if(positions.player.left + positions.player.width >= positions.sheep.left &&
    positions.player.left <= positions.sheep.left + positions.sheep.width &&
    positions.player.top + positions.player.height >= positions.sheep.top &&
    positions.player.top <= positions.sheep.top + positions.sheep.height
  ) {
      sheepCount += 1;
      sheepNum.textContent = `${sheepCount}/3`;
        if(mangoSel) {
            scc.forEach((el) => el.style.backgroundColor = 'red');
        } else if(fernSel) {
            scc.forEach((el) => el.style.backgroundColor = 'green');
        } else if(juniperSel) {
            scc.forEach((el) => el.style.backgroundColor = 'blue');
        } else if(violetSel) {
            scc.forEach((el) => el.style.backgroundColor = 'rgb(144, 0, 180)');
        }
        sheepWoolColored = true;
    }
}

let ringCount = 0;
let ringCollected = false;

function collectRing() {
  if(ringCollected) {
    return;
  } else if(positions.player.left - positions.player.width <= positions.ring.frontleft + (positions.ring.frontwidth * 3) &&
    positions.player.left - positions.player.width >= positions.ring.frontleft + (positions.ring.frontwidth * 2) &&
    positions.player.top - positions.player.height >= positions.ring.fronttop - positions.ring.frontheight &&
    positions.player.top <= positions.ring.frontbottom + positions.ring.frontheight) {
      ringCount += 1;
      ringNum.textContent = `${ringCount}/3`;
        ringCollected = true;
    }
}
//collections end

// start timer
let secondsOnes = 0;
let secondsTens = 0;
let minuteOnes = 0;
let minuteTens = 0;
let hours = 0;
let gamePaused = false;
let runTimer = setInterval(updateTimer, 1000);

function setPlayPause() {
  if(gamePaused) {
    clearInterval(runTimer);
  } else {
    runTimer = setInterval(updateTimer, 1000);
  }
}



function updateTimer() {
secondsOnes += 1;
if(secondsOnes === 10) {
  secondsOnes = 0,
  secondsTens += 1;
}
if(secondsTens === 6 && secondsOnes === 0){
  secondsOnes = 0;
  secondsTens = 0;
  minuteOnes += 1;
}
if(minuteOnes === 9 && secondsTens == 6) {
  minuteOnes = 0;
  minuteTens += 1;
}
if(minuteTens === 5 && minuteOnes === 10) {
  minuteOnes = 0;
  minuteTens = 0;
  hours += 1;
}
gameTimer.textContent = `${hours}:${minuteTens}${minuteOnes}:${secondsTens}${secondsOnes}`;
}

function resetTimer() {
  secondsOnes = 0;
  secondsTens = 0;
  minuteOnes = 0;
  minuteTens = 0;
  hours = 0;
}
//end timer

function checkKey(e) {
  e = e || window.event;
  horizontal = 0;
  vertical = 0;
  updatePositions();
  handleInput(e);
  handleCollissions();
  handleRightScroll(e);
  console.log("Fix dragon", distance, positions.player.left, e.keyCode);
  if(distance > 10 && positions.player.left <= 100 && (e.keyCode == '37' || e.keyCode == '65')) player.style.left = positions.player.left + 'px'; //fix dragon at 100px
  handleLeftScroll(e);
  catchSheep();
  collectRing();
}
