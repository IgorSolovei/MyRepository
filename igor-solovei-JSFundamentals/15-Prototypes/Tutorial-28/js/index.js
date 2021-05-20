class Pet {
   constructor(name) {
      this.name = name;
      this.isIll = true;
   }
}
let pet1 = new Pet("Helene");
let pet2 = new Pet("Rex");
console.log(pet2);

let vetClinic = {
   pets: [],
   treatPet: function (id) {
      if (Number.isInteger(id) && id >= 0 && id < this.pets.length) {
         this.pets[id].isIll = false;
         return `Pet ${this.pets[id].name} was cured`;
      }
      return "Incorrect id";
   },
};
vetClinic.pets.push(pet1, pet2);
console.log(vetClinic.treatPet(1000));
console.log(vetClinic.treatPet(1));
console.log(vetClinic.pets);