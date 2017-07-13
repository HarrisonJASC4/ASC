//Task
//Create a rand() function
//Takes a number
//Returns a random number between 0 and that number

//PSEUDOCODE
//multiply Math.random() by the given nmber
//remove the decimal part
//return the remaining intege

function rand(num) {
    //returns a random integer between 0 and num
    var randomNum = num * Math.random();
    var result = Math.floor(randomNum);
    return result;
}
//Time consuming & save code way:
    //return Math.floor(num * Math.random());

console.log(rand(15));
console.log(rand(999));
console.log(rand(0));
