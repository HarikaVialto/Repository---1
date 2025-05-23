"use strict";
function countAndSay(n) {
    let result = '1'; // Starting point of the sequence
    for (let i = 1; i < n; i++) {
        let current = '';
        let count = 1;
        // Iterate through the current result to generate the next term
        for (let j = 1; j < result.length; j++) {
            if (result[j] === result[j - 1]) {
                count++; // Increment count if the current digit is the same as the previous
            }
            else {
                current += count + result[j - 1]; // Append count and digit to the current term
                count = 1; // Reset count for the new digit
            }
        }
        current += count + result[result.length - 1]; // Append the last group of digits
        result = current; // Update result for the next iteration
    }
    return result;
}
console.log(countAndSay(1)); // Output: "1"
console.log(countAndSay(4)); // Output: "1211"
