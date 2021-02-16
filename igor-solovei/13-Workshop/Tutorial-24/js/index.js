function StudetentStore() {
   this.students = [
      { name: "Kate Green", group: "PR_1", marks: [4, 5, 4, 3] },
      { name: "Patrik Giang", group: "PR_1", marks: [5, 5, 5, 5] },
      { name: "John Giang", group: "PR_2", marks: [3, 2, 2, 2] },
      { name: "Mary Li", group: "PR_2", marks: [5, 5, 5, 5] },
   ];
   this.addNewStudent = function (name, group, marks) {
      if (typeof name == 'string' &&
         typeof group == 'string' &&
         Array.isArray(marks) &&
         marks.filter((value) => typeof value === 'number').length === 4) {
         let obj = {
            name: name,
            group: group,
            marks: Object.assign([], marks),
         }
         this.students.push(obj);
         return `Added ${name}`;
      }
      return "icorrect format of the arguments";
   };
   this.getTheBestStudents = function () {
      let maxValue = 0;
      let bestStudents = [];
      for (student of this.students) {
         let sum = student.marks.reduce((preValue, currentValue) => {
            return preValue + currentValue;
         }, 0);
         if (sum > maxValue) {
            bestStudents = [];
            bestStudents.push(student.name);
            maxValue = sum;
         } else if (sum == maxValue) {
            bestStudents.push(student.name);
            maxValue = sum;
         }
      }
      return bestStudents;
   };
}
let studentStore = new StudetentStore();
console.log(studentStore.students);
console.log(studentStore.addNewStudent("Ivan Ivanov", "PR_2", [1, 2, 9, 2]));
console.log(studentStore.students);
console.log(studentStore.getTheBestStudents());