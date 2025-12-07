
class Person{

    constructor(name,age){
        if (age < 0) {
            throw new Error("Age cannot be negative");
        }
        this._name = name;
        this._age = age;
    }

    // Getter: is a function that return the CURRENT value of a property
    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }

    set name(name){
        this._name = name;
    }

    set age(age){
        this._age = age;
    }
}

module.exports = Person;