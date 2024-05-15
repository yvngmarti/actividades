function validatePin (pin) {
  if (pin.length === 4 || pin.length === 6) {
    if (/^\d+$/.test(pin)) {
      return true
    } else {
      return false
    }
  }
  return false
}

console.log(validatePin('a123'))
console.log(typeof ('a123'))
