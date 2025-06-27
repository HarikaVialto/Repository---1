"use strict";
function repeatedStringMatch(a, b) {
    let repeatedString = a;
    let repeatCount = 1;
    while (repeatedString.length < b.length) {
        repeatedString += a;
        repeatCount++;
    }
    if (repeatedString.includes(b)) {
        return repeatCount;
    }
    repeatedString += a;
    if (repeatedString.includes(b)) {
        return repeatCount + 1;
    }
    return -1;
}
let a = "hari";
let b = "harihari";
console.log("Minimum repeats:", repeatedStringMatch(a, b)); // Output: 2
