function LongestStringChain(pairs: number[][]): number {

    pairs.sort((a, b) => a[1] - b[1]);

    const dp: number[] = new Array(pairs.length).fill(1);
    let maxLength: number = 1;

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

const pairs: number[][] = [[1, 2], [2, 3], [3, 4], [4, 5],[5,6]];
console.log(LongestStringChain(pairs)); // 3
