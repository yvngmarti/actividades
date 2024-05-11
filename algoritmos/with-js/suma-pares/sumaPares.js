/*
Realiza una funcion que tome un array como argumento y devuelva la
suma de los pares de este
*/

// Esta funcion me regresa simplemente la suma de los elementos pares del array
// Forma imperativa
const sumaParesImperativo = (arr) => {
  let suma = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      suma += arr[i];
    }
  }
  return suma;
};
// Forma declarativa
const sumaParesDeclarativo = (arr) => {
  let suma = 0;
  arr.filter((n) => n % 2 === 0).forEach((n) => (suma += n));
  return suma;
};

//Esta suma me devuelve los elementos pares del array en otro array

console.log(sumaParesDeclarativo([1, 2, 3, 4]));
