let arr = [2, 4, 9, 3, 8, 1];

//console.log(arr.find((value) => value == 7));

let newArray = myFind(arr, (value) => value > 5)//9
console.log(newArray);

let new_Array = myFind(arr, (value) => value == 7) //undefined
console.log(new_Array);

function myFind(array, clbFind) {
   let result = [];

   for (let value of array) {
      if (clbFind(value)) {
         result.push(value);
         break;
      }
   }
   if (result.length === 0) {
      return undefined;
   }
   return result;
}








