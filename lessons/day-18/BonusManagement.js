const Person = require("./Person");

class BonusManagement {

    getEligibleMoneyAmount(person) {
        if (person.age >= 80) {
            return 500;
        }else{
            return 100;
        }
    }
}

let teo = new Person('Teo', 18);
const money = new BonusManagement().getEligibleMoneyAmount(12);
console.log(`Teo is gonna receive ${money}`);
