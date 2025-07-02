"use strict";
function ShortestCompletingWord(alphabets, Words) {
    const alphabetsMap = {};
    for (let char of alphabets.toLowerCase()) {
        if (/[a-z]/.test(char)) {
            alphabetsMap[char] = (alphabetsMap[char] || 0) + 1;
        }
    }
    let result = null;
    for (let word of Words) {
        const wordMap = {};
        for (let char of word.toLowerCase()) {
            wordMap[char] = (wordMap[char] || 0) + 1;
        }
        let isValid = true;
        for (let char in alphabetsMap) {
            if (!wordMap[char] || wordMap[char] < alphabetsMap[char]) {
                isValid = false;
                break;
            }
        }
        if (isValid && (!result || word.length < result.length)) {
            result = word;
        }
    }
    return result;
}
const alphabets = "ABC";
const Words = ["abc", "bca", "cba"];
console.log(ShortestCompletingWord(alphabets, Words)); //abc
