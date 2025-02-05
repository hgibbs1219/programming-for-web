/*
let Pear = #D1D646
let Raisin Black = #243b4a
let Bittersweet= #F97068
let Anti-Flash White= #EDF2EF
let Vivid Sky Blue= #57C4E5 */

function setup() {
    createCanvas(600, 600);
    noLoop(); // Prevents continuous looping of draw()
}

function createTitle(originX, originY, primaryColor, smCircle, smCircle2, lgCircle, rectColor) {
    push(); // Save the current state of transformations and styles
    translate(originX, originY);

    // Draw main rectangle
    fill(primaryColor); // Square Color
    noStroke();
    rect(0, 0, 200, 200);

    // Draw diagonal lines
    stroke("#edf2ef"); // Line Color - Anti-Flash White
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);

    // Small circle in the middle
    noStroke();
    fill(smCircle); // Small circle color - Bittersweet
    circle(100, 50, 50);

    // Large circle
    fill(lgCircle); // Large Circle Color
    circle(200, 50, 200);

    // Little circle in the lower right corner
    fill(smCircle2); // Circle Color - Vivid Sky Blue
    ellipse(200, 200, 100);

    // Top-left corner circle
    fill('white'); // Circle Color - White
    ellipse(0, 0, 150);

    // Rectangle at the bottom
    fill(rectColor); // Rectangle Color - Pear
    rect(0, 130, 160, 50);

    pop(); // Restore the previous state
}

function draw() {
    // Row 1
    createTitle(0, 0, "#243b4a", "#57C4E5", '#EDF2EF', 'pink', "#D1D646"); // Raisin Black BG
    createTitle(200, 0, "#57C4E5", "#d1d646", '#EDF2EF', 'pink', "#F97068"); // Sky Blue BG
    createTitle(400, 0, "#F97068", "#243b4a", "#EDF2EF", 'pink', "#D1D646"); // Bittersweet BG

    // Row 2
    createTitle(0, 200, "#57C4E5", "#d1d646", '#EDF2EF', 'pink', "#F97068"); // Sky Blue BG
    createTitle(200, 200, "#F97068", "#243b4a", "#EDF2EF", 'pink', "#D1D646"); // Bittersweet BG
    createTitle(400, 200, "#D1D646", "#F97068", "#EDF2EF", 'pink', "#57C4E5"); // Pear BG


    // Row 3
    createTitle(0, 400, "#F97068", "#243b4a", "#EDF2EF", 'pink', "#D1D646"); // Bittersweet BG
    createTitle(200, 400, "#D1D646", "#F97068", "#EDF2EF", 'pink', "#57C4E5"); // Pear BG
    createTitle(400, 400, "#243b4a", "#57C4E5", '#EDF2EF', 'pink', "#D1D646"); // Raisin Black BG

}

