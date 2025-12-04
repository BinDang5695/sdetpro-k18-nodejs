const readline = require("readline-sync");

let userInput = getUserInput();

// if (userInput === 2){
//     console.log("Monday");
// } else if (userInput === 3){
//     console.log("Tuesday");
// } else if (userInput === 3){
//     console.log("Wednesday");
// } else if (userInput === 3){
//     console.log("Thursday");
// } else if (userInput === 3){
//     console.log("Friday");
// } else if (userInput === 3){
//     console.log("Saturday");
// } else if (userInput === 3){
//     console.log("Sunday");
// } else{
//     console.log("Undefined!");
// }

switch(userInput){
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    case 8:
        console.log("Sunday");
        break;
    default:
        console.log("Undefined!");
        break;
}

function getUserInput(){
    return Number(readline.question('Please enter your number: '));
}