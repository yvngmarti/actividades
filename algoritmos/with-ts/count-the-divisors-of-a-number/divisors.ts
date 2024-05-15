export function divisors(n: number) {
  let divisorNumbers: number = 0;
  for (let i = n; i > 0; i--) {
    if (n % i === 0) divisorNumbers++;
  }
  return divisorNumbers;
}
