function Article(author, name, countOfWords) {
   this.author = author;
   this.name = name;
   this.countOfWords = countOfWords;
   this.changeCountOfWords = function (value) {
      if (typeof value === 'number')
         this.countOfWords = value;
   };
   this.toString = function () {
      return `author: ${this.author}, name: ${this.name}, countOfWords:${this.countOfWords}`
   };
}

let article1 = new Article("Ali Haiderh", "String concatenation", 5129);

let article2 = new Article("Petr Petrov", "String concatenation", 5129);

article1.changeCountOfWords(444);
console.log(article1.toString());
console.log(article2.toString());



