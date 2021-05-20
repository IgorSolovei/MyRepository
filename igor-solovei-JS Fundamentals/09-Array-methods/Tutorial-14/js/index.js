const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let result = months.find(function (value) {
  return value.length === 4;
});

console.log(result);