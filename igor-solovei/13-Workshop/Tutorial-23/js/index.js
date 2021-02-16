function DateHelper() {
  this.creationDate = new Date();
  this.getCreationDateAsString = function () {
    let strDate = `${this.creationDate.getDate()}.${this.creationDate.getMonth() + 1
      }.${this.creationDate.getFullYear()}`;
    return strDate;
  };
  this.addDays = function (countOfDays) {
    if (Number.isInteger(countOfDays) && countOfDays > 0) {
      this.creationDate.setDate(this.creationDate.getDate() + countOfDays);
      return `${countOfDays} days were added`;
    }
    return "Argument countOfDays is not a positive integer number";
  };
}

let dateHelper = new DateHelper();
console.log(dateHelper.creationDate);
console.log(dateHelper.getCreationDateAsString());
console.log(dateHelper.addDays(10));
console.log(dateHelper.creationDate);