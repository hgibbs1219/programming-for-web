let rectX = 0;
const rectHeight = 75;
let rectY;
const rectWidth = 75;
let speed;
clickCount = 0;



function setup() {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
    speed = random(1, 3);

}

function draw() {
    background('#F8E5EE');
    drawShape();
    rectX += speed;
    console.log(rectX, width)
    if (rectX > width) {
        noLoop();
        text('Your score was ' + clickCount, 50, 100);
    }

}

function mousePressed() {
    if ((mouseX >= mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
    }

}

function drawShape() {
    fill('#9F2042');
    rect(rectX, rectY, rectWidth, rectHeight);
}

