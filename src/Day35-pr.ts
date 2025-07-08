function longestContinuousSubstring(s: string): number {
    if (s.length === 0) return 0;

    let maxLength: number = 1; 
    let currentLength: number = 1;

    for (let i = 1; i < s.length; i++) {
        if (s.charCodeAt(i) === s.charCodeAt(i - 1) + 1) {
            currentLength++; 
        } else {
            currentLength = 1; 
        }

        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    return maxLength;
}

console.log(longestContinuousSubstring("aabbccdd"));  // 2
console.log(longestContinuousSubstring("dcbaabcd"));  // 4
