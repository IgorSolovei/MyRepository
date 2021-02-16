let input = document.querySelector("input");
let par = document.querySelector("#filmsCount");
let liToList = document.querySelectorAll("li");

input.addEventListener("input", function () {
  let res = input.value.toLowerCase();
  let result = 0;
  for (let iterator of liToList) {
    if (iterator.textContent.toLowerCase().includes(res)) {
      result++;
    }
  }
  par.innerHTML = `films ${result}`;
});





