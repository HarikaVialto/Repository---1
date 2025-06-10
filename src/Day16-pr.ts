function minimumSwap(s1: string, s2: string): number {
    let xy = 0, yx = 0;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === 'x' && s2[i] === 'y') xy++;
        else if (s1[i] === 'y' && s2[i] === 'x') yx++;
    }

    const total = xy + yx;
    if (total % 2 !== 0) return -1;

    // Each pair of xy or yx mismatches needs 1 swap
    return Math.floor(xy / 2) + Math.floor(yx / 2) + (xy % 2) * 2;
}

console.log(minimumSwap("xx", "yy")); // Output: 1
console.log(minimumSwap("xy", "yx")); // Output: 2
console.log(minimumSwap("xx", "xy")); // Output: -1
