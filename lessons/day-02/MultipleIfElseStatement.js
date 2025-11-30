const readLine = require("readline-sync");
let clientAge = Number(readLine.question("Your age: "));

let someValueMeaningful = clientAge >= 18 && clientAge <=70;

if(clientAge < 18){
    console.log(`Can not place order `);
} else if(someValueMeaningful){
    console.log(`Can place order`);
} else{
    console.log(`Can not place order`);
}
