const NO_ARGUMENTS_MESSAGE = "No arguments";
const NO_NUMERIC_ARGUMENTS_MESSAGE = "No numeric arguments";
function argumentMultiplicator(...params) {
  if (params.length === 0) {
    return NO_ARGUMENTS_MESSAGE;
  }
  let result = [];
  let coefficient = 100;
  for (let value of params) {
    if (typeof value === "number") {
      result.push(value * coefficient);
    }
  }
  if (result.length === 0) {
    return NO_NUMERIC_ARGUMENTS_MESSAGE;
  }
  return result;
}

console.log(argumentMultiplicator());
console.log(argumentMultiplicator("hello"));
console.log(argumentMultiplicator(9, "20", 1, 3.4, true));


/*const NO_ARGUMENTS_MESSAGE = "No arguments";
const NO_NUMERIC_ARGUMENTS_MESSAGE = "No numeric arguments";
function argumentMultiplicator(...params) {
  if (params.length === 0) {
    return NO_ARGUMENTS_MESSAGE;
  }
  let result = [];
  let coefficient = 100;
  for (let value of params) {
    if (typeof value !== "number") {
      continue;
    }
    result.push(value * coefficient);
  }
  return result.length === 0 ? NO_NUMERIC_ARGUMENTS_MESSAGE : result;
}

console.log(argumentMultiplicator());
console.log(argumentMultiplicator("hello"));
console.log(argumentMultiplicator(9, "20", 1, 3.4, true));*/
