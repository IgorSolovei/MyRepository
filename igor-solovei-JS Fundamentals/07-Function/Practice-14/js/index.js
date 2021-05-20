const message = "3 arguments expected";

function calc_Summ_String(...args) {
   if (args.length < 3) {
      return message;
   }
   let result = [];
   for (let value of args) {
      result.push(String(value));
   }
   let summ = result.join("");

   return summ.length;
}

//console.log(calc_Summ_String());
console.log(calc_Summ_String("Mercury", "Saturn", "Mars"));




