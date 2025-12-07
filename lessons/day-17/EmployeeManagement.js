const Employee = require("./EmployeeModel");
const SalaryController = require("./SalaryController");

const teo = new Employee(20000);
console.log(teo._salary);

const ti = new Employee(19000);
console.log(ti._salary);

const salaryController = new SalaryController();

const totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log(`Total salary: ${totalSalary}`);
