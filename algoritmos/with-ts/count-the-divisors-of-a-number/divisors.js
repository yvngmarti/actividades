function divisors (n) {
  let divisorNumbers = 0
  for (let i = n; i > 0; i--) {
    if (n % i === 0) divisorNumbers++
    // arr.push(i)
  }
  return divisorNumbers
  // return arr
}

console.log(divisors(12))
