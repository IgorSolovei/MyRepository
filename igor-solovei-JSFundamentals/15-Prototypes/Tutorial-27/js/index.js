let shape = {
  getPerimeter: function () {
    return "No arguments";
  },
  temp: 10,
};

Triangle.prototype = shape;
function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.getPerimeter = function () {
    return this.a + this.b + this.c;
  };
}
let triangle1 = new Triangle(3, 4, 5);
for (let value of Object.values(triangle1)) {
  console.log(value);
}

let square = Object.create(shape);
square.a = 10;
// let square = { a: 10 };
// square.__proto__ = shape;
square.getPerimeter = function () {
  return this.a * 4;
};

console.log(shape.getPerimeter());
console.log(triangle1.getPerimeter());
console.log(square.getPerimeter());