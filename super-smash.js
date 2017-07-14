//var mashArray = [" Saffron City", "Underground Maze", "MIdair Stadium", "Rumble Falls"];
//var firstQuest = [34, 347];
//var secondQuest = ["Wolf", "Pac-Man"];


// var masharray = [" Saffron City", "Underground Maze", "MIdair Stadium", "Rumble Falls"];
// var character1 = ["Wolf", 500, 75];
// var character2 = ["Pac-Man",500, 65];

// while (character1[1] > 0) {
//     console.log("You have" + character1[1] + "health left.") 
// var answ2 = prompt("Who will you choose to fight?");
// if (answ2 == character2[0]) {
//     var answ1 = prompt("How many times will you strike?"); 
//    then   character2[500]-character1[75]

// }

// function answ1 

// if (answ1 == 

// }
 
var mashArray = ["JPC", "Canada", "Jersey", "Wendys", "smashburgers"]

var firstQuestion = [123, 563]
var secondquestion = ["Wolf", "Pac-Man", "Link"];

var promptSync = require("prompt-synch")();

for (var i=0; i<2; i++){
    firstQuestion.push(promptSync("How many times will you strike?"));
    secondquestion.push(promptSync("Who will you choose to fight?"));
}

var randArray = function(array){
    return array[Math.floor(Math.array()*array.length)];

}

console.log("You fought" + randArray(secondQuestion)+  "in the"  + randArray(mashArray)+  "and hit them"  +randArray(firstQuestion)+ "times.Too Bad. Mewto wins!");