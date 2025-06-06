"use strict";
function spamReport(message, bannedWords) {
    const bannedSet = new Set(bannedWords);
    let bannedCount = 0;
    for (const word of message) {
        if (bannedSet.has(word)) {
            bannedCount++;
            if (bannedCount >= 2)
                return true;
        }
    }
    return false;
}
console.log(spamReport(["fun", "world", "language"], ["world", "hello"])); // false
console.log(spamReport(["script", "programming", "world"], ["world", "programming"])); // true
