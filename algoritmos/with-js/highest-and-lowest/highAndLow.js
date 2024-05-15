// function highAndLow(numbers) {
//   let numbersArr = numbers.split(' ').map((number) => parseInt(number));

//   let high = Math.max(...numbersArr);
//   let low = Math.min(...numbersArr);

//   return `${high} ${low}`;
// }

// console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'));

function Well(x) {
  let count = x.find((word) => word === 'Good');
  return count;
}

console.log(Well(['Basd', 'Good', 'Etc']));
