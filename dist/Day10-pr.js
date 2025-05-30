"use strict";
function totalHammingDistance(nums) {
    let totalDistance = 0;
    const n = nums.length;
    // Iterate over each bit position (0 to 31)
    for (let i = 0; i < 32; i++) {
        let countOnes = 0;
        // Count how many numbers have a 1 at the i-th bit position
        for (let num of nums) {
            if ((num >> i) & 1) {
                countOnes++;
            }
        }
        // The number of 0s at the i-th bit position is (n - countOnes)
        const countZeros = n - countOnes;
        // Each differing pair at this bit position contributes 1 to the total Hamming distance
        totalDistance += countOnes * countZeros;
    }
    return totalDistance;
}
const nums = [5, 12, 7];
console.log(totalHammingDistance(nums)); // Output: 6
