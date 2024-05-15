export function createPhoneNumber(numbers: number[]): string {
    const [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10] = numbers;
  
    return `(${n1}${n2}${n3}) ${n4}${n5}${n6}-${n7}${n8}${n9}${n10}`;
  }
  
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => "(123) 456-7890"