'use strict';
function getEmployees() {
    let employees = localStorage.getItem("allEmployees");
    let jsObj = JSON.parse(employees);
    console.log(jsObj);
};
