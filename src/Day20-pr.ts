function countSubstrings(s: string): number {
  let count = 0;
  const n: number = s.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const substring: string = s.substring(i, j + 1);
      const lastDigit: number = parseInt(substring.charAt(substring.length - 1), 10);

      if (lastDigit !== 0) {
        const num: number = parseInt(substring, 10);
        if (num % lastDigit === 0) {
          count++;
        }
      }
    }
  }

  return count;
}

console.log(countSubstrings("12168"));       // Expected: 12
console.log(countSubstrings("92961216"));    // Expected: 28
