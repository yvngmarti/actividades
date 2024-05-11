function maskify(cc) {
  const lastForDigits = cc.slice(-1);
  //   const maskedThing = lastForDigits.padStart(cc.length, '*');
  return lastForDigits;
}

console.log(maskify('Martin Martinez Arias'));
