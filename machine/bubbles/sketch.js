function setup() {
  createCanvas(700, 600);
}

function draw() {
  if(mouseY <= 150){
    fill( 255, random(0,130), 0,random(0,100));
  }//red orange
   
  else if(mouseY <= 250 ){
    fill( random(240, 255), random(180,255),random(0,100), random(0, 100));
  }//orange yellow
     
  else if(mouseY <= 350 ){   
    fill( 0, random(180,255), random(0, 60),random(0,100));
  }//greens

  else if(mouseY <= 450 ){ 
    fill( 0, random(0,255), random(180, 255),random(0,100));
  }//blues

  else if(mouseY <= 550 ){
    fill( random(80, 150), 0, random(170, 255),random(0,100));
  }//purples

  else {
    fill( 255, 0, random(100, 200), random(0,100));
  }//pinks
   
  ellipse(mouseX, mouseY, random(20, 70), random( 20, 70));
 
}

function keyPressed(){
  if (keyCode == ENTER){
    background(255, 255, 255 );}
}