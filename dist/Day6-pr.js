"use strict";
function compareVersion(version1, version2) {
    const v1 = version1.split('.').map(Number);
    const v2 = version2.split('.').map(Number);
    const len = Math.max(v1.length, v2.length);
    for (let i = 0; i < len; i++) {
        const num1 = v1[i] || 0;
        const num2 = v2[i] || 0;
        if (num1 > num2)
            return 1;
        if (num1 < num2)
            return -1;
    }
    return 0;
}
console.log(compareVersion("1.0.3", "1.0.2")); // Output: 1
console.log(compareVersion("1.2.3", "1.2.3")); // Output: 0
console.log(compareVersion("1.0.3", "1.0.9")); // Output: -1
