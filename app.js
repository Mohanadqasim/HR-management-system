'use strict';
let allEmployees = [];
function Employee(fullName, department, level, imageURL) {
  this.employeeId = 0;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = 0;
};



Employee.prototype.calculateSalary = function () {

  if (this.level == "junior") {
    let salary = Math.ceil(Math.random() * 500) + 500;
    this.salary = salary - (salary * 0.075);
  } else if (this.level == "midSenior") {
    let salary = Math.ceil(Math.random() * 500) + 1000;
    this.salary = salary - (salary * 0.075);
  } else if (this.level == "senior") {
    let salary = Math.ceil(Math.random() * 500) + 1500;
    this.salary = salary - (salary * 0.075);
  }
};

Employee.prototype.generateId = function () {
  this.employeeId = Math.floor(Math.random() * 1000 + 1000);
};

// 1. create the element
// 2. append it to it's parent
// 3. add text content to it || attribuates



Employee.prototype.render = function () {
  // const test = document.getElementsByClassName('prag');
  const container = document.getElementById("employees-data");
  console.log(container);

  const divEl = document.createElement('div');
  divEl.classList.add("cards");
  container.appendChild(divEl);

  const imgEl = document.createElement('img');
  divEl.appendChild(imgEl);
  imgEl.setAttribute('src', this.imageURL);
  imgEl.width = "300";
  imgEl.height = "250";

  const fullNameEl = document.createElement('p');
  divEl.appendChild(fullNameEl);
  fullNameEl.textContent = `Full Name: ${this.fullName}`;

  const employeeIdEl = document.createElement('p');
  divEl.appendChild(employeeIdEl);
  employeeIdEl.textContent = `ID no :${this.employeeId}`;

  const departmentEl = document.createElement('p');
  divEl.appendChild(departmentEl);
  departmentEl.textContent = `Department: ${this.department}`;

  const levelEl = document.createElement('p');
  divEl.appendChild(levelEl);
  levelEl.textContent = `Level: ${this.level}`;

  const salaryEl = document.createElement('p');
  divEl.appendChild(salaryEl);
  salaryEl.textContent = `Salary: ${this.salary}`

};



function addNewEmployee(event) {
  event.preventDefault();
  
  let fullName = event.target.fullName.value;
  let department = event.target.department.value;
  let level = event.target.level.value;
  let imgUrl = event.target.imgUrl.value;
  let newEmployee = new Employee(fullName, department, level, imgUrl)
  newEmployee.calculateSalary();
  newEmployee.generateId();
  allEmployees.push(newEmployee);
  newEmployee.render();
};

const employeesForm = document.getElementById("employeesForm");
employeesForm.addEventListener('submit', addNewEmployee);

// for (let i = 0; i < employees.length; i++) {
//   employees[i].calculateSalary();
//   employees[i].generateId();
//   employees[i].render();
// };

// const Employee1 = new Employee (1000,"Ghazi Samer","Administration","Senior","Image URL");
// const Employee2 = new Employee (1001,"Lana Ali","Finance","Senior","Image URL");
// const Employee3 = new Employee (1002,"Tamara Ayoub","Marketing","Senior","Image URL");
// const Employee4 = new Employee (1003,"Safi Walid","	Administration","Mid-Senior","Image URL");
// const Employee5 = new Employee (1004,"Omar Zaid","Development","Senior","Image URL");
// const Employee6 = new Employee (1005,"Rana Saleh","Development","Junior","Image URL");
// const Employee7 = new Employee (1006,"Hadi Ahmad","Finance","Mid-Senior","Image URL");

// const employees = [
//   Employee1,
//   Employee2,
//   Employee3, 
//   Employee4, 
//   Employee5,
//   Employee6, 
//   Employee7
// ];

