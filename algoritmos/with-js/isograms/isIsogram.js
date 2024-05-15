function isIsogram(str) {
  str = str.toLowerCase();

  if (str.length === 0) return true;

  let seenChars = new Set();
  for (const char of str) {
    if (seenChars.has(char)) return false;

    seenChars.add(char);
  }
  return true;
}

// Test cases
console.log(isIsogram('Dermatoglyphics')); // Expected output: true
console.log(isIsogram('aba')); // Expected output: false
console.log(isIsogram('moOse')); // Expected output: false
console.log(isIsogram('')); // Expected output: true

// console.log(isIsogram('Dermatoglyphics'));
