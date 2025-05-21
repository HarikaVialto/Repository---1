"use strict";
function reverseOnlyLetters(s) {
    const isLetter = (char) => /[a-zA-Z]/.test(char);
    // Convert string to an array for easier manipulation
    const arr = s.split('');
    let left = 0;
    let right = arr.length - 1;
    // Swap letters using two-pointer technique
    while (left < right) {
        if (!isLetter(arr[left])) {
            left++;
        }
        else if (!isLetter(arr[right])) {
            right--;
        }
        else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    // Convert array back to string and return
    return arr.join('');
}
