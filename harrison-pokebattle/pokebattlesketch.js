function setup() {
    createCanvas(535, 535);
    background(130);
}

function pokemon(name, HP, Atk) {
    this.name = name;
    this.HP = HP;
    this.Atk = Atk;
}

//All Variables:
var poke1 = new pokemon("Blaziken", 150, 30);
var poke2 = new pokemon("Keldeo", 150, 30);
var w = 150;

// varpoke answer = HP-Atk;
// var poke1attack = poke2.HP - poke1.Atk
// var poke1miss = poke1.HP - 5

// var poke2attack = poke1.HP - poke2.Atk == poke1.HP;

// if (poke1.name + poke1attack + poke2.name) {

//     if (poke1attack == true) {
//         poke1.name + poke1attack + poke2.name;
//         return poke2.HP;
//     } else {
//         console.log(poke1.name + "missed") + poke1miss;
//     }
// }

function mouseClicked(){
  poke2.HP = poke2.HP - poke1.Atk;
  console.log(poke2.HP);
w--
}

function mousePressed(){
    rect(300,125,150,100);
     poke2.HP = poke2.HP - poke1.Atk;
  console.log(poke2.HP);
w--
}
   


function draw(){
//    rect(15,10, 500, 50);
   text("Pokemon", 15, 100);
    textSize(20);
   fill("yellow");
}
   
function draw() {
   
    fill("lime");
    rect(300, 80, 150, 25);
   
    fill("white");
    var rect1 = rect(300, 125, 150, 100);
    //3 small boxes top-bottom
    rect(465,206, 40, 40);
    text("Damage Boost", 455, 201);

    rect(465, 150,40,40);
    text("Health Boost", 455, 148);
    rect(465, 95, 40, 40);
    text("Defense Boost", 455, 95);
   
    fill("lime");
    rect(80, 175, w, 25);
    
    fill("white");
    var rect2 = rect(80, 220, 150, 100);
    rect(23, 350, 490, 170);
    
    //3 small squares top-bottom
    rect(10,200, 40, 40);
    text("Damge Boost", 2, 200);
    rect(10, 250, 40, 40);
    text("Health Boost", 2, 250);
    rect(10, 300, 40, 40);
    text("Defense Boost", 0, 300);
    
}

