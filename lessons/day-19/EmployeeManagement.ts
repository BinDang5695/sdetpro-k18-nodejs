import FTE from "./FTE";
import PartimeEmployee from "./PartimeEmployee";
import {SalaryController} from "./SalaryController";

const teo = new FTE(20000);
console.log(teo.getName);

const ti = new PartimeEmployee(19000);
console.log(ti.getName);

const salaryController = new SalaryController();

const totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log(`Total salary: ${totalSalary}`);
