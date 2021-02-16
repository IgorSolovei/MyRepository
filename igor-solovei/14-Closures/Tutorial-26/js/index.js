function secretWord(secret) {
   return {
      guessWord: function (word) {
         return word === secret;
      },
   };
}
let game = secretWord("cat");
console.log(game.guessWord("dog"));
console.log(game.guessWord("cat"));