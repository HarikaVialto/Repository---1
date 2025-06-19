"use strict";
function expressiveWords(S, words) {
    function isExpressive(word) {
        let i = 0;
        let j = 0;
        while (i < S.length && j < word.length) {
            if (S[i] !== word[j])
                return false;
            let countS = 0;
            const char = S[i];
            while (i < S.length && S[i] === char) {
                i++;
                countS++;
            }
            let countWord = 0;
            while (j < word.length && word[j] === char) {
                j++;
                countWord++;
            }
            if (countS < countWord)
                return false;
            if (countS < 3 && countS !== countWord)
                return false;
        }
        return i === S.length && j === word.length;
    }
    let count = 0;
    for (const word of words) {
        if (isExpressive(word)) {
            count++;
        }
    }
    return count;
}
// Example usage
const S = "heeellloooo";
const words = ["hello", "hi", "world"];
console.log(expressiveWords(S, words)); // Output: 1
