let tasks = [
   {
      id: generateFakeId(),
      name: "Cook the dinner",
   },
   {
      id: generateFakeId(),
      name: "Go to the gym",
   },
   {
      id: generateFakeId(),
      name: "Meet Kevin",
   },
   {
      id: generateFakeId(),
      name: "Pay bills",
   },
];

let errValue = document.querySelector("#error");
let newTack = document.querySelector("#newTack");
let addBtn = document.querySelector("#addBtn");
let to_do_list = document.querySelector("#myList");
let ctnOfTasks = document.querySelector("#ctnOfTasks");

window.addEventListener("load", function () {
   tasks.forEach((list) => {
      addTackTo_ul(list.name, list.id);
   });
   updateCtnTasks();
});

function addTackTo_ul(listName, tackId) {
   let li = document.createElement("li");
   li.className = "todo-list__item";
   let span = document.createElement("span");
   span.innerHTML = listName;
   let dataId = document.createAttribute("data-id")
   dataId.value = tackId;
   span.setAttributeNode(dataId);
   li.appendChild(span);

   createButton("todo-list__delete-btn", "&#10006", li, deleteParagraph)
   to_do_list.appendChild(li);


   li.addEventListener("click", function () {
      li.className = (li.className == 'todo-list__item todo-list__item todo-list__item--done' ? 'todo-list__item' : 'todo-list__item todo-list__item todo-list__item--done')
   });


};



newTack.addEventListener('input', function () {

   addBtn.disabled = newTack.value.trim().length < 4;
   if (newTack.value.trim().length < 4) {
      errValue.innerHTML = "New task is required";
      errValue.className = "errorMessage";
   } else {
      errValue.innerHTML = "";
   };

});

addBtn.addEventListener("click", function () {
   let newId = generateFakeId();
   addTackTo_ul(newTack.value, newId);
   tasks.push({
      id: newId,
      name: newTack.value,
   });
   updateCtnTasks();
   newTack.value = "";
   addBtn.disabled = true;
});


function deleteParagraph(event) {
   let liToDelite = event.target.closest("li");
   //liToDelite.remove();
   let dataId = liToDelite.firstChild.getAttribute("data-id");
   let id = tasks.findIndex((list) => list.id === dataId);
   tasks = tasks.filter((list, i) => i !== id);
   //console.log(tasks);
   to_do_list.removeChild(liToDelite);
   updateCtnTasks();
};

function updateCtnTasks() {
   let outstandingTasks = document.getElementsByClassName("todo-list__item");
   let tasksDone = document.getElementsByClassName("todo-list__item todo-list__item--done");
   ctnOfTasks.innerHTML = `${outstandingTasks.length}  tasks ${tasksDone.length} done`;
   to_do_list.addEventListener("click", function (e) {
      let value = e.target.className;
      if (value != outstandingTasks || value != tasksDone) {
         ctnOfTasks.innerHTML = `${outstandingTasks.length}  tasks ${tasksDone.length} done`;
      };
   });
};


function createButton(className, innerHTML, parentNode, deleteAction) {
   let button = document.createElement("button");
   button.type = "button";
   button.className = className;
   button.innerHTML = innerHTML;//"&#10006";
   button.addEventListener("click", deleteAction)
   parentNode.appendChild(button);
};

let addRandomButton = document.querySelector("#RandomBtn");
addRandomButton.addEventListener("click", getRandomTask);

function getRandomTask() {
   let xhr = new XMLHttpRequest();
   xhr.open("GET", "https://favqs.com/api/qotd");
   xhr.send();

   xhr.onload = function () {
      let obj = JSON.parse(xhr.response);
      let randomTask = obj.quote.body
      let newId = generateFakeId();

      addTackTo_ul(randomTask, newId);

      tasks.push({ id: newId, name: randomTask, })
      updateCtnTasks();
   };
};

function generateFakeId() {
   return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function
      (c) {
      let r = (Math.random() * 16) | 0,
         v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
   });
};




