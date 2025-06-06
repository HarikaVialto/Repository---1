function SpamReport(message: string[], bannedWords: string[]): boolean {
  const bannedSet = new Set(bannedWords);
  let bannedCount = 0;

  for (const word of message) {
    if (bannedSet.has(word)) {
      bannedCount++;
      if (bannedCount >= 2) return true;
    }
  }
  return false;
}

console.log(SpamReport(["fun", "world", "language"], ["world", "hello"])); // false
console.log(SpamReport(["script", "programming", "world"], ["world", "programming"])); // true
