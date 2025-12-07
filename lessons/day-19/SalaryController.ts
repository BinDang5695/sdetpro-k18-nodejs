import Employee from "./Employee";

export class SalaryController {
    
    public getTotalSalary(employeesList: Employee[]): number {
        let totalSalary = 0;
        for (const emp of employeesList) {
            totalSalary = totalSalary + emp.getSalary();
        }
        return totalSalary;
    }
}