function background_Change() {
   let main = document.getElementById("main");
   // let color = main.childNodes.length - 2;
   // main.style.backgroundColor[color.toLocaleString()] = "red"
   let tag = document.getElementsByTagName("p")[2];
   tag.style.backgroundColor = "red";
   console.log(tag);

   //main.style.background = "red"

}

function changeOfPlaces() {
   let footer = document.getElementById("footer");
   let content = document.getElementById("wrapper");
   content.appendChild(footer);
   //console.log(footer);
}

background_Change();
changeOfPlaces();