function persistence(num) {
  let numeroCondicional = 1;
  numeros = num
    .toString()
    .split('')
    .map((n) => parseInt(n, 10));

  for (let i = 0; i < numeros.length; i++) {
    numeroCondicional *= numeros[i];
  }

  if (numeroCondicional.toString().length === 1) return numeroCondicional;
  else {
    console.log('hola');
    console.log(numeroCondicional);
    persistence(numeroCondicional);
  }
}

console.log(persistence(35));
