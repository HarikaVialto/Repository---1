
function repeatedStringMatch(a: string, b: string): number {
    let repeatedString: string = a;
    let repeatCount: number = 1;

    while (repeatedString.length < b.length) {
        repeatedString += a;
        repeatCount++;
    }

    
    if (repeatedString.includes(b)) {
        return repeatCount;
    }

    
    repeatedString += a;
    if (repeatedString.includes(b)) {
        return repeatCount + 1;
    }


    return -1;
}


let a: string = "hari";
let b: string = "harihari";

console.log("Minimum repeats:", repeatedStringMatch(a, b));  // Output: 2
