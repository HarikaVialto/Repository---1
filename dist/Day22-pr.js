"use strict";
function maxProduct(words) {
    const n = words.length;
    const masks = new Array(n).fill(0);
    // Create bitmasks for words
    for (let i = 0; i < n; i++) {
        for (const char of words[i].toLowerCase()) {
            const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
            if (charCode >= 0 && charCode < 26) {
                masks[i] |= 1 << charCode;
            }
        }
    }
    let maxProduct = 0;
    // Compare each pair of words
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((masks[i] & masks[j]) === 0) {
                const product = words[i].length * words[j].length;
                maxProduct = Math.max(maxProduct, product);
            }
        }
    }
    return maxProduct;
}
const words = ["Apple", "Banana", "cherry"];
console.log(maxProduct(words)); // Output: 36
