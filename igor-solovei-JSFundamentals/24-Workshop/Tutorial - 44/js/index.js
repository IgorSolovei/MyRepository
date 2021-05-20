let songs = [{
   id: generateFakeId(),
   name: "Jingle Bells",
   isLiked: false,
},
{
   id: generateFakeId(),
   name: "We Wish You a Merry Christmas",
   isLiked: false,
},

];


const songsUl = document.querySelector("#songs");
const addButton = document.querySelector("#addBtn");
const addRandomBtn = document.querySelector("#addRandomBtn");
const newSong = document.querySelector("#newSong");

addRandomBtn.addEventListener("click", getRandomSong);
addButton.addEventListener("click", addNewSong);
newSong.addEventListener("input", unlock_buttton);

window.addEventListener("load", function () {
   songs.forEach((song) => {
      add_li_to_ul(song.name, song.id, songs.isLiked);
   });
   updateCountOfSongs();
});

function add_li_to_ul(songName, songId, isLiked = false) {
   let li = document.createElement("li");
   li.className = "item";

   let span = document.createElement("span");
   span.innerHTML = songName;

   let dataId = document.createAttribute("data-id");
   dataId.value = songId;
   span.setAttributeNode(dataId);

   li.appendChild(span);

   createButton("btn deleteBtn", "Delete", li, deleteSongs);

   createButton("btn likeBtn", isLiked ? "Unlike" : "Like", li, setLikeOrDislike);
   if (isLiked) {
      createLikeIcon(li);
   };

   songsUl.appendChild(li);
};

function unlock_buttton(event) {
   addButton.disabled = event.target.value.trim().length < 1
};

function addNewSong() {
   let newId = generateFakeId();
   add_li_to_ul(newSong.value, newId);

   songs.push({
      id: newId,
      name: newSong.value,
      isLiked: false,
   });
   updateCountOfSongs();
   newSong.value = "";
   addButton.disabled = true;
};

function createLikeIcon(li) {
   let likeIkon = document.createElement("img");
   likeIkon.src = "imgs/like.svg";
   likeIkon.className = "like";
   li.appendChild(likeIkon);
};

function setLikeOrDislike(event) {
   let parentLi = event.target.closest("li");
   if (event.target.value === "Like") {

      createLikeIcon(parentLi);
      event.target.value = "Unlike";

   } else {

      event.target.value = "Like";
      parentLi.removeChild(parentLi.lastChild);
   }

   let dataId = parentLi.firstChild.getAttribute("data-id");
   let id = songs.findIndex((song) => song.id === dataId);
   songs[id].isLiked = !songs[id].isLiked;
};

function deleteSongs(event) {
   let parentLi = event.target.closest("li");
   let dataId = parentLi.firstChild.getAttribute("data-id");
   let id = songs.findIndex((song) => song.id === dataId);
   songs = songs.filter((song, i) => i !== id);

   parentLi.remove();
   updateCountOfSongs();
   //songsUl.removeChild(parentLi);
};

function updateCountOfSongs() {
   let ctnOfSongs = document.querySelector("#ctnOfSongs");
   ctnOfSongs.innerHTML = songs.length;
};

function createButton(className, value, parentNode, deleteAction) {
   let input = document.createElement("input");
   input.type = "button";
   input.className = className;
   input.value = value;
   input.addEventListener("click", deleteAction);
   parentNode.appendChild(input);
};



function getRandomSong() {
   let xhr = new XMLHttpRequest();
   xhr.open("GET", "https://binaryjazz.us/wp-json/genrenator/v1/genre/");
   xhr.send();

   xhr.onload = function () {
      if (xhr.status != 200) {
         console.log("Error! can not load random song");// исправить как время будет !!!
         return;
      }
      let songName = JSON.parse(xhr.response);
      let newId = generateFakeId();
      add_li_to_ul(songName, newId);
      songs.push({ id: newId, name: songName, isLiked: false, });
      updateCountOfSongs();

   };
}

function generateFakeId() {
   return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function
      (c) {
      let r = (Math.random() * 16) | 0,
         v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
   });
};
