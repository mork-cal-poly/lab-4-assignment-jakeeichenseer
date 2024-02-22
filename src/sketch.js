let clicked=false;

let xBlueFish=200;

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(173, 216, 230);

  drawBackground(0, 0)

  drawCreature(xBlueFish, 400, color(156, 212, 240), color(0, 89, 240))

  drawFish(200,400)

  if (clicked) {
    xBlueFish=xBlueFish+1
  }

}

function drawCreature (x, y, colorBody, colorBodyFin) {
  
  push();
      
      translate(x, y); 
  
// Back Fin
  
  fill(240, 227, 0)
  noStroke()
  triangle(-175, -150, -100, -100, -175, -50)
  
// Stripe on Back Fin
  
  fill(0, 89, 240)
  rect(-175, -105, 70, 10)
 
// Bottom Right Fin
  
  fill(240, 138, 67)
  triangle(0, -70, 100, -70, 0, 0)
  
// Bottom Left Fin
  
  fill(240, 198, 0)
  triangle(-115, -100, 0, -40, -65, -7)
  
// Top Right Fin
  
  fill(240, 158, 45)
  triangle(70, -165, 110, -110, 0, -110)
  
// Top Middle Fin
  
  fill(240, 198, 0)
  triangle(0, -200, 110, -110, -30, -110)
  
// Top Left Fin
  
  fill(240, 138, 67)
  triangle(-100, -205, 80, -110, -95, -100)
  
// Body
  
  fill(colorBody)
  ellipse(0, -100, 240, 120)
  
// Eye
  
  fill(255)
  ellipse(70, -110, 44)
  fill(0)
  ellipse(70, -110, 20)
  
// Body Fin
  
  fill(colorBodyFin)
  noStroke()
  arc(0, -100, 40, 40, 5*QUARTER_PI, PI - QUARTER_PI, PIE);

   pop();
  
}

function drawFish(x, y) {
  
  push();
      
      translate(x, y); 
  
// Back Fin
  
  fill(240, 138, 67)
  noStroke()
  triangle(-195, -175, -100, -125, -195, -75)
  
// Stripe on Back Fin
  
  fill(240, 198, 0)
  rect(-195, -130, 70, 10)
 
// Bottom Right Fin
  
  fill(240, 138, 67)
  triangle(0, -70, 100, -70, 0, 0)
  
// Bottom Left Fin
  
  fill(240, 198, 0)
  triangle(-115, -100, 0, -40, -65, -7)
  
// Top Right Fin
  
  fill(240, 158, 45)
  triangle(70, -230, 110, -190, 0, -110)
  
// Top Middle Fin
  
  fill(240, 198, 0)
  triangle(0, -260, 140, -150, -30, -110)
  fill(240, 198, 0)
  
// Top Left Fin
  
  fill(240, 138, 67)
  triangle(-100, -265, 150, -142, -95, -100)
  
// Body
  
  fill(255, 255, 100)
  ellipse(0, -130, 300, 180)
  
// Eye
  
  fill(255)
  ellipse(90, -140, 44)
  fill(0)
  ellipse(90, -140, 20)
  
// Body Fin
  
  fill(255, 165, 0)
  noStroke()
  arc(-15, -130, 100, 100, 5*QUARTER_PI, PI - QUARTER_PI, PIE);

   pop();
  
}

function drawBackground(x, y) {

  push();
  
  translate(x, y);
  
  fill(25, 25, 112)
  noStroke()
  ellipse(40, 40, 30, 30)
  
  fill(0, 0, 128)
  ellipse(150, 70, 40)
  
  fill(31, 81, 255)
  ellipse(75, 150, 20, 20)
  
  fill(25, 25, 112)
  ellipse(200, 150, 25)
  
  fill(0, 0, 128)
  ellipse(295, 190, 30)
  
  fill(31, 81, 255)
  ellipse(320, 100, 30)
  
  fill(25, 25, 112)
  ellipse(360, 300, 15)
  
  pop();
  
}

function mouseClicked()
{
  if (mouseX > 25 && mouseX < 320 && mouseY > 0 && mouseY < 195)
  clicked = !clicked;      
  

}