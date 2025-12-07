import FTE from "./FTE";
import PartimeEmployee from "./PartimeEmployee";
import {SalaryController} from "./SalaryController";

const MAX_BONUS = 1000;
const teo = new FTE(20000);
teo.setWorkingDays(250);
teo.setBonus(MAX_BONUS);
console.log(`Teo's bonus: ${teo.getBonus()}`);

const ti = new PartimeEmployee(19000);
console.log(ti.getName());
console.log(`Ti's bonus: ${ti.getBonus()}`);

const salaryController = new SalaryController();

const totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log(`Total salary: ${totalSalary}`);
