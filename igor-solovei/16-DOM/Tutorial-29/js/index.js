function changeTextColorByDayOfWeek() {
  let currentDay = new Date().getDay();
  let selectedParagraph = document.getElementById(currentDay);
  selectedParagraph.style = "color: red";
}

function swapMainWithHeader() {
  let main = document.querySelector("#main");
  let content = document.querySelector("#content");
  content.append(main);
}

changeTextColorByDayOfWeek();
swapMainWithHeader();