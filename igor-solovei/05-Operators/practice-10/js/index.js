let pass = prompt("Input the password:");
let value = pass.length < 6;
let message;

if (pass == "qwerty" || pass == "123123") {
  message = "Middle";
} else {
  message = "";
  switch (value) {
    case value >= 6: {
      message += "Strong";
      break;
    }
    default: {
      message += "Week";
    }
  }
}


console.log(message);