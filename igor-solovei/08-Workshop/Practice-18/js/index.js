function removeNegativeArrayElements(array) {

   for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] < 0 && typeof array[i] === 'number') {
         array.splice(i, 1);

      }
   }
   return array;
}
console.log(removeNegativeArrayElements([-9, 2, 3, 0, -28, "value"]));
console.log(removeNegativeArrayElements([-9, -21, -12]));
console.log(removeNegativeArrayElements(["-102", 102]));




