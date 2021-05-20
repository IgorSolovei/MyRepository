let numbers = [-6, 8, 2, -30, 4, 20, 11, 9, 3, -8];

let result = numbers
  .filter((currentValue) => currentValue > 0)
  .map((currentValue) => currentValue ** 3);

console.log(result);

let result1 = numbers.reduce((result, value) => {
  if (value > 0) {
    result.push(value ** 3);
  }
  return result;
}, []);