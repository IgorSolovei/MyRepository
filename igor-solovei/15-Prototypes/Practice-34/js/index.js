let student = {
  firstName: "John",
  lastName: "Doe",
  avarageScore: Number(),
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  },
  isScholarshipHolder: function () {
    return this.avarageScore >= 4;
  },
};

function Aspirant(dissertationTopic, isDissertationComplete) {
  this.dissertationTopic = dissertationTopic;
  this.isDissertationComplete = Boolean(isDissertationComplete);
  this.isScholarshipHolder = function () {
    return this.avarageScore >= 4.5 && this.isDissertationComplete
  };
}


Aspirant.prototype = student;
let aspirant = new Aspirant();
for (let i in aspirant) {
  console.log(i);
};

student.avarageScore = 4.8;
console.log(student.isScholarshipHolder());
aspirant.avarageScore = 4.8;
aspirant.isDissertationComplete = false;
console.log(aspirant.isScholarshipHolder());