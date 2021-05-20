let value = prompt("Input number");
let number = Number(value);
let message;
if (Number.isNaN(number) || !Number.isInteger(number)) {
   message = "Incorrect format";
} else {
   message = "Color: ";
   switch (number) {
      case 1: {
         message += "red";
         break;
      }
      case 2: {
         message += "orange";
         break;
      }
      case 3: {
         message += "yellow";
         break;
      }
      case 4: {
         message += "green";
         break;
      }
      case 5: {
         message += "blue";
         break;
      }
      case 6: {
         message += "indigo";
         break;
      }
      case 7: {
         message += "violet";
         break;
      }
      default: {
         message += "white";
      }
   }
}
console.log(message);




