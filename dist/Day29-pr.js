"use strict";
function magicalString(n) {
    if (n === 0)
        return 0;
    if (n <= 3)
        return 1;
    const s = [1, 2, 2];
    let i = 2;
    let num = 1;
    while (s.length < n) {
        const count = s[i];
        for (let j = 0; j < count; j++) {
            s.push(num);
        }
        num = 3 - num;
        i++;
    }
    let oneCount = 0;
    for (let k = 0; k < n; k++) {
        if (s[k] === 1)
            oneCount++;
    }
    console.log('Magical String (first', n, 'digits):', s.slice(0, n).join(''));
    console.log('Number of 1s in first', n, 'digits:', oneCount);
    return oneCount;
}
magicalString(20);
