export default class House {

    private topRoofColor: string = "";
    private windowNumber: number = 0;
    private color: string = "";
    private mainDoorNumber: number = 0;

    // SETTERS
    public setTopRoofColor(topRoofColor: string){
        this.topRoofColor = topRoofColor;
    }

    public setWindowNumber(windowNumber: number){
        this.windowNumber = windowNumber;
    }


}

// Properties values are interchangeable by mistake
let nhacap4 = new House();
nhacap4.setTopRoofColor("Red");
nhacap4.setWindowNumber(4);