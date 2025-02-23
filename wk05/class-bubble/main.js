let boxes = []; // Array to store multiple instances of the class

class Box {
    constructor(x, y, w, h, speed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = speed;
    }

    render() {
        stroke(255);
        noFill();
        rect(this.x, this.y, this.w, this.h);
    }

    move() {
        this.y += this.speed;
        if (this.y > height) {
            this.y = 0; // Reset position when it reaches the bottom
        }
    }
}

function setup() {
    createCanvas(500, 500);

    // Create multiple instances of the Box class
    for (let i = 0; i < 10; i++) {
        let x = random(width);
        let y = random(height);
        let w = random(30, 60);
        let h = random(30, 60);
        let speed = random(1, 3);
        boxes.push(new Box(x, y, w, h, speed));
    }
}

function draw() {
    background(0);

    // Loop through all box instances and update their position
    for (let box of boxes) {
        box.render();
        box.move();
    }
}
