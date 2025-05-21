function integerToRoman(num) {
  const romanValues = [
   { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  let result = '';
  for (const { value, symbol } of romanValues) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}
console.log(integerToRoman(58));    // Output: "LVIII"
console.log(integerToRoman(19));  // Output: "XIX"
console.log(integerToRoman(90));  // Output: "XC"
