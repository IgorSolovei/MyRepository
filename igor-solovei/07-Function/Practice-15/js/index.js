function line_Length() {
   let value = [];
   for (let i = 0; i < arguments.length; i++) {
      value = value.concat(arguments[i]);
   }
   let length = [];
   for (let i = 0; i < value.length; i++) {
      if (typeof value[i] != 'string' && value.length > 5) {

      } else {
         length.push(value[i]);
      }
   }
   let string;

   string = length.join(",")

   return string;
}

console.log(["unimprovable", 0, "perfect"]);
console.log([3, true, "integer"]);
console.log(line_Length(["unimprovable", 0, "perfect"], [3, true, "integer"]));