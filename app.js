function Employee(employeeId, fullName, department, level, imageURL) {
  this.employeeId = employeeId;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = 0;
};

Employee.prototype.calculateSalary = function () {
  let min, max;
  switch (this.level) {
    case "Junior":
      min = 500;
      max = 1000;
      break;
    case "Mid-Senior":
      min = 1000;
      max = 1500;
      break;
    case "Senior":
      min = 1500;
      max = 2000;
      break;
  }
  let difference = max - min;
  let salary = Math.floor(Math.random() * difference) + min;
  this.salary = salary - (salary * 0.075);
};

const Employee1 = new Employee (1000,"Ghazi Samer","Administration","Senior","Image URL");
const Employee2 = new Employee (1001,"Lana Ali","Finance","Senior","Image URL");
const Employee3 = new Employee (1002,"Tamara Ayoub","Marketing","Senior","Image URL");
const Employee4 = new Employee (1003,"Safi Walid","	Administration","Mid-Senior","Image URL");
const Employee5 = new Employee (1004,"Omar Zaid","Development","Senior","Image URL");
const Employee6 = new Employee (1005,"Rana Saleh","Development","Junior","Image URL");
const Employee7 = new Employee (1006,"Hadi Ahmad","Finance","Mid-Senior","Image URL");

const employees = [
  Employee1,
  Employee2,
  Employee3, 
  Employee4, 
  Employee5,
  Employee6, 
  Employee7
];

document.write('Full Name Salary<br>');

Employee.prototype.render = function () {
  document.write(`${this.fullName} ${this.salary}`);
  document.write("<br>");
};

for (let i = 0; i < employees.length; i++) {
  employees[i].calculateSalary();
  employees[i].render();
};