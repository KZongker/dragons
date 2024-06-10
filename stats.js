//test 1:
let greeting = "Ahoy there";
console.log(greeting);
//works fine!!

/* previously grabbed images with this code:
const hicImage = document.querySelector("#hicImage"); */

/* Previously altered card colors with this code:
const cardHeadColor1 = document.getElementById("card1head").style.backgroundColor = "rgb(0,0,0)";
const cardColor1 = document.getElementById("card1").style.backgroundColor = "rgb(0,0,0)";

function card1ColorChange() {
    cardHeadColor1(humans[0]);
    cardColor1(humans[0]);
}; */

//start human array
let humans = [];
async function loadData() {
    const response = await fetch("./humans.json");
    humans = await response.json();
}
//end human array

//start human card functions
function pageLoader() {
    loadData().then(() => {
        fillCard();
        fillOptions();
        fillOptionsTwo();
        fillColors();
        fillImages();
        hideBox();
    });
}

function fillCard() {
    const everyHuman = fetchHumans();
    let result = [];
    for (let i = 0; i < everyHuman.length; i++) {
        const human = everyHuman[i];
        const card = getCard(human, i + 1);
        result.push(card);
    }
    console.log(result);
    document.getElementById('cardholder').innerHTML = result.join('');
}

function getCard(human, index) {
    let result = '<div class="humanCard ' + human.color + '" id="humanCard' + index + '">'
   + '  <div class="humanCardhead" id="humanCard' + index + 'head">'
   + '      <h3>' + human.name + '</h3>'
   + '  </div>'
   + '  <div class="cardcont">'
   + '      <img src="' + human.image + '">'
   + '      <p><span class="bold">Dragon: </span>' + human.dragon + '</p>'
   + '      <p><span class="bold">Age: </span>' + human.age + '</p><br>'
   + getStats(human)
   + '  </div>'
   + '</div>';
   return result;
}

function getStats(human) {
    let result = '<table class="starstats">'
    + '<tr><td>Bravery: </td><td>' + beStars(human.bravery) + '</td></tr>'
    + '<tr><td>Intelligence: </td><td>' + beStars(human.intelligence) + '</td></tr>'
    + '<tr><td>Speed: </td><td>' + beStars(human.speed) + '</td></tr>'
    + '<tr><td>Attack: </td><td>' + beStars(human.attack) + '</td></tr>'
    + '<tr><td>Defense: </td><td>' + beStars(human.defense) + '</td></tr>'
    +'</table>'
    return result;
}

function beStars(stars) {
    let result = "&#x2605; &#x2606; &#x2606; &#x2606; &#x2606;";
    if (stars == 2) {
        result = "&#x2605; &#x2605; &#x2606; &#x2606; &#x2606;";
    }
    if (stars == 3) {
        result = "&#x2605; &#x2605; &#x2605; &#x2606; &#x2606;";
    }
    if (stars == 4) {
        result = "&#x2605; &#x2605; &#x2605; &#x2605; &#x2606;";
    }
    if (stars == 5) {
        result = "&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;";
    }
    return result;
}
//end human card functions

//start human battle functions
const battlerOne = document.getElementById('battlerOne');
const battlerTwo = document.getElementById('battlerTwo');
const battleWinner = document.getElementById('battleWinner');

function fillOptions() {
    let everyHuman = fetchHumans();
    let result = [];
    for (let i = 0; i < everyHuman.length; i++) {
        const human = everyHuman[i];
        options = getOptions(human, i);
        result.push(options);
    }
    battlerOne.innerHTML = result.join('');
    battlerTwo.innerHTML = result.join('');
}

function getOptions(human, index) {
    let result = '<option value="' + index + '">' + human.name + '</option>';
    return result;
}



function combatMath(human) {
    let damage = human.bravery + human.attack;
    let resistance = human.speed + human.defense;
    let total = damage - resistance;
    return total;
}

function pullCombat(human1Index, human2Index) {
    let everyHuman = fetchHumans();
    let human1 = everyHuman[human1Index];
    let human2 = everyHuman[human2Index];
    let fighterOne = combatMath(human1);
    let fighterTwo = combatMath(human2);
    if (fighterOne > fighterTwo) {
        battleWinner.innerText = 'The Winner is: ' + human1.name + '!';
    }
    if (fighterOne < fighterTwo) {
        battleWinner.innerText = 'The Winner is: ' + human2.name + '!';
    }
    if (fighterOne == fighterTwo) {
        battleWinner.innertext = 'The Winner is: Nobody! They tied!'
    }
    return battleWinner;
}

function doBattle() {
    console.log('Fighting Vikings!!')
    if(battlerOne.value == battlerTwo.value) {
        fightAlert.style.display = "block";
    } else {
       pullCombat(battlerOne.value, battlerTwo.value);
    }
}
//end human battle functions

//start adding humans functions
const vikingName = document.getElementById('fullName');
const dragonName = document.getElementById('dragonName');
const vikingAge = document.getElementById('vikingAge');
const vikingBravery = document.getElementById('brave');
const vikingIntelligence = document.getElementById('smart');
const vikingSpeed = document.getElementById('fast');
const vikingAttack = document.getElementById('punch');
const vikingDefense = document.getElementById('block');
const addHumanBtn = document.getElementById('addHumanBtn');

const colorSelection = document.getElementById('colorSelection');
const imageSelection = document.getElementById('imageSelection');

const deleteBox = document.getElementById('deleteBox');
const removeHumanBtn = document.getElementById('removeHumanBtn');

const alertBox = document.getElementById('alertBox');
const fightAlert = document.getElementById('fightAlert');
const deleteAlert = document.getElementById('deleteAlert');

function hideBox() {
    alertBox.style.display = "none";
    fightAlert.style.display = "none";
    deleteAlert.style.display = "none";
}

function hideBoxTwo() {
    fightAlert.style.display = "none";
}

function hideBoxThree() {
    deleteAlert.style.display = "none";
}

function requireHuman() {
    if(vikingName.value === "") {
        alertBox.style.display = "block";
        let result = [];
        let alteredAlert = '<div class="alert alert-danger alert-dismissible fade show text-center" role="alert">'
               + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">'
               + '<path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>'
               + '</svg>'
               + ' Please enter a full viking name!'
               + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
               + '</div>';
            result.push(alteredAlert);
        alertBox.innerHTML = result.join('');
    } else if(dragonName.value === "") {
        alertBox.style.display = "block";
        let result = [];
        let alteredAlert = '<div class="alert alert-danger alert-dismissible fade show text-center" role="alert">'
               + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">'
               + '<path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>'
               + '</svg>'
               + ' Please enter a dragon name!'
               + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
               + '</div>';
            result.push(alteredAlert);
        alertBox.innerHTML = result.join('');
    } else if(vikingAge.value === "") {
        alertBox.style.display = "block";
        let result = [];
        let alteredAlert = '<div class="alert alert-danger alert-dismissible fade show text-center" role="alert">'
               + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">'
               + '<path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>'
               + '</svg>'
               + ' Please enter an age for your viking!'
               + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
               + '</div>';
            result.push(alteredAlert);
        alertBox.innerHTML = result.join('');
    } else if(vikingBravery.value === "") {
        alertBox.style.display = "block";
        let result = [];
        let alteredAlert = '<div class="alert alert-danger alert-dismissible fade show text-center" role="alert">'
               + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">'
               + '<path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>'
               + '</svg>'
               + ' Please enter a bravery stat!'
               + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
               + '</div>';
            result.push(alteredAlert);
        alertBox.innerHTML = result.join('');
    } else if(vikingIntelligence.value === "") {
        alertBox.style.display = "block";
        let result = [];
        let alteredAlert = '<div class="alert alert-danger alert-dismissible fade show text-center" role="alert">'
               + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">'
               + '<path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>'
               + '</svg>'
               + ' Please enter an intelligence stat!'
               + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
               + '</div>';
            result.push(alteredAlert);
        alertBox.innerHTML = result.join('');
    } else if(vikingSpeed.value === "") {
        alertBox.style.display = "block";
        let result = [];
        let alteredAlert = '<div class="alert alert-danger alert-dismissible fade show text-center" role="alert">'
               + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">'
               + '<path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>'
               + '</svg>'
               + ' Please enter a speed stat!'
               + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
               + '</div>';
            result.push(alteredAlert);
        alertBox.innerHTML = result.join('');
    } else if(vikingAttack.value === "") {
        alertBox.style.display = "block";
        let result = [];
        let alteredAlert = '<div class="alert alert-danger alert-dismissible fade show text-center" role="alert">'
               + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">'
               + '<path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>'
               + '</svg>'
               + ' Please enter an attack stat!'
               + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
               + '</div>';
            result.push(alteredAlert);
        alertBox.innerHTML = result.join('');
    } else if(vikingDefense.value === "") {
        alertBox.style.display = "block";
        let result = [];
        let alteredAlert = '<div class="alert alert-danger alert-dismissible fade show text-center" role="alert">'
               + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">'
               + '<path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>'
               + '</svg>'
               + ' Please enter a defense stat!'
               + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
               + '</div>';
            result.push(alteredAlert);
        alertBox.innerHTML = result.join('');
    } else if(vikingAge.value <= 0 || vikingAge.value > 114) {
        alertBox.style.display = "block";
        let result = [];
        let alteredAlert = '<div class="alert alert-warning alert-dismissible fade show text-center" role="alert">'
               + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond" viewBox="0 0 16 16">'
               + '<path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>'
               + '<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>'
               + '</svg>'
               + ' Please enter a valid age! (1-114)'
               + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
               + '</div>';
            result.push(alteredAlert);
        alertBox.innerHTML = result.join('');
    } else if(vikingBravery.value <= 0 || vikingBravery.value >= 6 || vikingIntelligence.value <=0 || vikingIntelligence.value >= 6 ||
        vikingSpeed.value <= 0 || vikingSpeed.value >= 6 || vikingAttack.value <= 0 || vikingAttack.value >= 6 || vikingDefense.value <= 0 ||
        vikingDefense.value >=6) {
            alertBox.style.display = "block";
            let result = [];
            let alteredAlert = '<div class="alert alert-warning alert-dismissible fade show text-center" role="alert">'
                   + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond" viewBox="0 0 16 16">'
                   + '<path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>'
                   + '<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>'
                   + '</svg>'
                   + ' Please enter valid stat numbers! (1-5)'
                   + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
                   + '</div>';
                result.push(alteredAlert);
            alertBox.innerHTML = result.join('');
    } else {
        createHumans();
        alertBox.style.display = "block";
        let result = [];
        let alteredAlert = '<div class="alert alert-success alert-dismissible fade show text-center" role="alert">'
               + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">'
               + '<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>'
               + '</svg>'
               + ' Human Added! Feel free to test them in battle! '
               + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">'
               + '<path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>'
               + '</svg>'
               + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
               + '</div>';
            result.push(alteredAlert);
        alertBox.innerHTML = result.join('');
    }
}

function createHumans() {

    const newHuman = {
        name: `${vikingName.value}`,
        dragon: `${dragonName.value}`,
        age: `${JSON.parse(vikingAge.value)}/${JSON.parse(vikingAge.value) + 5}/${JSON.parse(vikingAge.value) + 6}`,
        bravery: `${vikingBravery.value}`,
        intelligence: `${vikingIntelligence.value}`,
        speed: `${vikingSpeed.value}`,
        attack: `${vikingAttack.value}`,
        defense: `${vikingDefense.value}`,
        image: `${imageSelection.value}`,
        color: `${colorSelection.value}`
    }

    const extraHumans = localStorage.getItem("extras");
    const extraHumansParsed = JSON.parse(extraHumans);
    const storageArray = extraHumansParsed ? extraHumansParsed : [];
    storageArray.push(newHuman);
    storeHumans(storageArray);
    fillCard(newHuman);
    fillOptions(newHuman);
    fillOptionsTwo();
    document.getElementById('addVikings').reset();
}

function storeHumans(storageArray) {
    const stringStorage = JSON.stringify(storageArray);
    localStorage.setItem("extras", stringStorage);
}

function fetchHumans() {
    const extraHumans = localStorage.getItem("extras");
    const extraHumansParsed = JSON.parse(extraHumans);
    const fullHumansList = (extraHumansParsed) ? humans.concat(extraHumansParsed) : humans;
    return fullHumansList;
}

const colorArray = [
    {name: "Pink"},
    {name: "Magenta"},
    {name: "Red"},
    {name: "Scarlet"},
    {name: "Orange"},
    {name: "Yellow"},
    {name: "Chartreuse"},
    {name: "Green"},
    {name: "Sky"},
    {name: "Blue"},
    {name: "Indigo"},
    {name: "Purple"},
    {name: "Brown"},
    {name: "Black"},
    {name: "Slate"},
    {name: "Grey"}
];

function fillColors() {
    let result = [];
    for(let i = 0; i < colorArray.length; i++) {
        const color = colorArray[i];
            options = getColorOptions(color, i);
            result.push(options);
    }
    colorSelection.innerHTML = result.join('');
}

function getColorOptions(color) {
    let result = '<option value="' + color.name.toLowerCase() + '">' + color.name + '</option>';
    return result;
}

const imageArray = [
    {name: "Hiccup",
    image: "Images/Fanart/Hiccup.jpg"},
    {name: "Astrid",
    image: "Images/Fanart/astrid.jpg"},
    {name: "Thorstons",
    image: "Images/Fanart/Thorstons.jpg"},
    {name: "Ruffnut",
    image: "Images/Fanart/ruffnut.jpg"},
    {name: "Fishlegs",
    image: "Images/Fanart/fishlegsig.jpg"},
    {name: "Snotlout",
    image: "Images/Fanart/Snotloutig.jpg"}
];

function fillImages() {
    let result = [];
    for(let i = 0; i < imageArray.length; i++) {
        const imageChoice = imageArray[i];
            options = getImageOptions(imageChoice, i);
            result.push(options);
    }
    imageSelection.innerHTML = result.join('');
}

function getImageOptions(imageChoice) {
    let result = '<option value="' + imageChoice.image + '">' + imageChoice.name + '</option>';
    return result;
}

//start deleting humans functions
function fillOptionsTwo() {
    const extraHumans = localStorage.getItem("extras");
    const extraHumansParsed = JSON.parse(extraHumans);
    if (!extraHumansParsed) {
        return;
    } else {
        let result = [];
        for (let i = 0; i < extraHumansParsed.length; i++) {
            const human = extraHumansParsed[i];
            options = getOptions(human, i);
            result.push(options);
        }
        deleteBox.innerHTML = result.join('');
    }
}

function murder() {
    let index = document.getElementById('deleteBox').selectedIndex;
    const extraHumans = localStorage.getItem("extras");
    const extraHumansParsed = JSON.parse(extraHumans);
    if(extraHumansParsed.length === 0) {
        deleteAlert.style.display = "block";
    } else {
        extraHumansParsed.splice(index, 1);
        let extraHumansString = JSON.stringify(extraHumansParsed);
        localStorage.setItem("extras", extraHumansString);
        fillCard();
        fillOptionsTwo();
    }
}
//end adding/deleting humans functions
//end human functions


/* from notepad:
 for (let i = 0; i < humans.length; i++) result.push(getCard(humans[i], i + 1));

 same as:

for (let i = 0; i < humans.length; i++) {
	const human = humans[i];
	const card = getCard(human, i + 1);
	result.push(card);
 */