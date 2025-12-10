export default class HouseWithBuilder{

    private topRoofColor: string = "Red";
    private windowNumber: number = 4;
    private color: string = "White";
    private mainDoorNumber: number = 1;

    private constructor(){

    }

        // READ ONLY
        getTopRoofColor(){
            return this.topRoofColor;
        }

        getWindowNumber(){
            return this.windowNumber;
        }

        getColor(){
            return this.color;
        }

        getMainDoorNumber(){
            return this.mainDoorNumber;
        }

        // Sale Department - Inner Class - WRITE ONLY

        public static Builder = class {
            private house: HouseWithBuilder = new HouseWithBuilder();

            public setTopRoofColor(topRoofColor: string){
                this.house.topRoofColor = topRoofColor;
            }

            public setWindowNumber(windowNumber: number){
                this.house.windowNumber = windowNumber;
            }

            public setMainDoorNumber(mainDoorNumber: number){
                this.house.mainDoorNumber = mainDoorNumber;
            }

            public setColor(color: string){
                this.house.color = color;
            }

            // Sign the contract
            public build(): HouseWithBuilder{
                return this.house;
            }
        }


    }