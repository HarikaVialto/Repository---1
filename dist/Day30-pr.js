"use strict";
function shortestSuperString(strings) {
    if (strings.length === 0)
        return '';
    strings = [...strings].sort((a, b) => b.length - a.length);
    let result = strings[0];
    for (let i = 1; i < strings.length; i++) {
        let maxOverlap = 0;
        const current = strings[i];
        for (let j = 1; j <= current.length; j++) {
            if (result.endsWith(current.substring(0, j))) {
                maxOverlap = j;
            }
        }
        result += current.substring(maxOverlap);
    }
    return result;
}
const input = ['hari', 'harika'];
console.log(shortestSuperString(input)); // Outputs: "harikahari"
