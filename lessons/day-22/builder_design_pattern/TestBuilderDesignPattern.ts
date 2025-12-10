import House from "./HouseWithBuilderDesignPattern";

let builder = new House.Builder();
builder.setTopRoofColor("Red");
builder.setMainDoorNumber(1);
builder.setWindowNumber(4);
builder.setColor("Light Blue");
let myHouse: House = builder.build();
console.log(myHouse);

