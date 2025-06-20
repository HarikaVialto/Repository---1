function findPeakElement(nums: number[]): number {
    let left: number = 0;
    let right: number = nums.length - 1;

    while (left < right) {
        const mid: number = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            right = mid; // peak is on the left side
        } else {
            left = mid + 1; // peak is on the right side
        }
    }

    return left; 
}

const nums: number[] = [12, 16, 8, 20];
console.log(findPeakElement(nums)); // 1 
