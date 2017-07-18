var sentence = "hello world";
var typed = "";


function setup(){
createCanvas(550, 550);
background (130);

fill("white");
texSize(16);
text("please type in the sentence beliw.", 50, 50);
text(sentence, 50, 100);

}

function keyTyped(){
typed = typed + key;
if(typed == sentence){
    alert("You win!");
}
}


// var x = 0;
// function draw(){
//    background(130)
//     ellipse(x, 150, 100);
// x++
// }
// "Hi" "my" "name" "is" "Barry Allen" "and" "I'm" "the" 
//     "fastest" "man" "alive"


var letters = ["a","b","c","d","e","f","g","h","i","j"
,"k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z"]; 
text((random(letters[26])), 10, 90);
fill("black");

function draw(){
    textSize(30);
text("Please type the letters below in order",3, 20);
fill("Black");
textSize(20);
text("Your score will increase with every correct letter.", 5, 40);
fill("black");
text("It will decrease if too slow or wrong answer", 10,60); 
text("Score:", 20, 400);
fill("Black")

 var x = 0;
   text(((random(letters[26]))), random(200), random(300));
x++;
}

// function getRandomArbitrary(200, 350) {
//     return Math.random() * (350-200) +200;
// }






// var value = 0;
// function draw(letters){
//     fill(value);
//     rect(25, 25, 50, 50);
// }

// function keyPressed(){
//     if(value === 0){
//         value = 255;
//     } else{
//         value = 0;
//     }
// }