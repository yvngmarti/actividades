export class Kata {
  static validatePin(pin: string): boolean {
    if (pin.length === 4 || pin.length === 6) {
      if (/^\d+$/.test(pin)) { return true } else { return false }
    }
    return false
  }
}
