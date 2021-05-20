const MORSE = {
   A: ".-",
   B: "-...",
   C: "-.-.",
   D: "-..",
   E: ".",
   F: "..-.",
   G: "--.",
   H: "....",
   I: "..",
   J: ".---",
   K: "-.-",
   L: ".-..",
   M: "--",
   N: "-.",
   O: "---",
   P: ".--.",
   Q: "--.-",
   R: ".-.",
   S: "...",
   T: "-",
   U: "..-",
   V: "...-",
   W: ".--",
   X: "-..-",
   Y: "-.--",
   Z: "--..",
   " ": " ",
};
function Encoder(message) {
   this.encryptArr = [];
   this.message = message.toUpperCase();
   this.encodeMorse = function (message) {
      let result = this.message.split("");
      for (let item of result) {
         this.encryptArr.push(MORSE[item]);
      }
      return this.encryptArr.join(" ");
   }
}
let encoder = new Encoder('Hello Denis');
console.log(encoder.message);
console.log(encoder.encodeMorse());

