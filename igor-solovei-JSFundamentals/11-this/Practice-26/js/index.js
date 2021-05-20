function Article(author, name, countOfWords) {
   this.author = author;
   this.name = name;
   this.countOfWords = countOfWords;
   this.changeCountOfWords = function (value) {
      if (typeof value === 'number')
         this.countOfWords = value;
   };
   this.toString = function () {
      return `author: ${this.author}, name: ${this.name}, countOfWords:${this.countOfWords}`;
   };
   this.addMethodToObject = function (func, name) {
      if (typeof func != 'function') {
         return "Error: func is not a function";
      }
      else if (typeof name != 'string' && name == "") {
         return "Error: invalid name";
      } else {
         this[name] = func;
      }
      return `Success: method ${name} was added to the obj`;
   };
}
let article2 = new Article("Timothy Robards", "Understanding JSON", 3213);

article2.addMethodToObject(function (propertyName) {
   if (propertyName in this) {
      return this[propertyName];
   }
   return `Error: ${propertyName} is not a part of this object`;
}, "getPropertyValue");

console.log(article2.getPropertyValue("age"));
console.log(article2.getPropertyValue("name"));