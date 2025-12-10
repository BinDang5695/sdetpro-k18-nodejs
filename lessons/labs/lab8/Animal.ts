export default class Animal{

    protected name: string;
    protected speed: number;

    constructor(name: string, speed: number){
        this.name = name;
        this.speed = speed;
    }

    public getName(): string{
        return this.name;
    }

    public getSpeed(): number{
        return this.speed;
    }

}