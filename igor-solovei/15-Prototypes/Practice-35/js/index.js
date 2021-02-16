class Plane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  };
  takeOff() {
    this.isFlying = true;
  };
  land() {
    this.isFlying = false;
  };

};

const airport = {
  planes: [],
  countOfPlanesInFlight: function () {
    return this.planes.filter(function (plane) {
      return plane.isFlying
    }).length;
  },
  generateAircraft: function () {
    let randomAir = Math.round(Math.random());
    delete this.planes[randomAir].takeOff;
    delete this.planes[randomAir].land;
    this.planes[randomAir].isFlying = false;
    this.planes[randomAir].isBroken = true;
  },

};

let plane1 = new Plane("First");
let plane2 = new Plane("Killer");
plane2.takeOff();
airport.planes.push(plane1, plane2);
console.log(airport.countOfPlanesInFlight());
console.log(airport.planes);

airport.generateAircraft();
console.log(airport.planes);