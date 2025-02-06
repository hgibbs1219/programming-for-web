let customFont;
let submitAnswerButton;
let questionInput;
let currentQuestion;
let response = '';
let responseColor = 'pink';
let heading;
let statements = [];
let message = '';
let results = []; // To store user responses and results

const questionAnswer = [
    { question: "What is the capital of Canada?", answer: "Ottawa" },
    { question: "In what capital would you find the Little Mermaid statue?", answer: "Copenhagen" },
    { question: "What Killers song has been in the UK charts for over 260 weeks since its release?", answer: "Mr. Brightside" },
    { question: "What is the name of the world's largest music streaming service?", answer: "Spotify" },
    { question: "What is the function of the cornea?", answer: "Helps the eyes focus" },
    { question: "Michael Jackson teamed up with what notable guitar player for the 1982 song Beat It?", answer: "Eddie Van Halen" }
];

// Preload the font
function preload() {
    customFont = loadFont('assets/Poppins-Regular.ttf');
}

function next() {
    if (statements.length < 1) {
        alert('You won!');
        noLoop(); // Stop the game loop when the game ends
        return null;
    }
    const randomIndex = Math.floor(Math.random() * statements.length);
    return statements[randomIndex];
}

function checkQuestion() {
    const userAnswer = questionInput.value();
    if (currentQuestion) {
        if (currentQuestion.answer.toLowerCase() === userAnswer.toLowerCase()) {
            // Remove the correct answer from the array
            statements = statements.filter(statementObj => currentQuestion.answer !== statementObj.answer);
            response = 'Correct!';
            responseColor = 'green';
            results.push({ question: currentQuestion.question, userAnswer, correct: true });
        } else {
            response = `Incorrect! Correct Answer: ${currentQuestion.answer}`;
            responseColor = 'red';
            results.push({ question: currentQuestion.question, userAnswer, correct: false });
        }
    }

    // Get the next question
    currentQuestion = next();
    if (currentQuestion) {
        message = currentQuestion.question;
    } else {
        message = ''; // Clear message if no more questions
    }

    questionInput.value(''); // Clear the input field
}

function setup() {
    createCanvas(1800, 800);
    heading = createElement('h1', 'General Trivia');
    heading.position(100, 100);

    questionInput = createInput('');
    questionInput.size(275, 16);
    questionInput.position(100, 250);

    submitAnswerButton = createButton('Submit Answer');
    submitAnswerButton.size(200, 24);
    submitAnswerButton.mousePressed(checkQuestion);
    submitAnswerButton.position(100, 275);

    // Initialize statements and pick the first question
    statements = [...questionAnswer];
    currentQuestion = next();
    if (currentQuestion) {
        message = currentQuestion.question;
    }
}

function draw() {
    drawGradientBackground();

    // Set custom font
    textFont(customFont);
    fill('#6D6A75');
    textSize(20);
    text(message, 100, 200, 600, 400); // Adjust for text wrapping

    fill(responseColor);
    text(response, 100, 350, 600, 400);

    // Display results
    displayResults();
}

function drawGradientBackground() {
    for (let y = 0; y < height; y++) {
        let inter = map(y, 0, height, 0, 1);
        let c = lerpColor(color('lightblue'), color('pink'), inter); //gradinet from light blue to pink
        stroke(c);
        line(0, y, width, y);
    }
}

function displayResults() {
    let yOffset = 400; // Start displaying results below the question/response
    textSize(16);
    for (let i = 0; i < results.length; i++) {
        const result = results[i];
        fill(result.correct ? 'green' : 'red');
        text(
            `${i + 1}. ${result.question} Your Answer: ${result.userAnswer} ${result.correct ? '(Correct)' : `(Correct Answer: ${result.correct ? '' : questionAnswer.find(q => q.question === result.question).answer})`}`,
            100,
            yOffset
        );
        yOffset += 50; // Move to the next line
    }
}
