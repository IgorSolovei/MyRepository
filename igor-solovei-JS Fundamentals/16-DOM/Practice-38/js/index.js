function messageUser() {
   let message = confirm("Do you want toadd new image?")
   if (message) {

      let picture = `https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png`
      prompt("Link for the images:", picture);
      let x = document.getElementById("wrapper");
      let img = document.createElement("img");
      x.appendChild(img);
      img.src = picture;

   };

}

messageUser();