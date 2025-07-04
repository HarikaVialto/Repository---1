"use strict";
function LongestIncreasingSubsequence(sequence) {
    const dp = new Array(sequence.length).fill(1);
    let maxLength = 1;
    for (let i = 1; i < sequence.length; i++) {
        for (let j = 0; j < i; j++) {
            if (sequence[i] > sequence[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLength = Math.max(maxLength, dp[i]);
    }
    return maxLength;
}
const sequence = [2, 5, 8, 10, 20, 30];
console.log(LongestIncreasingSubsequence(sequence)); // 6
