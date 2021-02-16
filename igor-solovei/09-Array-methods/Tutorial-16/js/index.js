let arr = [2, 4, 6, 1];

let newArray = myMap(arr, (value) => value + 2); //[4, 6, 8, 3]
console.log(newArray);

function myMap(array, fn) {
  let result = [];

  for (let value of array) {
    result.push(fn(value));
  }

  return result;
}