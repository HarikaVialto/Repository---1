class TrieNode {
  children: { [key: string]: TrieNode };
  isWord: boolean;

  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isWord = true;
  }

  search(word: string): TrieNode | null {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        return null;
      }
      node = node.children[char];
    }
    return node;
  }
}

function findAllConcatenatedWords(words: string[]): string[] {
  const trie = new Trie();
  const result: string[] = [];

  // Insert all words into the Trie
  for (const word of words) {
    if (word) trie.insert(word);
  }

  // Helper function to check if a word is a concatenated word
  function canForm(word: string, start = 0, count = 0): boolean {
    let node = trie.root;
    for (let i = start; i < word.length; i++) {
      const char = word[i];
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
      if (node.isWord) {
        if (i === word.length - 1) {
          return count >= 1;
        }
        if (canForm(word, i + 1, count + 1)) {
          return true;
        }
      }
    }
    return false;
  }

  // Check each word if it's a concatenated word
  for (const word of words) {
    if (word && canForm(word)) {
      result.push(word);
    }
  }

  return result;
}

const words = ["Apple", "Mango", "cherry", "AppleMango"];
console.log(findAllConcatenatedWords(words)); // Output: ['AppleMango']
