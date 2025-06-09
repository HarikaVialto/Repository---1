"use strict";
function sortVowels(s) {
    const vowels = 'aeiouAEIOU';
    const vowelChars = [...s].filter(c => vowels.includes(c)).sort();
    let vowelIndex = 0;
    return [...s].map(c => {
        if (vowels.includes(c)) {
            return vowelChars[vowelIndex++];
        }
        return c;
    }).join('');
}
console.log(sortVowels("wElcOME")); // Output: "wElcEMO"
console.log(sortVowels("EducATION")); // Output: "AdEcITOuN"
