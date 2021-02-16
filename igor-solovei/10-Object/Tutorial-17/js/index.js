const COUNT_OF_SQUARE_SIDES = 4;

const square = {
  sideLength: 10,
  getPerimeter: function () {
    return this.sideLength * COUNT_OF_SQUARE_SIDES;
  },
  getArea: function () {
    return Math.pow(this.sideLength, 2);
  },
  toString(variant) {
    let head = variant == undefined ? `` : `Square v.${variant}`;

    return `${head}
        SideLength: ${this.sideLength}
        Perimeter: ${this.getPerimeter()}
        Area: ${this.getArea()}`;
  },
};

console.log(square.toString(1));
square.sideLength = 7.5;
console.log(square.toString(2));

const copySquare = Object.assign({}, square);
copySquare.sideLength = "some text";

copySquare.getPerimeter = function () {
  if (typeof this.sideLength !== "number") {
    return "Incorrect format: sideLength should be a number";
  }
  return this.sideLength * COUNT_OF_SQUARE_SIDES;
};

copySquare.getArea = function () {
  if (typeof this.sideLength !== "number") {
    return "Incorrect format: sideLength should be a number";
  }
  return this.sideLength ** 2;
};
console.log("Copied Square");
console.log(copySquare.toString());