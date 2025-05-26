function compareVersion(version1: string, version2: string): number {
  const v1: number[] = version1.split('.').map(Number);
  const v2: number[] = version2.split('.').map(Number);
  const len: number = Math.max(v1.length, v2.length);

  for (let i = 0; i < len; i++) {
    const num1: number = v1[i] || 0;
    const num2: number = v2[i] || 0;
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }
  return 0;
}

console.log(compareVersion("1.0.3", "1.0.2")); // Output: 1
console.log(compareVersion("1.2.3", "1.2.3")); // Output: 0
console.log(compareVersion("1.0.3", "1.0.9")); // Output: -1
