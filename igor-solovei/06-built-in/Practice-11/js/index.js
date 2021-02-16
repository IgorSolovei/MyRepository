let string1 = "Aquamarine Black Blue Brown Chocolate ";
let string2 = "Green Lime Olive Orange Purple ";
let string3 = "Red Tomato Violet White Yellow";
let colors = string1.concat(
   string2,
   string3,
);
console.log(`Colors:\n${colors}`);

let words = colors.split(' ');
console.log(`\nCount of words : ${words.length}`);

const newWords = [];
for (let value of words) {
   if (value.length >= 6) {
      newWords.push(value);
      //console.log(value);
   }
}
let newColors = newWords.join(",");
console.log(`\nNew colors:\n${newColors.toLowerCase()}`);