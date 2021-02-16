function changeTitle() {
   let value = prompt("New title:");
   document.title = value;
}
function deleteLastChild() {
   let content = document.querySelector("#content");
   let allNodes = content.childNodes;
   content.removeChild(allNodes[allNodes.length - 2]);
}

changeTitle();
deleteLastChild();