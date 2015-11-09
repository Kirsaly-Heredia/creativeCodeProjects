
var x, y; // some variables for the current position of the turtle
var currentangle = 270; // we start out facing north
var step = 20; // how many pixels do we move forward when we draw?
var angle = 90; // how many degrees do we turn with '+' and '-'
var directions = "To change colors: e = red, o = orange, y = yellow, g = green, a = blue, p = purple, n = black, and w = white";
var r = 0;
var g = 0;
var b = 0;

function setup(){
  createCanvas(800, 700);
  background(255);
      // start our turtle in the middle of the screen
  x = width/2;
  y = height/2;
  text(directions, 10, 20);
}

function draw(){
  
  
  // draw the stuff:
  fill(r,g,b);
  stroke(255,255,255);
  ellipse(x, y, 20, 20); // circle that chases the mouse
}

function keyTyped(){
  console.log(key); // what key did we type?
  
  if(key=='f'){ // draw forward
    // polar to cartesian transformation based on step and currentangle:
    var x1 = x + step*cos(radians(currentangle));
    var y1 = y + step*sin(radians(currentangle));
      // update the turtle's position:
    x = x1;
    y = y1;
  }
  else if(key=='b'){ // draw backward
    // polar to cartesian transformation based on step and currentangle:
    var x1 = x - step*cos(radians(currentangle));
    var y1 = y - step*sin(radians(currentangle));
      // update the turtle's position:
    x = x1;
    y = y1;
  }
  else if(key=='r'){
   currentangle+=angle; // turn right
  }
  else if(key=='l'){
   currentangle-=angle; // turn left
  }
  //key to change color of the circle
  if(key=='e'){
   r = 255; //red
   g = 0;
   b = 0;
  }
  else if(key=='o'){
   r = 255; //orange
   g = 153;
   b = 51;
  }
  else if(key=='y'){
   r = 255; //yellow
   g = 255;
   b = 0;
  }
  else if(key=='g'){
   r = 0; //green
   g = 255;
   b = 0;
  }
  else if(key=='a'){
   r = 0; //blue
   g = 0;
   b = 255;
  }
  else if(key=='p'){
   r = 102; //purple
   g = 102;
   b = 204;
  }
  else if(key=='n'){
   r = 0; //black
   g = 0;
   b = 0;
  }
  else if(key=='w'){
   r = 255; //white
   g = 255;
   b = 255;
  }
  
}

