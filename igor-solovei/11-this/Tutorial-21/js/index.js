function Circle(radius) {
  this.radius = radius;
  this.getCirleArea = function (message) {
    let area = this.radius ** 2 * Math.PI;
    return `${message}: ${area}`;
  };
}

let circle = new Circle(5);
console.log(circle.getCirleArea("Area"));

let obj = { radius: 10 };
let res1 = circle.getCirleArea.apply(obj, ["New"]);
console.log(res1);
console.log(circle.getCirleArea.call({ radius: 8 }, "Old"));