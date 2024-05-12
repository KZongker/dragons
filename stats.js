//test 1:
let greeting = "Ahoy there";
console.log(greeting);
//works fine!!

//grabbing images:
const hicImage = document.querySelector("#hicImage");
const astImage = document.querySelector("#astImage");
const rufImage = document.querySelector("#rufImage");
const tufImage = document.querySelector("#tufImage");
const fishImage = document.querySelector("#fishImage");
const snotImage = document.querySelector("#snotImage");
//end image grabbing lol

/* can I similarly grab colors???
const cardColor1 = document.querySelector();
no this wouldn't be the right method, style property maybe vvv
document.getElementById("card1head").style.background-color = "black";
no idea if it would work- or if it works with rgb colors?? does not like hyphen. Underscore seems okay?
const cardColor1 = document.getElementById("card1head").style.background_color = "rgb(0,0,0)";
^^^ this but camelCase not underscore: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
would have to run function to change color????? Maybe????????? */
const cardHeadColor1 = document.getElementById("card1head").style.backgroundColor = "rgb(0,0,0)";
const cardColor1 = document.getElementById("card1").style.backgroundColor = "rgb(0,0,0)";

function card1ColorChange() {
    cardHeadColor1(humans[0]);
    cardColor1(humans[0]);
};
//ITWORKS ITWORKS ITWOKRS ASDHFAHBHVEBVDHBFWEHABHDBF

//colors continued
const cardHeadColor2 = document.getElementById("card2head").style.backgroundColor = "rgb(0, 136, 255)";
const cardColor2 = document.getElementById("card2").style.backgroundColor = "rgb(0, 136, 255)";

function card1ColorChange() {
    cardHeadColor2(humans[1]);
    cardColor2(humans[1]);
};

const cardHeadColor3 = document.getElementById("card3head").style.backgroundColor = "rgb(22, 188, 22)";
const cardColor3 = document.getElementById("card3").style.backgroundColor = "rgb(22, 188, 22)";

function card1ColorChange() {
    cardHeadColor3(humans[2]);
    cardColor3(humans[2]);
};

const cardHeadColor4 = document.getElementById("card4head").style.backgroundColor = "rgb(22, 188, 22)";
const cardColor4 = document.getElementById("card4").style.backgroundColor = "rgb(22, 188, 22)";

function card1ColorChange() {
    cardHeadColor4(humans[3]);
    cardColor4(humans[3]);
};

const cardHeadColor5 = document.getElementById("card5head").style.backgroundColor = "rgb(125, 113, 36)";
const cardColor5 = document.getElementById("card5").style.backgroundColor = "rgb(125, 113, 36)";

function card1ColorChange() {
    cardHeadColor5(humans[4]);
    cardColor5(humans[4]);
};

const cardHeadColor6 = document.getElementById("card6head").style.backgroundColor = "rgb(252, 92, 0)";
const cardColor6 = document.getElementById("card6").style.backgroundColor = "rgb(252, 92, 0)";

function card1ColorChange() {
    cardHeadColor6(humans[5]);
    cardColor6(humans[5]);
};
//colors end... I forgot about text shadows... ughhhh.......... update later. reorganize too.

//start human array
const humans = [{
    name: "Hiccup Horrendous Haddock III",
    dragon: "Toothless",
    age: "15/20/21",
    bravery: "4/5",
    intelligence: "5/5",
    speed: "5/5",
    attack: "2/5",
    defense: "3/5",
    hicImage,
},
{
    name: "Astrid Hofferson",
    dragon: "Stormfly",
    age: "15/20/21",
    bravery: "4/5",
    intelligence: "5/5",
    speed: "4/5",
    attack: "4/5",
    defense: "3/5",
    astImage,
},
{
    name: "Ruffnut Thorston",
    dragon: "Barf (& Belch)",
    age: "14/19/20",
    bravery: "4/5",
    intelligence: "2/5",
    speed: "3/5",
    attack: "5/5",
    defense: "1/5",
    rufImage,
},
{
    name: "Tuffnut Thorston",
    dragon: "Belch (& Barf)",
    age: "14/19/20",
    bravery: "2/5",
    intelligence: "3/5",
    speed: "2/5",
    attack: "5/5",
    defense: "3/5",
    tufImage,
},
{
    name: "Fishlegs Ingerman",
    dragon: "Meatlug",
    age: "14/19/20",
    bravery: "1/5",
    intelligence: "5/5",
    speed: "1/5",
    attack: "4/5",
    defense: "4/5",
    fishImage,
},
{
    name: "Snotlout Jorgenson",
    dragon: "Hookfang",
    age: "15/20/21",
    bravery: "5/5",
    intelligence: "3/5",
    speed: "3/5",
    attack: "5/5",
    defense: "3/5",
    snotImage,
}];
//end human array

//test 2:
console.log(humans[5]);
// yessss all images connect!!