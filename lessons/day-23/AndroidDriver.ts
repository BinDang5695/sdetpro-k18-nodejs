import AppiumDriver from "./AppiumDriver";

export default class AndroidDriver extends AppiumDriver{

    public launch(): void {
        console.log("Launching Android App...");
    }

    public closeConnection(): void {
        console.log("Closing connection for Android...");
    }

}