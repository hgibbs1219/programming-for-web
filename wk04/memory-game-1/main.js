const totalRects = 10; // Number of rectangles
const cols = 5; // Rectangles per row
const rectWidth = 125;
const rectHeight = 175;
const padding = 20; // Space between rectangles
const startX = 100; // Starting X position
const startY = 100; // Starting Y position

let myRect = [];
let startingId = 0;

function setup() {
    createCanvas(1000, 600); // Adjusted canvas size
    background(0);
    fill(255);
    noStroke();

    for (let i = 0; i < totalRects; i++) {
        let col = i % cols; // Column index (wraps every 5)
        let row = Math.floor(i / cols); // Row index

        let x = startX + col * (rectWidth + padding);
        let y = startY + row * (rectHeight + padding);

        rect(x, y, rectWidth, rectHeight);
        myRect.push({ x: x + rectWidth / 2, y: y + rectHeight / 2, id: startingId }); // Store center points
        startingId++;
    }

    console.log(myRect);
}

function mousePressed() {
    for (let j = 0; j < myRect.length; j++) {
        let distance = dist(mouseX, mouseY, myRect[j].x, myRect[j].y);
        if (distance < rectWidth / 2) { // Check if clicked inside the rectangle
            console.log('Rectangle clicked:', myRect[j].id);
        }
    }
}

