
// Get the canvas and its context
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// Set up the canvas dimensions
canvas.width = 400;
canvas.height = 300;

// Define the clipping region
context.beginPath();
context.rect(50, 50, 300, 200); // A rectangle clipping area
context.clip(); // Apply the clipping region

// Draw some content
context.fillStyle = 'lightblue';
context.fillRect(0, 0, 400, 300); // Only part inside the clipping region will be visible

// Draw another shape (also clipped)
context.beginPath();
context.arc(200, 150, 100, 0, Math.PI * 2);
context.fillStyle = 'orange';
context.fill();

// Draw text (also clipped)
context.fillStyle = 'black';
context.font = '20px Arial';
context.fillText('Clipped Text!', 100, 100);








/*function setup() {
    createCanvas(200, 200);
}
function createTitle() {

    // Define the clipping region
    context.beginPath();
    context.rect(50, 50, 300, 200); // A rectangle clipping area
    context.clip(); // Apply the clipping region

    // Draw some content
    context.fillStyle = 'lightblue';
    context.fillRect(0, 0, 400, 300); // Only part inside the clipping region will be visible

    // Draw another shape (also clipped)
    context.beginPath();
    context.arc(200, 150, 100, 0, Math.PI * 2);
    context.fillStyle = 'orange';
    context.fill();

    // Draw text (also clipped)
    context.fillStyle = 'black';
    context.font = '20px Arial';
    context.fillText('Clipped Text!', 100, 100);

/*  translate(0, 0);
  fill("#212738"); //Square Color - Raisin Black
  rect(0, 0, 200, 200);
  stroke("#edf2ef"); //Line Color - Anti-Flash White
  strokeWeight("5");
  line(0, 0, 200, 200);
  line(200, 0, 0, 200);
  noStroke();
  //small circle in the middle - Bittersweet color
  fill("#f97068");// Large Color - Bittersweet
  circle(100, 50, 50);
  ellipse(200, 100, 200);
  //Little Circle in the lower right corner - Vivid Sk
  fill("#57c4e5"); //Circle Color - Vivid Sky Blue
  ellipse(200, 200, 100);
  fill("#57c4e5"); //Circle Color - Vivid Sky Blue
  fill("#d1d646"); //Circle Color - Pear - Top Left Corner
  ellipse(0, 0, 150);
  //retangle - Pear
  rect(0, 130, 160, 50);

}

function draw() {
  createTitle();
  noLoop();
}
