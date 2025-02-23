const totalRects = 10; // Total number of cards
const cols = 5; // Number of rectangles per row
const rectWidth = 125;
const rectHeight = 175;
const padding = 20; // Kerning space for rectangles
const startX = 100;
const startY = 100;
const cardDown = 'down'; // Face down cards
const cardUp = 'up'; // Face up cards
let startingX = 120;
let startingY = 200;
let cards = []; // Array for all the cards

let myRect = [];
let startingId = 0;

let gameState = {
    totalPairs: 5,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};

let cardfaceArray = [];
let cardback;
let backgroundImg;

function preload() {
    backgroundImg = loadImage('img/gamebg.png');
    cardback = loadImage('img/cardbg.png');

    cardfaceArray = [
        loadImage('img/bug.png'),
        loadImage('img/moon.png'),
        loadImage('img/snake.png'),
        loadImage('img/sun.png'),
        loadImage('img/timer.png'),
    ];
}

function setup() {
    createCanvas(1000, 600); // Adjusted canvas size
    background(0);
    image(backgroundImg, 0, 0);

    let selectedFaces = [];
    let tempArray = [...cardfaceArray];

    for (let z = 0; z < 5; z++) {
        const randomIdx = floor(random(tempArray.length));
        const face = tempArray[randomIdx];
        selectedFaces.push(face, face);
        tempArray.splice(randomIdx, 1);
    }

    selectedFaces = shuffleArray(selectedFaces);

    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < 5; i++) {
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += rectWidth + padding;
        }
        startingY += rectHeight + padding;
        startingX = 120;
    }
}

function draw() {
    background(0);
    image(backgroundImg, 0, 0);

    fill(255);
    textSize(60);
    textFont("Poppins");
    text(' Memory Game ', 250, 165);

    if (gameState.numMatched === gameState.totalPairs) {
        textSize(50);
        fill('#f6aa00');
        text('You Win!', 735, 100);
        textSize(10);
        fill('#0c204a');
        text('Refresh the page to play again!', 765, 120);
        noLoop();
    }

    for (let k = 0; k < cards.length; k++) {
        cards[k].show();
    }
    textSize(15);
    fill(255);
    text('Attempts: ' + gameState.attempts, 15, height - 30);
    text('Matches: ' + gameState.numMatched, 900, height - 30);
}

function mousePressed() {
    if (gameState.waiting) return;

    for (let k = 0; k < cards.length; k++) {
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            gameState.flippedCards.push(cards[k]);
        }
    }

    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            gameState.flippedCards.length = 0;
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            setTimeout(() => {
                gameState.flippedCards[0].flip();
                gameState.flippedCards[1].flip();
                gameState.flippedCards.length = 0;
                gameState.waiting = false;
                loop();
            }, 1000);
        }
    }
}

class Card {
    constructor(x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 120; // width
        this.height = 170; // height
        this.face = cardDown; // makes card face down
        this.cardFaceImg = cardFaceImg; // card front image
        this.isMatch = false; // is card matched?
    }

    show() {
        if (this.face === cardUp || this.isMatch) {
            fill('#ffcc00');
            rect(this.x, this.y, this.width, this.height, 10); // draws card
            image(this.cardFaceImg, this.x, this.y, this.width, this.height); // image to fit card
        } else {
            fill(255);
            rect(this.x, this.y, this.width, this.height, 10); // draws card
            image(cardback, this.x, this.y, this.width, this.height); // makes card back fit card
        }
    }

    didHit(mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip(); // flip card once click
            return true;
        }
        return false;
    }

    flip() {
        if (!this.isMatch) {
            this.face = this.face === cardDown ? cardUp : cardDown; // flips card
        }
        this.show(); // Shows the card
    }
}


function shuffleArray(array) {
    let counter = array.length;
    while (counter > 0) {
        const idx = Math.floor(Math.random() * counter);
        counter--;
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}
