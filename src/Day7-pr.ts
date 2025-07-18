function coinChange(coins: number[], amount: number): number {
    const dp: number[] = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === amount + 1 ? -1 : dp[amount];
}

const coins: number[] = [1, 2, 6];
const amount: number = 12;

console.log(coinChange(coins, amount)); // Output: 2
