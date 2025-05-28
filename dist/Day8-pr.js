"use strict";
function reverseVowels(s) {
    const vowels = 'aeiouAEIOU';
    let arr = s.split('');
    let left = 0, right = arr.length - 1;
    while (left < right) {
        if (!vowels.includes(arr[left])) {
            left++;
        }
        else if (!vowels.includes(arr[right])) {
            right--;
        }
        else {
            // Swap vowels
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join('');
}
console.log(reverseVowels("Good Morning")); // Output: "Giod Mornong"
console.log(reverseVowels("Hello World")); // Output: "Hollo Werld"
