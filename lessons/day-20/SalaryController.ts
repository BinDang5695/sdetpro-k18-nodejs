import Employee from "./Employee";

export class SalaryController {
    
    public getTotalSalary(employeesList: Employee[]): number {
        let totalSalary = 0;
        for (const emp of employeesList) {
            totalSalary = totalSalary + emp.getSalary() + emp.getBonus();
        }
        return totalSalary;
    }

    public sortByName(employeesList: Employee[], rule: string){
        const copied = [...employeesList];
        if(rule === "ASC"){
            return copied.sort(function(a,b){
                return a.getName().localeCompare(b.getName())
            });
        }else if(rule === "DESC"){
            return copied.sort(function (a, b){
                return b.getName().localeCompare(a.getName());
            })
        }else {
            console.log(`Invalid rule...`);
        }
        return copied;
    }
}