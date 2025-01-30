const huesCues = {
    gameName: "Hues and Cues",
    numberOfPlayers: "3-10",
    time: "over 30 minutes",
    shortDescription: "Hues and Cues is a  board game where players can use words to describe colors on the board. The game is about matching color perspective, not the actual color."
};

const loudLibrarians = {
    gameName: "Really Loud Librarians",
    numberOfPlayers: "2 or more",
    time: "20+ minutes",
    shortDescription: "Draw category cards and shout words that match the category and letter on the race track. This game turns your useless knowledge into useful points, making it one of the most fun games for gatherings."
};
const theChameleon = {
    gameName: "The Chameleon",
    numberOfPlayers: "3-8",
    time: "15 minutes",
    shortDescription: "A sneaky family board game of social deduction where players must race to catch the chameleon before It's too late."
};

const gameObject = [huesCues, loudLibrarians, theChameleon];

var promptResponse = window.prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game.");
var gameString = JSON.stringify(gameObject[promptResponse - 1]);
window.alert(gameString);