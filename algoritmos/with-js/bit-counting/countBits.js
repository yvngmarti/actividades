// var countBits = function (n) {
//   let numbers = []
//   let bits = 0

//   if (n === 0) return 0

//   while (n > 0) {
//     numbers.unshift(n % 2)
//     n = Math.floor(n / 2)
//   }

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 1) bits++
//   }

//   return bits
// }

// const countBits = n => {
//   const binaryString = n.toString(2)
//   let count = 0
//   for (let i = 0; i < binaryString.length; i++) {
//     if (binaryString[i] === '1') {
//       count++
//     }
//   }
//   return count
// }

var countBits = function (n) {
  let count = 0
  let numbers = n.toString(2)

  if (n === 0) return 0

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === '1') count++
  }

  return count
}

console.log(countBits(2))
