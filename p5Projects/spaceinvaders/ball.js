function Ball(x,y){
   this.x = x;
   this.y = y;

this.show = function(){
   fill(0, 200, 100, 50);
   ellipse(this.x, this.y,20,20);
}
this.move = function(dir){
   //this.y = this.y +dir;
   this.y +=dir;
}
}


// function ship(x,y){
//     this.x = x
//     this.y =y

//     this.show = function(){
//         fill("Red");
//         rect(this.x, this.y, 50, 50);
//     }

// this.move = funtion(dir){
//     this.y +=dir;
//     this.x +=dir;
// }
// }





// function Enemy(x, y){
//     this.x = x;
//     this.y = y; 


