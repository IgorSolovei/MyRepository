function toStringArray(array) {
  let results = [];
  for (let value of array) {
    results.push(String(value));
  }
  return results;
}

function getAverageLengthInArray(array) {
  let sumOfLength = 0;
  let countOfElements = array.length;
  for (let i = 0; i < countOfElements; i++) {
    // if (typeof array[i] === "string") {
    //   return "String array expected!";
    // }
    sumOfLength += array[i].length;
  }

  return sumOfLength / countOfElements;
}
let strArray = toStringArray([10, 20, "hello"]);
console.log(strArray);
let average = getAverageLengthInArray(strArray);
console.log(average);