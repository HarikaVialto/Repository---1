function sortVowels(s: string): string {
  const vowels = 'aeiouAEIOU';
  const vowelChars: string[] = [...s].filter(c => vowels.includes(c)).sort();
  let vowelIndex = 0;

  return [...s].map(c => {
    if (vowels.includes(c)) {
      return vowelChars[vowelIndex++];
    }
    return c;
  }).join('');
}

console.log(sortVowels("wElcOME")); // Output: "wElcEMO"
console.log(sortVowels("EducATION")); // Output: "AdEcITOuN"
