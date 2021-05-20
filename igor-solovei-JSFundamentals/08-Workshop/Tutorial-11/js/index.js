function getMinimum(...args) {
  if (args.length == 0) {
    return "No arguments";
  }

  let numbers = [];
  for (let arg of args) {
    if (typeof arg === "number") {
      numbers.push(arg);
    }
  }

  if (numbers.length == 0) {
    return "Number argument is expected";
  }

  let minEl = numbers[0];
  for (let number of numbers) {
    if (minEl > number) {
      minEl = number;
    }
  }
  return minEl;
}



console.log(getMinimum());
console.log(getMinimum([10], "value", true));
console.log(getMinimum("", 10, 110, 19, 8));
