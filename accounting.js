'use strict';
let forAccounting = [];
function getEmployees() {
    let employees = localStorage.getItem("allEmployees");
    let jsObj = JSON.parse(employees);
    forAccounting = jsObj;
    console.log(jsObj);
};
getEmployees();

function administrationFn() {
    let numberOfEmployees = 0;
    let averageSalary;
    let totalSalary = 0;
    for (let i = 0; i < forAccounting.length; i++) {
        if (forAccounting[i].department == "administration") {
            numberOfEmployees += 1
            totalSalary = totalSalary + forAccounting[i].salary;
        }
    }
    if (numberOfEmployees==0) {
        averageSalary=0;
    } else {
         averageSalary = totalSalary / numberOfEmployees;
        }
    return { totalSalary, averageSalary, numberOfEmployees };
};

function marketingFn() {
    let numberOfEmployees = 0;
    let averageSalary;
    let totalSalary = 0;
    for (let i = 0; i < forAccounting.length; i++) {
        if (forAccounting[i].department == "marketing") {
            numberOfEmployees += 1
            totalSalary = totalSalary + forAccounting[i].salary;
        }
    }
    if (numberOfEmployees==0) {
        averageSalary=0;
    } else {
         averageSalary = totalSalary / numberOfEmployees;
        }
    return { totalSalary, averageSalary, numberOfEmployees };
};

function developmentFn() {
    let numberOfEmployees = 0;
    let averageSalary=0;
    let totalSalary = 0;
    for (let i = 0; i < forAccounting.length; i++) {
        if (forAccounting[i].department == "development") {
            numberOfEmployees += 1
            totalSalary = totalSalary + forAccounting[i].salary;
        }
    }
    if (numberOfEmployees==0) {
        averageSalary=0;
    } else {
         averageSalary = totalSalary / numberOfEmployees;
        }
    return { totalSalary, averageSalary, numberOfEmployees };
};

function financeFn() {
    let averageSalary;
    let numberOfEmployees = 0;
    let totalSalary = 0;
    for (let i = 0; i < forAccounting.length; i++) {
        if (forAccounting[i].department == "finance") {
            numberOfEmployees += 1
            totalSalary = totalSalary + forAccounting[i].salary;
        }
    }
    if (numberOfEmployees==0) {
        averageSalary=0;
    } else {
         averageSalary = totalSalary / numberOfEmployees;
        }
    return { totalSalary, averageSalary, numberOfEmployees };
};

function render() {
    const container = document.getElementById("employees-table");
    //****************************************************************************************** */
    const tableEl = document.createElement('table');
    container.appendChild(tableEl);

    const trElHeader = document.createElement('tr');
    tableEl.appendChild(trElHeader);

    const departmentName = document.createElement('th');
    trElHeader.appendChild(departmentName);
    departmentName.textContent = `Department`

    const numberOfEmployees = document.createElement('th');
    trElHeader.appendChild(numberOfEmployees);
    numberOfEmployees.textContent = `Number of Employees`

    const departmentAverageSalary = document.createElement('th');
    trElHeader.appendChild(departmentAverageSalary);
    departmentAverageSalary.textContent = `Department Average Salary`

    const departmentTotalSalary = document.createElement('th');
    trElHeader.appendChild(departmentTotalSalary);
    departmentTotalSalary.textContent = `Department Total Salary`
    /*********************************************************************************************** */
    const trElAdministration = document.createElement('tr');
    tableEl.appendChild(trElAdministration);

    const administration = document.createElement('td');
    trElAdministration.appendChild(administration);
    administration.textContent = `Administration`

    const administrationNumberOfEmployees = document.createElement('td');
    trElAdministration.appendChild(administrationNumberOfEmployees);
    administrationNumberOfEmployees.textContent = `${administrationFn().numberOfEmployees}`

    const administrationAverageSalary = document.createElement('td');
    trElAdministration.appendChild(administrationAverageSalary);
    administrationAverageSalary.textContent = `${administrationFn().averageSalary}`

    const administrationTotalSalary = document.createElement('td');
    trElAdministration.appendChild(administrationTotalSalary);
    administrationTotalSalary.textContent = `${administrationFn().totalSalary}`;
    //************************************************************************************** */
    const trElMarketing = document.createElement('tr');
    tableEl.appendChild(trElMarketing);

    const marketing = document.createElement('td');
    trElMarketing.appendChild(marketing);
    marketing.textContent = `Marketing`;

    const marketingNumberOfEmployees = document.createElement('td');
    trElMarketing.appendChild(marketingNumberOfEmployees);
    marketingNumberOfEmployees.textContent = `${marketingFn().numberOfEmployees}`;

    const marketingAverageSalary = document.createElement('td');
    trElMarketing.appendChild(marketingAverageSalary);
    marketingAverageSalary.textContent = `${marketingFn().averageSalary}`;

    const marketingTotalSalary = document.createElement('td');
    trElMarketing.appendChild(marketingTotalSalary);
    marketingTotalSalary.textContent = `${marketingFn().totalSalary}`;

    //********************************************************************************* */
    const trElDevelopment = document.createElement('tr');
    tableEl.appendChild(trElDevelopment);

    const development = document.createElement('td');
    trElDevelopment.appendChild(development);
    development.textContent = `Development`;

    const developmentNumberOfEmployees = document.createElement('td');
    trElDevelopment.appendChild(developmentNumberOfEmployees);
    developmentNumberOfEmployees.textContent = `${developmentFn().numberOfEmployees}`;

    const developmentAverageSalary = document.createElement('td');
    trElDevelopment.appendChild(developmentAverageSalary);
    developmentAverageSalary.textContent = `${developmentFn().averageSalary}`;

    const developmentTotalSalary = document.createElement('td');
    trElDevelopment.appendChild(developmentTotalSalary);
    developmentTotalSalary.textContent = `${developmentFn().totalSalary}`;

    //********************************************************************************** */
    const trElFinance = document.createElement('tr');
    tableEl.appendChild(trElFinance);

    const finance = document.createElement('td');
    trElFinance.appendChild(finance);
    finance.textContent = `Finance`;

    const financeNumberOfEmployees = document.createElement('td');
    trElFinance.appendChild(financeNumberOfEmployees);
    financeNumberOfEmployees.textContent = `${financeFn().numberOfEmployees}`;

    const financeAverageSalary = document.createElement('td');
    trElFinance.appendChild(financeAverageSalary);
    financeAverageSalary.textContent = `${financeFn().averageSalary}`;

    const financeTotalSalary = document.createElement('td');
    trElFinance.appendChild(financeTotalSalary);
    financeTotalSalary.textContent = `${financeFn().totalSalary}`;
    //************************************************************************************************** */

    const trElFooter = document.createElement('tr');
    tableEl.appendChild(trElFooter);

    const footer = document.createElement('td');
    trElFooter.appendChild(footer);
    footer.textContent = `Summation`;

    const summationNumberOfEmployees = document.createElement('td');
    trElFooter.appendChild(summationNumberOfEmployees);
    summationNumberOfEmployees.textContent = `${administrationFn().numberOfEmployees + marketingFn().numberOfEmployees + developmentFn().numberOfEmployees + financeFn().numberOfEmployees}`;

    const summationAverageSalary = document.createElement('td');
    trElFooter.appendChild(summationAverageSalary);
    summationAverageSalary.textContent = `${administrationFn().averageSalary + marketingFn().averageSalary + developmentFn().averageSalary + financeFn().averageSalary}`;

    const summationTotalSalary = document.createElement('td');
    trElFooter.appendChild(summationTotalSalary);
    summationTotalSalary.textContent = `${administrationFn().totalSalary + marketingFn().totalSalary + developmentFn().totalSalary + financeFn().totalSalary}`;
};
render();