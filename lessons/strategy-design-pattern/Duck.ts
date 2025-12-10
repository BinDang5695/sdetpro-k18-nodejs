import FlyBehaviour from "./FlyBehavior";
import QuackBehaviour from "./QuackBehavior";

export default abstract class Duck{

    protected quackBehavior: QuackBehaviour;
    protected flyBehavior: FlyBehaviour;

    constructor(quackBehavior: QuackBehaviour, flyBehavior: FlyBehaviour){
        this.quackBehavior = quackBehavior;
        this.flyBehavior = flyBehavior;
    }

    public performQuack(){
        this.quackBehavior.quack();
    }

    public performFly(){
        this.flyBehavior.fly();
    }

    public setQuackBehaviour(quackBehavior: QuackBehaviour){
        this.quackBehavior = quackBehavior;
    }

    public setFlyBehaviour(flyBehavior: FlyBehaviour){
        this.flyBehavior = flyBehavior;
    }
}