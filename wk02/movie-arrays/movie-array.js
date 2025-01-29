
//Making the array
const myMovies = ["Wicked", "Tag", "Thor", "She's the Man", "Legally Blonde"];
console.log("My favorite movies are:", myMovies);

//adding the user's movie pick
const yourMovie = window.prompt("What is your favorite movie?");

myMovies.push(yourMovie);

console.log(myMovies.toString());
console.log("These are our favorite movies:", myMovies.toString());