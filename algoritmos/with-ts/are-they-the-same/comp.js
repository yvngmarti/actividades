function comp (a1, a2) {
  if (!a1 || !a2) return false

  const a1Items = {}

  for (const num of a1) {
    const square = num * num
    a1Items[square] = (a1Items[square] || 0) + 1
  }

  for (const num of a2) {
    if (!(num in a1Items)) return false
    a1Items[num]--
    if (a1Items[num] < 0) return false
  }

  return true
}

console.log(comp([1, 2, 3], [1, 4, 89]))
