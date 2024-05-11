/*
    9119 --> 811181
*/

function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split('')
      .map((num) => parseInt(num, 10) * num)
      .join(''),
    10
  );
}

console.log(squareDigits(91199));
