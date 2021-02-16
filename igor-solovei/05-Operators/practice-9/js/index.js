let value = prompt("Input integer number:");
let number = Number(value);
let message = "";
/*if (Number.isNaN(number) || !Number.isInteger(number)) {
   message = "Incorrect format";
} else {
   message = "";*/
switch (number) {
   case 1: {
      message += "Monday";
      break;
   }
   case 2: {
      message += `Tuesday`;
      break;
   }
   case 3: {
      message += `Wednesday`;
      break;
   }
   case 4: {
      message += `Thursday`;
      break;
   }
   case 5: {
      message += `Friday`;
      break;
   }
   case 6: {
      message += `Saturday`;
      break;
   }
   case 7: {
      message += `Sunday`;
      break;
   }

   default: {

      message += `Incorrect format`
   }
}
//}

console.log(message);