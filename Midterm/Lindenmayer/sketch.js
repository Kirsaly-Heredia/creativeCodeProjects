// TURTLE STUFF:
var x, y; // the current position of the turtle
var currentangle = 0; // which way the turtle is pointing
var step = 60; // how much the turtle moves with each 'f'
var angle = 40; // how many degrees do we turn with 'l' and 'r'

// LINDENMAYER STUFF (L-SYSTEMS)
var tri = 'fffffrrrffffrrrffffrrrr';
var ninetri = tri+tri+tri+tri+tri+tri+tri+tri+tri;
var pattern = ninetri + 'c';
var thestring = pattern; // "axiom" or start of the string

var whereinstring = 0; // where in the L-system are we drawing right now?

var r = 0;
var g = 0;
var b = 0;

function setup()
{
  createCanvas(700, 600);
  background(255);
  strokeWeight(10);
  
  // start of turtle
  x = width/2;
  y = 3*height/8;
}

function draw()
{
  stroke(r, g, b);
  // draw the current character in the string:
  drawIt(thestring.charAt(whereinstring)); 
  
  // increment the point for where we're reading the string.
  // wrap around at the end.
  whereinstring++;
  if(whereinstring>thestring.length-1) whereinstring = 0;
}

function drawIt(k){
  if(k=='f'){ // draw forward
    // polar to cartesian transformation based on step and currentangle:
    var x1 = x + step*cos(radians(currentangle));
    var y1 = y + step*sin(radians(currentangle));
    line(x, y, x1, y1); // connect the old and the new
    // update the turtle's position:
    x = x1;
    y = y1;
  }
  if(k=='b'){ // draw backward
    // polar to cartesian transformation based on step and currentangle:
    var x1 = x - step*cos(radians(currentangle));
    var y1 = y - step*sin(radians(currentangle));
    line(x, y, x1, y1); // connect the old and the new
    // update the turtle's position:
    x = x1;
    y = y1;
  }
  else if(k=='r'){
   currentangle+=angle; // turn right
  }
  else if(k=='l'){
   currentangle-=angle; // turn left   
  }
  if(k=='c'){//changes color of pattern
   r = random(0,255);
   g = random(0,255);
   b = random(0,255);
  }
  
}