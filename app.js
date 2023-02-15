'use strict';
let employeesArr=[];
function Employee(fullName, department, level, imageURL) {
  this.employeeId = 0;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = 0;
  employeesArr.push(this);
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
  // console.log(container);

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

let employeesTable = document.getElementById("employeesForm");
employeesTable.addEventListener('submit', addNewEmployeeHandler);

function addNewEmployeeHandler(event) {
    event.preventDefault();
    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let imgUrl = event.target.imgUrl.value;
    let newEmployee = new Employee(fullName, department, level, imgUrl)
    newEmployee.calculateSalary();
    newEmployee.generateId();
    newEmployee.render();
    employeesArr.push(newEmployee);
    let jsonObj = JSON.stringify(employeesArr);  //convert from JS to JSON
    localStorage.setItem("allEmployees",jsonObj);  //store in local storage
};

// function getEmployees () {
//   let employees = localStorage.getItem("allEmployees");
//   let jsObj = JSON.parse(employees);
// }

// // store data (key,value)
// localStorage.setItem('userName', 'roaa');
// localStorage.setItem('age', '27');
// localStorage.setItem('gender', 'female');

// //get data
// let userName = localStorage.getItem('userName'); // return value of 'userName' key
// console.log(userName);
