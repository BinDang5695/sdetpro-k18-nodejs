import Duck from "./Duck";

export default class DuckController{


    public performQuack(duck: Duck): void {
        console.log("Do other things...");
        duck.performQuack();
        
    }
}