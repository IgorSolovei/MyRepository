const biography = {
   firstName: "Tadeush",
   lastName: "Kosciuszko",
   age: 71,
   description: `Tadeusz Kosciuszko is perhaps the most famous Belarusian in the world, an honorary citizen of France,a 
   national hero of Poland and the United States.
   One of the counties of Indiana, the highest mountain in Australia, islands in Alaska, 
   a city in the state of Mississippi, streets in Polish cities bear his name.`,
   isMarried: false,

   cleanData() {
      for (let property in biography) {
         if (typeof biography[property] == 'number') {
            biography[property] = 0;
         }
         if (typeof biography[property] == 'string') {
            biography[property] = "";
         }
         if (typeof biography[property] == 'boolean') {
            biography[property] = undefined;
         }
      }
   },
   toString: function (variant) {

      let result = `Biography v.${variant} 
firstName: ${biography.firstName} 
lastName: ${biography.lastName} 
age: ${biography.age}
description: ${biography.description}
isMarried: ${biography.isMarried}`;
      return result;
   }
};
console.log(`${biography.toString(1)}\n`);

biography.cleanData();
console.log(biography.toString(2));



