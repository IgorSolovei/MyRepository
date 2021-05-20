let nameOfPresident = "Abraham Lincoln";
let startYear = 1861;
let endYear = 1865;
let description =
   "He was an American statesman and lawyer who served" +
   " as the 16th president of the United States";

let article = nameOfPresident.concat(
   "\n",
   startYear,
   "\n",
   endYear,
   "\n",
   description
);

console.log(article);
article = article.replace("He", "Abraham");

console.log(article.toUpperCase());