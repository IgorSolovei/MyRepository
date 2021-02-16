let gen = () => {
   return Array.from({ length: 10 }, () => Math.floor(Math.floor(Math.random() * 100 + 1)));

}

let arrayOfNumbers = gen();
let newArray = arrayOfNumbers.map(n => n * 2);
function compareNumbers(a, b) {
   return b - a;
}

console.log(arrayOfNumbers);
console.log(newArray);
console.log(newArray.sort(compareNumbers));