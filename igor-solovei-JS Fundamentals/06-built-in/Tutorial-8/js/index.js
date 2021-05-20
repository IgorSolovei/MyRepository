let numbers = [];
let lengthOfNumbers = 8;

for (let i = 0; i < lengthOfNumbers; i++) {
   let random = Math.floor(Math.random() * 10);
   numbers.push(random);
}
console.log(numbers);

const STRING_OF_NUMBER = [
   "zero",
   "one",
   "two",
   "three",
   "four",
   "five",
   "six",
   "seven",
   "eight",
   "nine",
   "ten",
];

let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
   let value = numbers[i];
   newNumbers.push(STRING_OF_NUMBER[value]);
}
console.log(newNumbers.reverse());