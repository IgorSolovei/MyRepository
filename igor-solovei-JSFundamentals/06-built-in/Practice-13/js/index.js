let numbers = [];
let lengthOfNumbers = 10;

for (let i = 0; i < lengthOfNumbers; i++) {
   let random = Math.floor(Math.random() * 100);
   numbers.push(random);
}
/*let result = numbers.reduce(function (sum, current) {
   return sum + current;
}, 0);*/
let sumNumbers = 0;
for (let i = 0; i < numbers.length; i++) {
   sumNumbers += numbers[i];
}
let minValue = Math.min.apply(null, numbers);
numbers.unshift(minValue - 1);
numbers.push(sumNumbers);
numbers.pop(sumNumbers);

/*let odd_element = numbers.filter(function (elem) {
   if (elem % 2 != 0) {
      return true;
   } else {
      return false;
   }
});*/
let odd_element = numbers.filter(function (item) {
   return item % 2 != 0 && item % 3 === 0;
});

//odd_element.splice(0, 1);
odd_element.sort()//function (a, b) {
// return a - b;
//});

console.log(odd_element.join("\n"));