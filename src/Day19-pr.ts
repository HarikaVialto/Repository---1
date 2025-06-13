function shortestWordDistance(
  words: string[],
  word1: string,
  word2: string
): number {
  let index1: number = -1;
  let index2: number = -1;
  let minDistance: number = Infinity;

  for (let i = 0; i < words.length; i++) {
    const word: string = words[i];

    if (word === word1) {
      index1 = i;
    }
    if (word === word2) {
      if (word1 === word2) {
        index1 = index2;
      }
      index2 = i;
    }

    if (index1 !== -1 && index2 !== -1) {
      minDistance = Math.min(minDistance, Math.abs(index1 - index2));
    }
  }

  return minDistance;
}

const word: string[] = ["the", "apple", "mango", "banana", "apple"];
const word1: string = "apple";
const word2: string = "mango";

console.log(shortestWordDistance(word, word1, word2)); // Output: 1
