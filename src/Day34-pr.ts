function reOrganizeString(s: string): string {
    
    const charCounts: { [key: string]: number } = {};
    for (const char of s) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    
    const sortedChars: string[] = Object.keys(charCounts).sort(
        (a, b) => charCounts[b] - charCounts[a]
    );

    
    if (charCounts[sortedChars[0]] > Math.floor((s.length + 1) / 2)) {
        return "";
    }

    const result: string[] = new Array(s.length);
    let index = 0;

    for (const char of sortedChars) {
        for (let i = 0; i < charCounts[char]; i++) {
            if (index >= s.length) {
                index = 1;
            }
            result[index] = char;
            index += 2;
        }
    }

    return result.join("");
}

console.log(reOrganizeString("aab"));    // "aba"
console.log(reOrganizeString("aabb"));   // "abab"
console.log(reOrganizeString("aaabbc")); // "ababac"
console.log(reOrganizeString("a"));      // "a"
