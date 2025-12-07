import Employee from "./Employee.js";
export class SalaryController {
    getTotalSalary(employeesList) {
        let totalSalary = 0;
        for (const emp of employeesList) {
            totalSalary = totalSalary + emp.getSalary();
        }
        return totalSalary;
    }
}
//# sourceMappingURL=SalaryController.js.map