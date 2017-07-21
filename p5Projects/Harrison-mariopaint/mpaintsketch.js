var col = "black";

function setup() {
    createCanvas(500, 500);
    background(130);

    fill ("green")
    rect(0, 0, 500, 30);
    fill ("blue")
    rect(0, 30, 500, 30);
    fill("yellow");
    rect(0, 60, 500, 30);
}

// Drag the mouse across the page
// to change its value

var value = 0;
var rainbow = ["gold", "purple ", "blue", "red"];
//var drawshape = [triangle(mouseX, mouseY, 120, 105), ellipse(mouseX, mouseY, 120, 105 ) ];
function mouseDragged() {
    fill(random(rainbow));
    random(rect(mouseX, mouseY, 120, 105), ellipse(mouseX, mouseY, 120, 105 ) ); 
ellipse(mouseX, mouseY, rand(100), rand(100));
rect(mouseX, mouseY, rand(100), rand(100));
  
  
//    rect(mouseX, mouseY, 120, 105);
//   ellipse(mouseX, mouseY, 120, 105 );

function mousePressed(){
    if (mouseY<31) {
        col = "green";
    }else if (mouseY > 30 && mouseY < 61){
        col = "blue";
       } else if (mouseY > 60 && mouseY < 91){
            col = "yellow";
        }
}

//   value = value + 5;
//   if (value > 255) {
//     value = 0;
//   }
}

// function random(mouseDragged){
//     for (var i = 0; i < 100; i++) {
//   var ranf = random(50);
//   stroke(r*5);
//   fill("red");
//   rect(mouseX, mouseY, 115, 165);
//   line(50, i, 50+r, i);}

// fill(rand("red"))

// }