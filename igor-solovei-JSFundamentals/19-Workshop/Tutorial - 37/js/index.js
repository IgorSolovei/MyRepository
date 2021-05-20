let songs = [{
   name: "Jingle Bells",
   isLiked: false,
},
{
   name: "We Wish You a Merry Christmas",
   isLiked: false,
},
];
let songsUl = document.querySelector("#songs");
window.addEventListener("load", function () {
   songs.forEach((song) => {
      add_li_to_ul(song.name);
   });
   updateCountOfSongs();
});

function add_li_to_ul(songName) {
   let li = document.createElement("li");
   li.className = "item";

   let span = document.createElement("span");
   span.innerHTML = songName;
   li.appendChild(span);

   createButton("btn deleteBtn", "Delete", li, deleteSongs);
   createButton("btn likeBtn", "Like", li, setLikeOrDislike);

   songsUl.appendChild(li);
};

let addButton = document.querySelector("#addBtn");
addButton.addEventListener("click", function () {
   let newSong = document.querySelector("#newSong");
   add_li_to_ul(newSong.value);
   songs.push({
      name: newSong.value,
      isLiked: false,
   });
   updateCountOfSongs();
   newSong.value = "";
});

function setLikeOrDislike(event) {
   let parentLi = event.target.closest("li");
   if (event.target.value === "Like") {
      let likeIkon = document.createElement("img");
      likeIkon.src = "imgs/like.svg";
      likeIkon.className = "like";
      parentLi.appendChild(likeIkon);
      event.target.value = "Unlike";
   } else {
      event.target.value = "Like";
      parentLi.removeChild(parentLi.lastChild);
   }

   let value = parentLi.firstChild.innerHTML;
   let id = songs.findIndex((song) => song.name === value);
   songs[id].isLiked = !songs[id].isLiked;

};

function deleteSongs(event) {
   let parentLi = event.target.closest("li");
   let value = parentLi.firstChild.innerHTML;
   let id = songs.findIndex((song) => song.name === value);
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