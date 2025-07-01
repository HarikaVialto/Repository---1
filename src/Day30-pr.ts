function shortestSuperString(strings: string[]): string {
  if (strings.length === 0) return '';

  strings = [...strings].sort((a, b) => b.length - a.length);

  let result: string = strings[0];

  for (let i = 1; i < strings.length; i++) {
    let maxOverlap = 0;
    const current = strings[i];

    for (let j = 1; j <= current.length; j++) {
      if (result.endsWith(current.substring(0, j))) {
        maxOverlap = j;
      }
    }

    result += current.substring(maxOverlap);
  }

  return result;
}

const input: string[] = ['hari', 'harika'];
console.log(shortestSuperString(input)); // harikahari
