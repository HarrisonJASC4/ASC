var hp = 100;
var gold = 0;
var numberDefeated = 0;

function setup() {
    //Add game title
    $("body").append("<h1> Welcome to Orge Fighter v.1.0 </h1>");

    //Add game game info
    $("body").append("<p> Orges are attacking your village! When you dlay one, they drop 10 golds. The more gold you carry though, the harder is it to defeat an orgre</p>");

    //Add stats
    //1000: Add stat values
    $("body").append("<h1> STATS</h1><p id= 'stats'</p>");

    //Add attack butto
    $("body").append("<button onclick= 'attack()'> Attak the Orge!</button>");

    //Add container/placeholder for orge image
    $("body").append("<div id= 'orges'></div> ");

    updateStats();
}

function updateStats() {
    $("#stats").text("HP: " + hp + "| Gold: " + gold + " | Orges Slain: " + numberDefeated);

}

function attack() {
    if (hp > 0) { //Player is still alive 
        if (Math.random() * 100 > gold) {
            gold += 10; //gold =gold + 10
            numberDefeated++;
            $("#orges").prepend("<p> You Won! + 10 gold </p>");
        } else {
            gold--; //gold = gold - 1
            hp--;
            $("#orges").prepend("<p> You lost! -1 gold </p>");
        }
        updateStats();
        spawnOrge();
    }
}


function spawnOrge() {
    $("#orges").prepend("<img src ='https://thumb1.shutterstock.com/display_pic_with_logo/100254/180520877/stock-vector-cartoon-ogre-with-a-big-axe-isolated-180520877.jpg'>")
}

$(document).ready(setup);


// $("body.updateStats()").replacewith(){
//     if (win == true);
// }



//Add game title
//Add game description
// //Add the stats
// //Add an orge image
// //when the player clicks the button
// //  if player has HP If player defeats orge
// //  Add paragraph saying "you win" 
// + Gold to the player 
// +Num of orges defeated 
// else 
// Add paragraph saying "You Loss" 
// -Gold from player 
// -HP 
// Update stats 
// Add another orge image 
// else 
// Add paragraph saying "Game Over"


