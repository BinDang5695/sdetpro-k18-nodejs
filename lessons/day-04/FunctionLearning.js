
const readLine = require('readline-sync');

let inputUserNumber = getUserInputNumber();
console.log(`inputUserNumber = ${inputUserNumber}`);

let result = addNumber(1,2);
console.log(`Add result: ${result}`);

// Method 02: [ Function Expression ] | NO hoisting
const getUserInputNumberFnExpression = function(){
    let inputNumber = readLine.question('Your number: ');
    return Number(inputNumber);
}

// Method 01: [ Function Declaration ] | hoisting
function getUserInputNumber(){
    let inputNumber = readLine.question('Your number: ')
    return Number(inputNumber);
}

function addNumber(number1, number2){
    if(number1 && number2){
        console.log(`number1 = ${number1}, number2 = ${number2}`);
        return number1 + number2
    }else{
        throw new Error('Number 1 and Number 2 must be numbers!');
    }
}

