"use strict";
function integerBreak(n) {
    if (n === 2)
        return 1;
    if (n === 3)
        return 2;
    // dp stores max product for integer i
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }
    return dp[n];
}
console.log(integerBreak(6)); // 9
