function Employee (employeeId, fullName, department, level, imageURL, salary) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = salary;
};

Employee.prototype.calculateSalary = function() {
    let min, max;
  
    switch (this.level) {
      case "junior":
        min = 500;
        max = 1000;
        break;
      case "midSenior":
        min = 1000;
        max = 1500;
        break;
      case "senior":
        min = 1500;
        max = 2000;
        break;
      default:
        min = 0;
        max = 0;
    }
  
    let difference = max - min;
    let salary = Math.floor(Math.random() * difference) + min;
  
    return salary;
  };
  
  function netSalary (salary) {
    let netSalary= salary - (salary*0.075);
    return netSalary;
  };