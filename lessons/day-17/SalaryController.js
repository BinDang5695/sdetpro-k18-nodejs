
class SalaryController {

    getTotalSalary(employeeList) {
        let totalSalary = 0;
        for (const emp of employeeList) {
            totalSalary = totalSalary + emp.salary;
        }
        return totalSalary;
    }
}

module.exports = SalaryController;