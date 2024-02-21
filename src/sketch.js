function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
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