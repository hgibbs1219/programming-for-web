/*
Create an array objects that represent a question and answer. 
The object should include a question property 
("question" as the key and the actual question as the value)
 and an answer property ("answer" as the key with the actual 
 answer as the value).
A random question prompt should appear when the page loads. 
The question prompt should include the value of the question. 
The user will respond with their guess.
Do not check the answer yet. Just fire an alert combining 
"You answered " and then the response and then add " 
The correct answer was " and then display the answer property 
from the object. Use concatenation to string all these strings 
together.
Upload your exercise to your MCAD hosting into an appropriate 
location and share a link to that url in this discussion. 
Ensure that URL is accessible.
*/


//Array of objects

const questionsAndAnswer = [
    {
        question: "What is the capital of Canada?",
        answer: "Ottawa",
    },
    {
        question: "In what capital would you find the Little Mermaid statue?",
        answer: "Copenhagen",
    },

    {
        question: "What Killers song has been in the UK charts for over 260 weeks since its release?",
        answer: "Mr. Brightside",
    },

    {
        question: "What is the name of the world's largest music streaming service?",
        answer: "Spotify",
    },

    {
        question: "What is the function of the cornea?",
        answer: "Helps the eyes focus",
    },

    {
        question: "Michael Jackson teamed up with what notable guitar player for the 1982 song Beat It?",
        answer: "Eddie Van Halen",
    },
];

// questionsAndAnswer` is defined and has the .length property
const randomNumber = Math.floor(Math.random() * questionsAndAnswer.length);

// Prompt the user with a random question
const answer = window.prompt(questionsAndAnswer[randomNumber].question);

// Convert the expected answer to lowercase and compare
const correctAnswer = questionsAndAnswer[randomNumber].answer.toLowerCase();

// Alert the user with their response and add correct answer
window.alert(`You Answered: ${answer}\nThe Correct Answer is: ${questionsAndAnswer[randomNumber].answer}`);
