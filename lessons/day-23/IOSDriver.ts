import AppiumDriver from "./AppiumDriver";

export default class IOSDriver extends AppiumDriver{

    public launch(): void {
        throw new Error("Launching IOS App.");
    }

    public closeConnection(): void {
        throw new Error("Closing connection for IOS.");
    }

}