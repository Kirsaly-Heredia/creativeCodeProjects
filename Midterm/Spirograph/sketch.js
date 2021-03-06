var NUMSINES = 10; // how many of these things can we do at once?
var sines = new Array(NUMSINES); // an array to hold all the current angles
var rad; // an initial radius value for the central sine
var i; // a counter variable
var oscs = new Array(NUMSINES); // these will make sound

// play with these to get a sense of what's going on:
var fund = 0.008; // the speed of the central sine
var ratio = 2; // what multiplier for speed is each additional sine?
var alpha = 50; // how opaque is the tracing system

var trace = false; // are we tracing?

var pitches = [20 ,25 ,30 ,35 ,40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90];


function setup()
{
  createCanvas(800, 600); // OpenGL mode

  rad = height/3; // compute radius for central circle
  background(255); // clear the screen

  for (i = 0; i<sines.length; i++)
  {
    sines[i] = i*i; // start EVERYBODY facing NORTH
    oscs[i] = new p5.Oscillator(); // this initializes the oscillators
    oscs[i].setType('cosine');
    oscs[i].freq(midiToFreq(pitches[i]));
    oscs[i].amp(0.01);
    oscs[i].start();
  }
}

function draw()
{
  if (!trace) {
    background(255); // clear screen if showing geometry
    stroke(0, 255); // black pen
    noFill(); // don't fill
  } 

  // MAIN ACTION
  push(); // start a transformation matrix
  translate(width/2, height/2); // move to middle of screen

  for (i = 0; i<sines.length; i++) // go through all the sines
  {
    oscs[i].amp((sin(sines[i])*2.-1.)*.1);
    var erad = 5; // radius for small "point" within circle... this is the 'pen' when tracing
    // setup for tracing
    if (trace) {
      stroke(255*(float(i)/sines.length), 0, 0, alpha); // red
      fill(255, 0, 0, alpha/2); // also, um, red
      erad = 5.0*(1.0-float(i)/sines.length); // pen width will be related to which sine
    }
    var radius = rad/(i+1); // radius for circle itself
    rotate(sines[i]); // rotate circle
    if (!trace) ellipse(0, 0, radius*2, radius*2); // if we're simulating, draw the sine
    push(); // go up one level
    translate(0, radius); // move to sine edge
    if (!trace) ellipse(0, 0, 5, 5); // draw a little circle
    if (trace) ellipse(0, 0, erad, erad); // draw with erad if tracing
    pop(); // go down one level
    translate(0, radius); // move into position for next sine
    sines[i] = (sines[i]+(fund+(fund*i*ratio)))%TWO_PI; // update angle based on fundamental
  }
  
  pop(); // pop down final transformation
  
}

function keyReleased()
{
  if (key==' ') {
    trace = !trace; 
    background(255);
  }
}

