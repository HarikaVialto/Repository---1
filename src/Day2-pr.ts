function wordFrequency(str: string): { [key: string]: number } {
  // Convert string to lowercase and split it into words
  const words = str.toLowerCase().split(/\s+/);

  // Create an object to store the frequency of each word
  const frequency: { [key: string]: number } = {};

  // Iterate over the words and count their occurrences
  for (const word of words) {
    if (word) { // Ensure the word is not empty
      frequency[word] = (frequency[word] || 0) + 1;
    }
  }

  // Return the word frequency object
  return frequency;
}

const text = "Sai Hari Sai";
const result = wordFrequency(text);
console.log(result); // Output: { sai: 2, hari: 1 }
