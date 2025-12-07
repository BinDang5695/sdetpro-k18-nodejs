
class Person{

    constructor(name,age){
        this._name = name;
        this._age = age;
    }

    // Getter: is a function that return the CURRENT value of a property
    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }
}

module.exports = Person;