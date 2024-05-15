function sumTwoSmallestNumbers (numbers) {
  numbers.sort((a, b) => a - b)

  const [first, second] = numbers

  return first + second
}

console.log(sumTwoSmallestNumbers([1, 2, 3, 4]))
