function numberToWords(num) {
    if (num === 0) return "Zero";
  
    const belowTwelve = [
      "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", 
    ];
  
    const tens = [
      "", "", "Twenty", "Thirty", "Forty", "Fifty","sixty"
    ];
  
    const thousands = ["", "Thousand", "Million", "Billion"];
  
    function support(num, index) {
      if (num === 0) return '';
      
      if (num < 12) return belowTwelve[num - 1] + ' ' + thousands[index];
      if (num < 100) return tens[Math.floor(num / 10)] + ' ' +support(num % 10, index);
      return belowTwelve[Math.floor(num / 100) - 1] + ' Hundred ' + support(num % 100, index);
    }
  
    let result = '';
    let index = 0;
    while (num > 0) {
      if (num % 1000 !== 0) {
        result = support(num % 1000, index) + result;
      }
      num = Math.floor(num / 1000);
      index++;
    }
  
    return result.trim();
  }
  
  console.log(numberToWords(123));        // Output: "One Hundred Twenty Three"
  console.log(numberToWords(12345));      // Output: "Twelve Thousand Three Hundred Forty Five"
  console.log(numberToWords(160)); 