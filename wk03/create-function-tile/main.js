function setup() {
    createCanvas(200, 200);
}
function createTitle() {
    translate(0, 0);
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
    //retangle
    rect(0, 130, 160, 50);









}

function draw() {
    createTitle();
}
