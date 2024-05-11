function descendingOrder(n) {
  if (n < 0) return 'Incorrecto';
  return parseInt(
    n
      .toString()
      .split('')
      .map((item) => parseInt(item, 10))
      .sort((a, b) => b - a)
      .join(''),
    10
  );
}

console.log(descendingOrder(1021));
