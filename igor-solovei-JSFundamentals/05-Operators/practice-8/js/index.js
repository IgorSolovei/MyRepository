
let number = prompt("input number:");
let value = Number(number);
let message;

if (Number.isInteger(value) && !Number(number)) {
  message = 'Incorrect format';
} else {
  message = '';
  if (value > 10) {
    message += 'Greater';
  }
  else if (value < 10) {
    message += 'Less';
  }
  else if (value === 10) {
    message += 'Equal';
  } else {
    message += 'Incorrect format';
  }
}

console.log(message);