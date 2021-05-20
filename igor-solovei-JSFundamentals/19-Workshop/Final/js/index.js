let tack = [
   {
      name: "Cook the dinner",
   },
   {
      name: "Go to the gym",
   },
   {
      name: "Meet Kevin",
   },
   {
      name: "Pay bills",
   },
];

let to_do_list = document.querySelector("#myList");
window.addEventListener("load", function () {
   tack.forEach((list) => {
      addTackTo_ul(list.name);
   });
});

function addTackTo_ul(listName) {
   let li = document.createElement("li");
   li.className = "todo-list__item";
   let span = document.createElement("span");
   span.innerHTML = listName;
   li.appendChild(span);
   createButton("todo-list__delete-btn", "&#10006", li, deleteParagraph)
   to_do_list.appendChild(li);


   li.addEventListener("click", function () {
      li.className = (li.className == 'todo-list__item todo-list__item todo-list__item--done' ? 'todo-list__item' : 'todo-list__item todo-list__item todo-list__item--done')
   });


};
let errValue = document.querySelector("#error");
let newTack = document.querySelector("#newTack");
let addBtn = document.querySelector("#addBtn");


newTack.addEventListener('input', function () {
   addBtn.disabled = newTack.value.length < 4;
   if (newTack.value.length < 4) {
      errValue.innerHTML = "New task is required";
      errValue.className = "errorMessage";
   } else {
      errValue.innerHTML = "";
   };

});

addBtn.addEventListener("click", function () {

   addTackTo_ul(newTack.value);
   tack.push({
      name: newTack.value,
   });

   newTack.value = "";
});


function deleteParagraph(event) {
   let liToDelite = event.target.closest("li");
   //liToDelite.remove();
   let val = liToDelite.firstChild.innerHTML;
   let id = tack.findIndex((list) => list.name === val);
   tack = tack.filter((list, i) => i !== id);
   //console.log(tack);
   to_do_list.removeChild(liToDelite);
};

function createButton(className, innerHTML, parentNode, deleteAction) {
   let button = document.createElement("button");
   button.type = "button";
   button.className = className;
   button.innerHTML = innerHTML;//"&#10006";
   button.addEventListener("click", deleteAction)
   parentNode.appendChild(button);
};


