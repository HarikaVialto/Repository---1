"use strict";
function LongestChain(pairs) {
    pairs.sort((a, b) => a[1] - b[1]);
    const dp = new Array(pairs.length).fill(1);
    let maxLength = 1;
    for (let i = 1; i < pairs.length; i++) {
        for (let j = 0; j < i; j++) {
            if (pairs[j][1] < pairs[i][0]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLength = Math.max(maxLength, dp[i]);
    }
    return maxLength;
}
const pairs = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]];
console.log(LongestChain(pairs)); // 2
