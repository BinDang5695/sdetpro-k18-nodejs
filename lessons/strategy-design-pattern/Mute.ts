import QuackBehaviour from "./QuackBehavior";

export default class Mute implements QuackBehaviour{

    quack(): void{
        console.log("I'm mute");
    }

}