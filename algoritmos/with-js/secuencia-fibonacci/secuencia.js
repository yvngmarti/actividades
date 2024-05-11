/*

Se requiere una funcion a la cual se le pase un numero que represente cuantos valores del
array traera a consola

EJ:
Si se le pasa como argumento 2, en consola se imprimira => 1 1

*/

function secuenciaFibonacci(num) {
  if (num < 2) return 'Los valores ingresados deben ser mayores o iguales a 2';

  let secuencia = [1, 1];

  if (num === 2) {
    return secuencia;
  }
  for (let i = 0; i < num; i++) {
    secuencia.push(secuencia[i - 2] + secuencia[i - 1]);
  }
  //   for (let i = 1; i < num; i++) {
  //     secuencia.push(secuencia[0] + secuencia[1]);
  //   }
  return secuencia;
}

console.log(secuenciaFibonacci(3));
