const triangle = {
   A: 10,
   B: 10,
   C: 10,
   perimeter_Of_a_Triangle() {

      return this.A + this.B + this.C;
   },
   equilateral_Triangle() {

   },
   equilateral_Triangle() {
      return (this.A == this.B && this.B == this.C)
   },
   toString: function (variant) {
      let result = `Triangle v.${variant} 
A: ${triangle.A}, B:${triangle.B}, C:${triangle.C}
Perimetr: ${triangle.perimeter_Of_a_Triangle()}
Equilateral:${triangle.equilateral_Triangle()}`;
      return result;
   },
};
console.log(`${triangle.toString(1)}\n`);
triangle.C = 5;
console.log(triangle.toString(2));

