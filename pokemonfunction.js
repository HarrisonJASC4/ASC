
var letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
    "Y", "Z"];

function randLetter() {
    //random letter from 26
    var randomlet = letter.length * Math.random();
    var result = Math.floor(randomlet);
    console.log(letter[result]);
    return result;
} //return letter[rand(letter.length)]

randLetter(); //gives you random letter and corresponding index


//Task: Create a function that is able to select a Random Word

function randWord() {
    var word = "";
    // Use a loop to pick 5 random letters
    for (var i=0; i<5, i++){
            //Pick a letter
     word = word + randLetter();      
    }
    return word; 
}


//Task: Random sentence

function randSentence(){
    var sentence = "";
    // Use a loop to pick 5 random words
for (var i=0; i<5; i++){
        //Pick a word
sentence = sentence + randworad()
 + " ";}
    return sentence;
}



// var firstPokemon =  ["Golurk", 124, 89];
// var secondPokemon = ["Terrakion", 129, 91];

//function pokeAttack(firstPokemon, secondPokemon)