

function getMaximum(...args) {

   let number = [];
   for (let arg of args) {
      if (typeof arg === "number") {
         number.push(arg);
      }
   }

   if (number.length === 0) {
      return undefined;
   }

   let maxEl = Math.max(...number);
   /*for (let numbers of number) {
      if (maxEl < numbers) {
         maxEl = numbers;
      }
   }*/
   return maxEl;
}
console.log(getMaximum());
console.log(getMaximum(true, 20, "value", 119, 84));



