'use strict';
let employeesArr=[];

// Load employees array from localStorage when the page is loaded
window.addEventListener('load', () => {
  const emps = localStorage.getItem('allEmployees');
  if (emps) {
    employeesArr = JSON.parse(emps);
    render(employeesArr);
  }
});

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
  employeesArr.push(newEmployee);
  // Save the updated array to localStorage
  localStorage.setItem('allEmployees', JSON.stringify(employeesArr));
  render(employeesArr);
};

function render (arr) {
  const container = document.getElementById("employees-data");
  // Clear previous content
  container.innerHTML = '';
  for(let i=0;i<arr.length;i++) {
    const divEl = document.createElement('div');
    divEl.classList.add("cards");
    container.appendChild(divEl);

    const imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src', arr[i].imageURL);
    imgEl.width = "300";
    imgEl.height = "250";

    const fullNameEl = document.createElement('p');
    divEl.appendChild(fullNameEl);
    fullNameEl.textContent = `Full Name: ${arr[i].fullName}`;

    const employeeIdEl = document.createElement('p');
    divEl.appendChild(employeeIdEl);
    employeeIdEl.textContent = `ID no :${arr[i].employeeId}`;

    const departmentEl = document.createElement('p');
    divEl.appendChild(departmentEl);
    departmentEl.textContent = `Department: ${arr[i].department}`;

    const levelEl = document.createElement('p');
    divEl.appendChild(levelEl);
    levelEl.textContent = `Level: ${arr[i].level}`;

    const salaryEl = document.createElement('p');
    divEl.appendChild(salaryEl);
    salaryEl.textContent = `Salary: ${arr[i].salary}`
  }

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
