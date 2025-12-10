export default class Person{

    private name: string = "";
    private age: number = 0;

    constructor(name: string, age: number){
        this.validateAge(age);
        this.age = age;
        this.name = name;
    }

    // Service method
    public setAge(age: number){
        this.validateAge(age);
        this.age = age;
    }

    // Support method | DRY
    private validateAge(age: number){
        if(age < 0){
            throw new Error(`Agr can't be less than zero`);
        }
    }



}