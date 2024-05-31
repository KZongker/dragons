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
const humans = [{
    name: "Hiccup Horrendous Haddock III",
    dragon: "Toothless",
    age: "15/20/21",
    bravery: 4,
    intelligence: 5,
    speed: 5,
    attack: 2,
    defense: 3,
    image: "Images/Fanart/Hiccup.jpg",
    color: "black",
},
{
    name: "Astrid Hofferson",
    dragon: "Stormfly",
    age: "15/20/21",
    bravery: 4,
    intelligence: 5,
    speed: 4,
    attack: 4,
    defense: 3,
    image: "Images/Fanart/astrid.jpg",
    color: "sky",
},
{
    name: "Ruffnut Thorston",
    dragon: "Barf (& Belch)",
    age: "14/19/20",
    bravery: 4,
    intelligence: 2,
    speed: 3,
    attack: 5,
    defense: 1,
    image: "Images/Fanart/Thorstons.jpg",
    color: "green",
},
{
    name: "Tuffnut Thorston",
    dragon: "Belch (& Barf)",
    age: "14/19/20",
    bravery: 2,
    intelligence: 3,
    speed: 2,
    attack: 5,
    defense: 3,
    image: "Images/Fanart/Thorstons.jpg",
    color: "green",
},
{
    name: "Fishlegs Ingerman",
    dragon: "Meatlug",
    age: "14/19/20",
    bravery: 1,
    intelligence: 5,
    speed: 1,
    attack: 4,
    defense: 4,
    image: "Images/Fanart/fishlegsig.jpg",
    color: "brown",
},
{
    name: "Snotlout Jorgenson",
    dragon: "Hookfang",
    age: "15/20/21",
    bravery: 5,
    intelligence: 3,
    speed: 3,
    attack: 5,
    defense: 3,
    image: "Images/Fanart/Snotloutig.jpg",
    color: "scarlet",
},
{
    name: "Jeremy Zongker",
    dragon: "Snaggleclaw",
    age: "24/29/30",
    bravery: 3,
    intelligence: 5,
    speed: 4,
    attack: 4,
    defense: 3,
    image: "Images/Fanart/Hiccup.jpg",
    color: "blue",
},
{
    name: "Alyssa Zongker",
    dragon: "Emberglow",
    age: "13/17/18",
    bravery: 5,
    intelligence: 4,
    speed: 4,
    attack: 1,
    defense: 2,
    image: "Images/Fanart/ruffnut.jpg",
    color: "green",
},
{
    name: "Violet Zongker",
    dragon: "Indigo",
    age: "26/31/32",
    bravery: 3,
    intelligence: 4,
    speed: 3,
    attack: 3,
    defense: 4,
    image: "Images/Fanart/astrid.jpg",
    color: "indigo",
},
{
    name: "Thorn Zongker",
    dragon: "Tigerlily",
    age: "17/22/23",
    bravery: 2,
    intelligence: 4,
    speed: 4,
    attack: 1,
    defense: 3,
    image: "Images/Fanart/Thorstons.jpg",
    color: "chartreuse",
}];
//end human array

//start human card functions
function pageLoader() {
    fillCard();
    fillOptions();
    fillOptionsTwo();
    fillColors();
    fillImages();
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
    let result = '<div class="card ' + human.color + '" id="card' + index + '">'
   + '  <div class="cardhead" id="card' + index + 'head">'
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
        battleWinner.innerText = 'The Winner is: ' + human1.name;
    }
    if (fighterOne < fighterTwo) {
        battleWinner.innerText = 'The Winner is: ' + human2.name;
    }
    if (fighterOne == fighterTwo) {
        battleWinner.innertext = 'The Winner is: Nobody! They tied!'
    }
    return battleWinner;
}

function doBattle() {
    console.log('Fighting Vikings!!')
    if(battlerOne.value == battlerTwo.value) {
        alert('Viking cannot fight themself!');
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

function requireHuman() {
    if(vikingName.value === "") {
        alert("Please enter a full viking name!");
    } else if(dragonName.value === "") {
        alert("Please enter a name for your dragon!");
    } else if(vikingAge.value === "") {
        alert("Please enter your viking's age!");
    } else if(vikingBravery.value === "") {
        alert("Please enter a bravery stat!");
    } else if(vikingIntelligence.value === "") {
        alert("Please enter an intelligence stat!");
    } else if(vikingSpeed.value === "") {
        alert("Please enter a speed stat!");
    } else if(vikingAttack.value === "") {
        alert("Please enter an attack stat!");
    } else if(vikingDefense.value === "") {
        alert("Please enter a defense stat!");
    } else if(vikingAge.value <= 0 || vikingAge.value >= 114) {
        alert("Please enter a valid age! (1-114)");
    } else if(vikingBravery.value <= 0 || vikingBravery.value >= 6 || vikingIntelligence.value <=0 || vikingIntelligence.value >= 6 ||
        vikingSpeed.value <= 0 || vikingSpeed.value >= 6 || vikingAttack.value <= 0 || vikingAttack.value >= 6 || vikingDefense.value <= 0 ||
        vikingDefense.value >=6) {
        alert("Please enter valid stat numbers! (1-5)");
    } else {
        createHumans();
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
        alert("Nobody to delete!");
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