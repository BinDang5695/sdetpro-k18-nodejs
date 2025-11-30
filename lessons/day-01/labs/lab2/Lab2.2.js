const inputNumber = require('readline-sync');
let theNumber = Number(inputNumber.question('The number '))

if(theNumber % 2 == 0){
    console.log(`The number ${theNumber} is even number`);
}else{
    console.log(`The number ${theNumber} is odd number`)
}