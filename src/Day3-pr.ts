
 
function reverseOnlyLetters(s: string): string {
  const isLetter = (char: string): boolean => /[a-zA-Z]/.test(char);

  // Convert string to an array for easier manipulation
  const arr = s.split('');
  let left = 0;
  let right = arr.length - 1;

  // Swap letters using two-pointer technique
  while (left < right) {
    if (!isLetter(arr[left])) {
      left++;
    } else if (!isLetter(arr[right])) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  // Convert array back to string and return
  return arr.join('');
}
console.log(reverseOnlyLetters("ab-cd")); // Output: "dc-ba"
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); // Output: "j-Ih-gfE-dCba"
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!")); // Output: "Qedo1ct-eeLg=ntse-T!"

