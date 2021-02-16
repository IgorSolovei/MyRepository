function createBuffer() {
  let text = "";
  return function buffer() {
    if (arguments.length > 0) {
      text += arguments[0];
    } else {
      return text;
    }
  };
}

let buffer = createBuffer();
buffer("A");
buffer("XYZ");
console.log(buffer()); 