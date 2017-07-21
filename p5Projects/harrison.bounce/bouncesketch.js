// X = 180;
// Y = 180;



// function setup(){
//     createCanvas (500,500);
//     background(50);
//     ellipse(250, 250, 100, 100);
//     ellipse(mouseX, mouseY, 100, 100);
//     fill("white");
// }

var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10;


function setup() {
  createCanvas(500, 400);
  background (25);
  noStroke();

}

function draw() {
	//distance from center of the screen
	var d = dist(30, 30, 40, 40);
    background(50);
  	fill (random(200, 250), random(200, 250), random(200, 250));
  	ellipse (x, y, d, d);
    rect(mouseX, 360, 100, 20)

if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
}
if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    dy = -dy;
0}

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	 if (x > 480 || x < 0)  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

  	if (y > 380 || y < 0) {
	 	  yspeed = -yspeed;



      }

}



function paddle(x, y,width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = heigth;
    this.x_speed = 0;
    this.y_speed = 0;
}
