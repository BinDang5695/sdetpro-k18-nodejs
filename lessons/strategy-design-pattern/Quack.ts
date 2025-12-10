import QuackBehaviour from "./QuackBehavior";

export default class Quack implements QuackBehaviour{

    quack(): void{
        console.log("Quack!Quack!");
    }

}   