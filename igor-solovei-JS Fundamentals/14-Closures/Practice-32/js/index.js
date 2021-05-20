function createCallDetails() {
   let details = [];
   return function analyze() {
      if (arguments.length > 0) {
         let date = new Date();
         let args = [];
         for (i = 0; i < arguments.length; i++) {
            args = (arguments.length === i ? [arguments[i - 1]] : Array.apply(null, arguments));
         }
         details.push({ dateOfCall: date, args });
      }
      return details;
   }
};


let analyze = createCallDetails();
analyze(1, "cake", undefined);
analyze(false);
console.log(analyze());




