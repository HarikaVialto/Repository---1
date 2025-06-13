"use strict";
function shortestWordDistance(words, word1, word2) {
    let index1 = -1;
    let index2 = -1;
    let minDistance = Infinity;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word === word1) {
            index1 = i;
        }
        if (word === word2) {
            if (word1 === word2) {
                index1 = index2;
            }
            index2 = i;
        }
        if (index1 !== -1 && index2 !== -1) {
            minDistance = Math.min(minDistance, Math.abs(index1 - index2));
        }
    }
    return minDistance;
}
const word = ["the", "apple", "mango", "banana", "apple"];
const word1 = "apple";
const word2 = "mango";
console.log(shortestWordDistance(word, word1, word2)); // Output: 1
