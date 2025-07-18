function longestAwesomeSubstring(s: string): number {
    let maxLength: number = 1;
    const n: number = s.length;

    for (let start = 0; start < n; start++) {
        for (let end = start; end < n; end++) {
            const substring: string = s.substring(start, end + 1);

            if (isAwesome(substring)) {
                if (substring.length > maxLength) {
                    maxLength = substring.length;
                }
            }
        }
    }

    return maxLength;
}

function isAwesome(substring: string): boolean {
    if (substring.length === 0) return false;

    const counts: { [char: string]: number } = {};

    for (let char of substring) {
        counts[char] = (counts[char] || 0) + 1;
    }

    let oddCount: number = 0;

    for (let char in counts) {
        if (counts[char] % 2 !== 0) {
            oddCount++;
        }
    }

    return oddCount <= 1;
}

console.log(longestAwesomeSubstring("1232344"));     // Output: 7
console.log(longestAwesomeSubstring("987654321"));   // Output: 1
console.log(longestAwesomeSubstring("12168"));       // Output: 3
console.log(longestAwesomeSubstring("92981"));       // Output: 3
console.log(longestAwesomeSubstring("000"));         // Output: 3
console.log(longestAwesomeSubstring(""));            // Output: 1
