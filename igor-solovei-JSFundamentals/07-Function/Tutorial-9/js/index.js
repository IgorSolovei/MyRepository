function getSumOfOddNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum += array[i];
    }
  }
  return sum;
}

let myArray = [3, 2, 2, 10, 5];
let value = getSumOfOddNumbers(myArray);
console.log(value);
