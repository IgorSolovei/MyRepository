function addNewOption(value) {
   let option = document.createElement("option");
   option.value = value.toLowerCase();
   option.innerHTML = value;
   let select = document.getElementById("cars");
   select.appendChild(option);
}

function getValueFromUser(message) {
   return prompt(message);
}

let value = getValueFromUser("New car:");
addNewOption(value);





