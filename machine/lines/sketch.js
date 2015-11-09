function setup() {
  createCanvas(800, 600);
}

function draw() {
 if (mouseX >=400 && mouseY >=300){
   stroke(232, 19, random(100, 200));
 }
 else if (mouseX<= 400 && mouseY <= 300){
   stroke(0, random(0,255), random(180, 255));
 }
 else if (mouseX<= 400 && mouseY >= 300){
   stroke(0, random(180,255), random(0, 60));
 }
 else {
   stroke(random(80, 150), 0, random(170, 255));
 }
 strokeWeight(6);
 strokeCap(ROUND);
 line(random(0, 800), random(0,650), random(0, 600), random(0,800));
 
 stroke(134, 134, 135);
 strokeWeight(4);
 strokeCap(SQUARE);
 line(random(0, 800), random(0,650), random(0, 600), random(0,800));
 
 stroke(0, 0, 0);
 strokeWeight(9);
 strokeCap(PROJECT);
 line(random(0, 800), random(0,650), random(0, 600), random(0,800));
}

function keyPressed(){
  if (keyCode == ENTER){
    background(255, 255, 255 );}
}