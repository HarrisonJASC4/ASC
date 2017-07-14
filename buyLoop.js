var prompt = require('prompt-sync')();

//Player starts with $1000 \
// Buyig items at a store before they embark on an adventure
// Want to spend as much moey as poddible in the store

// PSEUDO CODE
// Assign the money to a varibale 
// Create an array to store the products brought
//until the player runs out of money
// ask them what they want to buy 
//SUbtract that remaining price from the money or the family's remaining money

var money = 1000;
var items = [];

// while the player has money
while (money > 99) {
    console.log("You have $"  + money + "left. A tent is $100. Used Yeezys are $500");
    var answer = prompt('Which item do you want to buy?');

    if (answer == "tent") {
        money = money - 100;
        items.push("tent");
        console.log("You bought a tent");
    } else if (answer == "Yeezys") {
        money = money - 500
        items.push("Used Yeezys");
        console.log("you brought a used pair of Yeezys")
    } else {
        console.log("I don't understand your answer. Please try again.");
    }
}

