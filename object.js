var charizardarray = ["Blaze", 266, false, ["Fire", "Flying"]];
var charizardobject = {
    "attack":"Blaze",
    "HP": 266,
    "Legendary": false,
    "Types": [ "Fire", "Flying"],
};


var gucciarray   = ["Gucci", "Flip-FLops", ["Green","Red",  "White"], 10.5, "$300"];
var gucciobject = {
    "Brand": "Gucci",
    "Model": "Flip-Flops",
    "Color": ["Green", "Red", "White"],
    "Size": 10.5,
    "Price": 300,
}

function Shoe(model, brand){
    this.model = model;
    this. brand = brand;
}
var boosts = new Shoe("Yeezy Boost 350");
var stans = new Shoe("Stan Smiths");

function SuperHero(RealName, heroname, superpower){
this.RealName = RealName;
this.superpower = superpower;
this.heroname = heroname;
this.talk = function(){
    console.log("Hi, my name is" + heroname);
}
}
var superman = new SuperHero("Clark Kent", "Superman", ["Flying", "Super-Strength", "Heat Vision"]);
var spiderman = new SuperHero("Peter Parker", "Spiderman", ["Spidey-Sense", "Web-Slinging", "Super-Strength"]);
