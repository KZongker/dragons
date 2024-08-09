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
const sheepCounter = document.getElementById('sheepCounter');
const sheepNum = document.getElementById('sheepNum');
const sheepContainer = document.getElementById('sheepContainer');

const ringBack = document.getElementById('ringBack');
const ringFront = document.getElementById('ringFront');
const ringContainer = document.getElementById('ringContainer');
const rfTop = document.getElementById('rfTop');
const rfSide = document.getElementById('rfSide');
const rfBottom = document.getElementById('rfBottom');
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

    fillSheep();
    fillRing();

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

  sheepContainer.style.display = "block";
  sheepCounter.style.display = "block";

  ringContainer.style.display = "block";
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

  sheepContainer.style.display = "none";
  sheepCounter.style.display = "none";

  ringContainer.style.display = "none";
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

    sheepArray.forEach((sheep) => {
      let s = document.getElementById('sheep' + sheep.index);
      sheep.left = sheep.left - horizontal - speed
      s.style.left = sheep.left + 'px';
    });

    ringArray.forEach((ring) => {
      ring.left = ring.left - horizontal - speed;
      ring.secondleft = ring.secondleft - horizontal - speed;
      let rb = document.getElementById('ringBack' + ring.index);
      let rf = document.getElementById('ringFront' + ring.index);
      rb.style.left = ring.left + 'px';
      rf.style.left = ring.secondleft + 'px';
    });

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

    sheepArray.forEach((sheep) => {
      let s = document.getElementById('sheep' + sheep.index);
      sheep.left = sheep.left - horizontal + speed
      s.style.left = sheep.left + 'px';
    });

    ringArray.forEach((ring) => {
      ring.left = ring.left - horizontal + speed;
      ring.secondleft = ring.secondleft - horizontal + speed;
      let rb = document.getElementById('ringBack' + ring.index);
      let rf = document.getElementById('ringFront' + ring.index);
      rb.style.left = ring.left + 'px';
      rf.style.left = ring.secondleft + 'px';
    });
    
  }
    
}

//spawn start
const sheepArray = [];

function spawnSheep(index) {
  const left = Math.floor(Math.random() * 300);
  let sheeptop = parseInt(window.getComputedStyle(sheepContainer).getPropertyValue("top"));
  result = document.createElement("div");
  result.innerHTML = '<div class="sheep" style="left:' + left + '%" id="sheep' + index + '">'
        + '<div class="sheepHead">'
        + '<div class="sheepHeadWool scc"></div>'
        +   '<div class="sheepEarLeft scc"></div>'
        +   '<div class="sheepEarRight scc"></div>'
        +    '<div class="sheepFace">'
        +        '<div class="sheepEyeLeft"></div>'
        +        '<div class="sheepEyeRight"></div>'
        +        '<div class="sheepMouth"></div>'
        +    '</div>'
        + '</div>'
        + '<div class="sheepBody">'
        +    '<div class="sheepWool scc"></div>'
        +    '<div class="sheepTail scc"></div>'
        +    '<div class="sheepLeg SFL"></div>'
        +    '<div class="sheepLeg SFR"></div>'
        +    '<div class="sheepLeg SBL"></div>'
        +    '<div class="sheepLeg SBR"></div>'
        + '</div>'
    + '</div>';
    sheepContainer.appendChild(result);
    sheepArray.push({index, left: left * 1300 / 100, top: 420, width: 70, height: 60, woolColored: false});
    return result;
}

function fillSheep() {
  for(let i= 0; i < 5; i++) {
    spawnSheep(i);
  }
}
//spawn end

//collections start
let sheepCount = 0;

function catchAllSheep() {
  sheepArray.forEach((sheep) => {
    catchSheep(sheep);
  });
}

function catchSheep(sheep) {
  if(sheep.woolColored) {
    return;
  } else if(positions.player.left + positions.player.width >= sheep.left &&
    positions.player.left <= sheep.left + sheep.width &&
    positions.player.top + positions.player.height >= sheep.top &&
    positions.player.top <= sheep.top + sheep.height
  ) {
    console.log("touching!!");
    const scc = document.querySelectorAll('#sheep' + sheep.index + ' .scc');
      sheepCount += 1;
      sheepNum.textContent = `${sheepCount}/5`;
        if(mangoSel) {
            scc.forEach((el) => el.style.backgroundColor = 'red');
        } else if(fernSel) {
            scc.forEach((el) => el.style.backgroundColor = 'green');
        } else if(juniperSel) {
            scc.forEach((el) => el.style.backgroundColor = 'blue');
        } else if(violetSel) {
            scc.forEach((el) => el.style.backgroundColor = 'rgb(144, 0, 180)');
        }
        sheep.woolColored = true;
    }
}

const ringArray = [];

function spawnRing(index) {
  const left = Math.floor(Math.random() * 300) + 10;
  const top = Math.floor(Math.random() * 50);
  result = document.createElement("div");
  result.innerHTML = '<div class="ringBack" id="ringBack' + index + '" style="left:' + left + '%;top:' + top + '%">'
  +    '<div class="rbTop" id="rbTop"></div>'
  +    '<div class="rbSide" id="rbSide"></div>'
  +    '<div class="rbBottom" id="rbBottom"></div>'
  + '</div>'
    ringContainer.appendChild(result);
    const secondleft = left + 2;
    resultTwo = document.createElement("div");
    resultTwo.innerHTML = '<div class="ringFront" id="ringFront' + index + '" style="left:' + secondleft + '%;top:' + top + '%">'
  +    '<div class="rfTop" id="rfTop"></div>'
  +    '<div class="rfSide" id="rfSide"></div>'
  +    '<div class="rfBottom" id="rfBottom"></div>'
  + '</div>'
  ringContainer.appendChild(resultTwo);
  ringArray.push({index, left: left * 1300 / 100, secondleft: secondleft * 1300 / 100, top: top, width: 60, height: 140, ringCollected: false});
    return result, resultTwo;
}

function fillRing() {
  for(let i= 0; i < 3; i++) {
    spawnRing(i);
  }
}

function collectAllRings() {
  ringArray.forEach((ring) => {
    collectRing(ring);
  });
}

let ringCount = 0;

function collectRing(ring) {
  if(ring.ringCollected) {
    return;
  } else if(positions.player.left + positions.player.width >= ring.left + ring.width &&
    positions.player.left + positions.player.width <= ring.secondleft + ring.width &&
    positions.player.top  >= ring.top &&
    positions.player.top - positions.player.height <= ring.top + ring.height) {
      console.log("collected!");
      ringCount += 1;
      ringNum.textContent = `${ringCount}/3`;
        ring.ringCollected = true;
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
  //console.log("Fix dragon", distance, positions.player.left, e.keyCode);
  if(distance > 10 && positions.player.left <= 100 && (e.keyCode == '37' || e.keyCode == '65')) player.style.left = positions.player.left + 'px'; //fix dragon at 100px
  handleLeftScroll(e);
  catchAllSheep();
  collectAllRings();
}
