import FTE from "./FTE";
import PartimeEmployee from "./PartimeEmployee";
import {SalaryController} from "./SalaryController";

const teo = new FTE(20000, 250);
console.log(`Teo's bonus: ${teo.getBonus()}`);

const ti = new PartimeEmployee(19000, 200);
console.log(`Ti's bonus: ${ti.getBonus()}`);

const salaryController = new SalaryController();

const totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log(`Total salary: ${totalSalary}`);
