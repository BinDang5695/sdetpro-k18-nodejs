import QuackBehaviour from "./QuackBehavior";

export default class Squeak implements QuackBehaviour{

    quack(): void{
        console.log("Squeak!");
    }

}