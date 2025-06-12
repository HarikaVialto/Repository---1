"use strict";
function guessWord(secretWord, guess) {
    if (secretWord === guess) {
        return "Congratulations! You guessed the word!";
    }
    else {
        return "Sorry, try again!";
    }
}
const secretWord = "javascript";
const guess = "java";
console.log(guessWord(secretWord, guess)); // Output: "Sorry, try again!"
console.log(guessWord(secretWord, "javascript")); // Output: "Congratulations! You guessed the word!"
