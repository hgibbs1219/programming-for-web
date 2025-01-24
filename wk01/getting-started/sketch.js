
//prompt
let mode = window.prompt("Dark or Light Mode?").toLowerCase();

function setup() {
  createCanvas(1200, 1200);
  background("pale yellow") //Rich Black
}
//Dark Mode
if (mode === "dark") {

  function draw() {
    if (mouseIsPressed) {
      fill(70, 129, 137);//Teal
    }
    else {
      fill(49, 89, 94); //Dark Slate Gray
    }
    {
      ellipse(mouseX, mouseY, 180, 180);
    }
  }
}

if (mode === "light") {
  function draw() {
    if (mouseIsPressed) {
      fill(244, 233, 205);//Parchment
    }
    else {
      fill(119, 172, 162);//Cambridge Blue
    }
    {
      ellipse(mouseX, mouseY, 150, 150);
    }

  }
}

