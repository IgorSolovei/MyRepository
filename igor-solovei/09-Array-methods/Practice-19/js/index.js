let elements = [1, true, 42, "red", 64, "green", "web", new Date(), -898, false];
console.log(elements);
let stringElements = elements.filter(function (curentValue) {
   return curentValue === String(curentValue);
});
console.log(stringElements);





