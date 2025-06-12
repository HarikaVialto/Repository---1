function guessWord(secretWord: string, guess: string): string 
{
    if (secretWord === guess)
         {
        return "Congratulations! You guessed the word!";
    } 
    
    else
     {
        return "Sorry, try again!";
    }
}

const secretWord: string = "javascript";
const guess: string = "java";

console.log(guessWord(secretWord, guess));           // Output: "Sorry, try again!"
console.log(guessWord(secretWord, "javascript"));    // Output: "Congratulations! You guessed the word!"
