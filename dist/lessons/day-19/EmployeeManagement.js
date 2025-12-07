import Employee from "./Employee.js";
import { SalaryController } from "./SalaryController.js";
const teo = new Employee(20000);
const ti = new Employee(19000);
const salaryController = new SalaryController();
const totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log(`Total salary: ${totalSalary}`);
//# sourceMappingURL=EmployeeManagement.js.map