export function sumTwoSmallestNumbers(numbers: number[]) {
  numbers.sort((a, b) => a - b)

  const [first, second] = numbers

  return first + second
}
