// 'use strict';
// let forAccounting=[];
// function getEmployees() {
//     let employees = localStorage.getItem("allEmployees");
//     let jsObj = JSON.parse(employees);
//     forAccounting = jsObj;
//     console.log(jsObj);
// };
// getEmployees();

// function administrationFun () {
//     let numberOfEmployees=0;
//     let averageSalary;
//     let totalSalary=0;
//     for (let i=0; i<forAccounting.length; i++) {
//         if (forAccounting[i].department=="administration") {
//             numberOfEmployees+=1
//             totalSalary=totalSalary+forAccounting[i].salary;
//         }
//     }
//     averageSalary=totalSalary/numberOfEmployees;
//     return {totalSalary,averageSalary,numberOfEmployees};
// };


// function marketingFun () {
//     let numberOfEmployees=0;
//     let averageSalary;
//     let totalSalary=0;
//     for (let i=0; i<forAccounting.length; i++) {
//         if (forAccounting[i].department=="marketing") {
//             numberOfEmployees+=1
//             totalSalary=totalSalary+forAccounting[i].salary;
//         }
//     }
//     averageSalary=totalSalary/numberOfEmployees;
//     return {totalSalary,averageSalary,numberOfEmployees};
// };

// function developmentFun () {
//     let numberOfEmployees=0;
//     let averageSalary;
//     let totalSalary=0;
//     for (let i=0; i<forAccounting.length; i++) {
//         if (forAccounting[i].department=="development") {
//             numberOfEmployees+=1
//             totalSalary=totalSalary+forAccounting[i].salary;
//         }
//     }
//     averageSalary=totalSalary/numberOfEmployees;
//     return {totalSalary,averageSalary,numberOfEmployees};
// };


// function financeFun () {
//     let numberOfEmployees=0;
//     let averageSalary;
//     let totalSalary=0;
//     for (let i=0; i<forAccounting.length; i++) {
//         if (forAccounting[i].department=="finance") {
//             numberOfEmployees+=1
//             totalSalary=totalSalary+forAccounting[i].salary;
//         }
//     }
//     averageSalary=totalSalary/numberOfEmployees;
//     return {totalSalary,averageSalary,numberOfEmployees};
// };


//  function render () {
//     const container = document.getElementById("employees-table");
  
//     //*********************************************************************************** */
//         const tableEl = document.createElement('table');
//         container.appendChild(tableEl);
  
//             const trElHeader = document.createElement('tr');
//             tableEl.appendChild(trElHeader);

//                 const departmentName = document.createElement('th');
//                 trElHeader.appendChild(departmentName);
//                 departmentName.textContent = `Department`

//                 const numberOfEmployees = document.createElement('th');
//                 trElHeader.appendChild(numberOfEmployees);
//                 numberOfEmployees.textContent = `Number of Employees`

//                 const departmentAverageSalary = document.createElement('th');
//                 trElHeader.appendChild(departmentAverageSalary);
//                 departmentAverageSalary.textContent = `Department Average Salary`

//                 const departmentTotalSalary = document.createElement('th');
//                 trElHeader.appendChild(departmentTotalSalary);
//                 departmentTotalSalary.textContent = `Department Total Salary`
// //**************************************************************************************** */
//             const trElAdministration = document.createElement('tr');
//             tableEl.appendChild(trElAdministration);
    
//                 const administration = document.createElement('td');
//                 trElAdministration.appendChild(administration);
//                 administration.textContent = `Administration`
    
//                 const administrationNumberOfEmployees = document.createElement('td');
//                 trElAdministration.appendChild(administrationNumberOfEmployees);
//                 administrationNumberOfEmployees.textContent=`${administrationFun().numberOfEmployees}`
    
//                 const administrationAverageSalary = document.createElement('td');
//                 trElAdministration.appendChild(administrationAverageSalary);
//                 administrationAverageSalary.textContent = `${administrationFun().averageSalary}`
    
//                 const administrationTotalSalary = document.createElement('td');
//                 trElAdministration.appendChild(administrationTotalSalary);
//                 administrationTotalSalary.textContent = `${administrationFun().totalSalary}`;
//  };
//   render();














// 'use strict';
// let forAccounting = [];
// function getEmployees() {
//     let employees = localStorage.getItem("allEmployees");
//     let jsObj = JSON.parse(employees);
//     forAccounting = jsObj;
//     console.log(jsObj);
// };
// getEmployees();

// // function administrationFn  () {
// //     // let NumberOfEmployees=0;
// //     let AverageSalary;
// //     let totalSalary=0;
// //     for (let i=0; i<forAccounting.length; i++) {
// //         if (forAccounting[i].department=="administration") {
// //             // NumberOfEmployees+=1
// //             totalSalary=totalSalary+forAccounting[i].salary;
// //         }
// //     }
// //     AverageSalary=totalSalary/NumberOfEmployees;
// //     return {totalSalary,AverageSalary,NumberOfEmployees};
// // };

// // function marketingFn () {
// //     let NumberOfEmployees=0;
// //     let AverageSalary;
// //     let totalSalary=0;
// //     for (let i=0; i<forAccounting.length; i++) {
// //         if (forAccounting[i].department=="marketing") {
// //             NumberOfEmployees+=1
// //             totalSalary=totalSalary+forAccounting[i].salary;
// //         }
// //     }
// //     AverageSalary=totalSalary/NumberOfEmployees;
// //     return {totalSalary,AverageSalary,NumberOfEmployees};
// // };

// // function developmentFn  () {
// //     let NumberOfEmployees=0;
// //     let AverageSalary;
// //     let totalSalary=0;
// //     for (let i=0; i<forAccounting.length; i++) {
// //         if (forAccounting[i].department=="development") {
// //             NumberOfEmployees+=1
// //             totalSalary=totalSalary+forAccounting[i].salary;
// //         }
// //     }
// //     AverageSalary=totalSalary/NumberOfEmployees;
// //     return {totalSalary,AverageSalary,NumberOfEmployees};
// // };

// // function financeFn  () {
// //     let NumberOfEmployees=0;
// //     let AverageSalary;
// //     let totalSalary=0;
// //     for (let i=0; i<forAccounting.length; i++) {
// //         if (forAccounting[i].department=="finance") {
// //             NumberOfEmployees+=1
// //             totalSalary=totalSalary+forAccounting[i].salary;
// //         }
// //     }
// //     AverageSalary=totalSalary/NumberOfEmployees;
// //     return {totalSalary,AverageSalary,NumberOfEmployees};
// // };

// function render() {
//     const container = document.getElementById("employees-table");
//     //****************************************************************************************** */
//     const tableEl = document.createElement('table');
//     container.appendChild(tableEl);

//     const trElHeader = document.createElement('tr');
//     tableEl.appendChild(trElHeader);

//     const departmentName = document.createElement('th');
//     trElHeader.appendChild(departmentName);
//     departmentName.textContent = `Department`

//     const numberOfEmployees = document.createElement('th');
//     trElHeader.appendChild(numberOfEmployees);
//     numberOfEmployees.textContent = `Number of Employees`

//     const departmentAverageSalary = document.createElement('th');
//     trElHeader.appendChild(departmentAverageSalary);
//     departmentAverageSalary.textContent = `Department Average Salary`

//     const departmentTotalSalary = document.createElement('th');
//     trElHeader.appendChild(departmentTotalSalary);
//     departmentTotalSalary.textContent = `Department Total Salary`
//     /*********************************************************************************************** */
//     const trElAdministration = document.createElement('tr');
//     tableEl.appendChild(trElAdministration);

//     const administration = document.createElement('td');
//     trElAdministration.appendChild(administration);
//     administration.textContent = `Administration`;

//     const administrationNumberOfEmployees = document.createElement('td');
//     trElAdministration.appendChild(administrationNumberOfEmployees);
//     function administrationNumOfEmployees() {
//         let NumberOfEmployees = 0;
//         for (let i = 0; i < forAccounting.length; i++) {
//             if (forAccounting[i].department == "administration") {
//                 NumberOfEmployees += 1;
//             }
//         } 
//         administrationNumberOfEmployees.textContent = `${NumberOfEmployees}`;
//         return NumberOfEmployees;
//     };
//     administrationNumOfEmployees();

//     const administrationAverageSalary = document.createElement('td');
//     trElAdministration.appendChild(administrationAverageSalary);
//     function administrationAvgSalary() {
//         let AverageSalary;
//         let totalSalary = 0;
//         let NumberOfEmployees = 0;
//         for (let i = 0; i < forAccounting.length; i++) {
//             if (forAccounting[i].department == "administration") {
//                 totalSalary = totalSalary + forAccounting[i].salary;
//                 NumberOfEmployees += 1;
//             }
//         }
//         AverageSalary = totalSalary / NumberOfEmployees;
//         administrationAverageSalary.textContent = `${AverageSalary}`;
//     };
//     administrationAvgSalary();



//     const administrationTotalSalary = document.createElement('td');
//     trElAdministration.appendChild(administrationTotalSalary);
//     function administrationTotSalary() {
//         let totalSalary = 0;
//         for (let i = 0; i < forAccounting.length; i++) {
//             if (forAccounting[i].department == "administration") {
//                 totalSalary = totalSalary + forAccounting[i].salary;
//             }
//         }
//         administrationTotalSalary.textContent = `${totalSalary}`;
//     };
//     administrationTotSalary();
//     //************************************************************************************************ */
//     const trElMarketing = document.createElement('tr');
//     tableEl.appendChild(trElMarketing);

//     const marketing = document.createElement('td');
//     trElMarketing.appendChild(marketing);
//     marketing.textContent = `Marketing`;

//     const marketingNumberOfEmployees = document.createElement('td');
//     trElMarketing.appendChild(marketingNumberOfEmployees);

//     function marketingNumOfEmployees() {
//         let numOfEmployees = 0;
//         for (let i = 0; i < forAccounting.length; i++) {
//             if (forAccounting[i].department == "marketing") {
//                 numOfEmployees += 1;
//             }
//         }
//         marketingNumberOfEmployees.textContent = `${numOfEmployees}`;
//     };
//     marketingNumOfEmployees();

//     const marketingAverageSalary = document.createElement('td');
//     trElMarketing.appendChild(marketingAverageSalary);

//     function marketingAvgSalary() {
//         let averageSalary;
//         let totalSalary = 0;
//         let numOfEmployees = 0;
//         for (let i = 0; i < forAccounting.length; i++) {
//             if (forAccounting[i].department == "marketing") {
//                 totalSalary += forAccounting[i].salary;
//                 numOfEmployees += 1;
//             }
//         }
//         averageSalary = totalSalary / numOfEmployees;
//         marketingAverageSalary.textContent = `${averageSalary}`;
//     };
//     marketingAvgSalary();

//     const marketingTotalSalary = document.createElement('td');
//     trElMarketing.appendChild(marketingTotalSalary);

//     function marketingTotSalary() {
//         let totalSalary = 0;
//         for (let i = 0; i < forAccounting.length; i++) {
//             if (forAccounting[i].department == "marketing") {
//                 totalSalary += forAccounting[i].salary;
//             }
//         }
//         marketingTotalSalary.textContent = `${totalSalary}`;
//     };
//     marketingTotSalary();

//     //******************************************************************************************************************* */
//     const trElDevelopment = document.createElement('tr');
//     tableEl.appendChild(trElDevelopment);

//     const development = document.createElement('td');
//     trElDevelopment.appendChild(development);
//     development.textContent = `Development`;

//     const developmentNumberOfEmployees = document.createElement('td');
//     trElDevelopment.appendChild(developmentNumberOfEmployees);

//     function developmentNumOfEmployees() {
//         let numberOfEmployees = 0;
//         for (let i = 0; i < forAccounting.length; i++) {
//             if (forAccounting[i].department == "development") {
//                 numberOfEmployees += 1;
//             }
//         }
//         developmentNumberOfEmployees.textContent = `${numberOfEmployees}`;
//     };

//     developmentNumOfEmployees();

//     const developmentAverageSalary = document.createElement('td');
//     trElDevelopment.appendChild(developmentAverageSalary);

//     function developmentAvgSalary() {
//         let averageSalary;
//         let totalSalary = 0;
//         let numberOfEmployees = 0;
//         for (let i = 0; i < forAccounting.length; i++) {
//             if (forAccounting[i].department == "development") {
//                 totalSalary = totalSalary + forAccounting[i].salary;
//                 numberOfEmployees += 1;
//             }
//         }
//         averageSalary = totalSalary / numberOfEmployees;
//         developmentAverageSalary.textContent = `${averageSalary}`;
//     };

//     developmentAvgSalary();

//     const developmentTotalSalary = document.createElement('td');
//     trElDevelopment.appendChild(developmentTotalSalary);

//     function developmentTotSalary() {
//         let totalSalary = 0;
//         for (let i = 0; i < forAccounting.length; i++) {
//             if (forAccounting[i].department == "development") {
//                 totalSalary = totalSalary + forAccounting[i].salary;
//             }
//         }
//         developmentTotalSalary.textContent = `${totalSalary}`;
//     };

//     developmentTotSalary();

//     //*********************************************************************************************************************** */
//     const trElFinance = document.createElement('tr');
//     tableEl.appendChild(trElFinance);

//     const finance = document.createElement('td');
//     trElFinance.appendChild(finance);
//     finance.textContent = `Finance`;

//     const financeNumberOfEmployees = document.createElement('td');
//     trElFinance.appendChild(financeNumberOfEmployees);

//     function financeNumOfEmployees() {
//         let numOfEmployees = 0;
//         for (let i = 0; i < forAccounting.length; i++) {
//             if (forAccounting[i].department == "finance") {
//                 numOfEmployees += 1;
//             }
//         }
//         financeNumberOfEmployees.textContent = `${numOfEmployees}`;
//     };
//     financeNumOfEmployees();

//     const financeAverageSalary = document.createElement('td');
//     trElFinance.appendChild(financeAverageSalary);

//     function financeAvgSalary() {
//         let averageSalary;
//         let totalSalary = 0;
//         let numOfEmployees = 0;
//         for (let i = 0; i < forAccounting.length; i++) {
//             if (forAccounting[i].department == "finance") {
//                 totalSalary = totalSalary + forAccounting[i].salary;
//                 numOfEmployees += 1;
//             }
//         }
//         averageSalary = totalSalary / numOfEmployees;
//         financeAverageSalary.textContent = `${averageSalary}`;
//     };
//     financeAvgSalary();

//     const financeTotalSalary = document.createElement('td');
//     trElFinance.appendChild(financeTotalSalary);

//     function financeTotSalary() {
//         let totalSalary = 0;
//         for (let i = 0; i < forAccounting.length; i++) {
//             if (forAccounting[i].department == "finance") {
//                 totalSalary = totalSalary + forAccounting[i].salary;
//             }
//         }
//         financeTotalSalary.textContent = `${totalSalary}`;
//     };
//     financeTotSalary();

//     const trElFooter = document.createElement('tr');
//     tableEl.appendChild(trElFooter);

//     const footer = document.createElement('td');
//     trElFooter.appendChild(footer);
//     footer.textContent = `Summation`;

//     const summationNumberOfEmployees = document.createElement('td');
//     trElFinance.appendChild(summationNumberOfEmployees);
//     summationNumberOfEmployees.textContent = `${administrationNumOfEmployees().NumberOfEmployees+marketingNumOfEmployees().NumberOfEmployees+developmentNumOfEmployees().NumberOfEmployees+financeNumOfEmployees().NumberOfEmployees}`;


// };
// render();