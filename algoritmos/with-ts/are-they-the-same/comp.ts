export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (!a1 || !a2) return false;

  const a1Items: { [key: number]: number } = {};

  for (const num of a1) {
    const square = num * num;
    a1Items[square] = (a1Items[square] || 0) + 1;
  }

  for (const num of a2) {
    if (!(num in a1Items)) return false;
    a1Items[num]--;
    if (a1Items[num] < 0) return false;
  }

  return true;
}

console.log(comp([], []));
