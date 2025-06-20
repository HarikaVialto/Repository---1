"use strict";
function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid; // peak is on the left side
        }
        else {
            left = mid + 1; // peak is on the right side
        }
    }
    return left;
}
const nums = [12, 16, 8, 20];
console.log(findPeakElement(nums)); // 1 
