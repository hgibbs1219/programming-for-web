let grid = undefined;
let hatColor = prompt("what basic color of hat for the snowman?", "black");
let scarfColor1 = prompt("pick 1 basic color for the scarf", "#4b116f");
let scarfColor2 = prompt("Pick another color for the scarf", "#ffcc00");

function setup() {
  createCanvas(1000, 800);
}

function draw() {
  // snowman legs
  fill("#f1f1f1");
  strokeWeight(20);
  stroke("#949494");
  // left leg
  ellipse(350, 650, 200);
  //right leg
  ellipse(650, 650, 200)
  //body
  ellipse(500, 450, 350, 400);
  //head
  ellipse(500, 200, 200);

  //hat body
  fill(0);
  rect(400, 40, 200, 100);
  strokeWeight(0);
  //hat brim
  stroke(hatColor);
  strokeWeight(40);
  line(400, 120, 600, 120);

  //eyes
  stroke(0);
  strokeWeight(50);
  point(425, 200);
  point(575, 200,);
  //mouth
  noFill();
  strokeWeight(10);
  arc(500, 200, 80, 80, 0, HALF_PI);

  //scarf
  strokeWeight(0);
  fill(scarfColor1);
  rect(350, 275, 300, 60);
  fill(scarfColor2);
  rect(350, 275, 50, 180);
}


