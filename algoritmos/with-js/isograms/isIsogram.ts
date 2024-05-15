export function isIsogram(str: string): boolean {
  str = str.toLowerCase();

  if (str.length === 0 || str.length === null) return false;

  let seenChars = new Set();
  for (const char of str) {
    if (seenChars.has(char)) return false;

    seenChars.add(char);
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i]) return false;
  }
  return true;
}

// Test cases
console.log(isIsogram('Dermatoglyphics')); // Expected output: true
console.log(isIsogram('aba')); // Expected output: false
console.log(isIsogram('moOse')); // Expected output: false
console.log(isIsogram('')); // Expected output: true

// console.log(isIsogram('Dermatoglyphics'));
