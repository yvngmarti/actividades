function convertirABinario (num) {
  // console.time()
  // const binario = []
  // for (let i = num - 1; i >= 0; i--) {
  //   if (num % 2 > 0) binario.push(1)
  //   if (num % 2 === 0) binario.push(0)
  //   num /= 2
  //   if (num < 1) break
  // }
  // // console.timeEnd()
  // return parseInt(binario.reverse().join(''), 10)

  return parseInt(num.toString(2))
}

console.log(convertirABinario(3300))

// OTRA FORMA DE RESOLVERLO MAS SENCILLA Y EFICIENTE

// function nuevaConversion(num) {
//   console.time();
//   const binario = [];
//   if (num === 0) return 0;

//   while (num > 0) {
//     binario.unshift(num % 2);
//     num = Math.floor(num / 2);
//   }
//   console.timeEnd();
//   return parseInt(binario.join(''), 10);
// }

// console.log(nuevaConversion(8));
