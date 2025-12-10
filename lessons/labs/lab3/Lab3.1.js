// Method 1
let intArr = [1,2,3,4,5];
let evenNumberInArray = intArr.filter(getEvenNumber);
let oddNumberInArray = intArr.filter(getOddNumber);
console.log(`Even Number In Array: ${evenNumberInArray}`);
console.log(`Odd Number In Array: ${oddNumberInArray}`);

function getEvenNumber(isEvenNumber){
    return isEvenNumber % 2 == 0;
}

function getOddNumber(isOddNumber){
    return isOddNumber % 2 != 0;
}

// Method 2
const readline = require("readline-sync");

let totalArrayNums = Number(readline.question("How many numbers: "));
if (totalArrayNums > 10 || totalArrayNums < 2){
    console.log(`We accept from 2-10 numbers only!`);
    process.exit(1);
}

// Loop to add numbers into array
let array = [];
for (let index = 0; index < totalArrayNums; index++){
    let addNumber = Number(readline.question(`Please input number ${index + 1}: `));
    array.push(addNumber);
}

let oddNumCount = 0;
let oddNums = [];
let evenNumCount = 0;
let evenNums = [];

for (let index = 0; index < array.length; index++){
    const value = array[index];
    if (isOddNumber(value)){
        oddNumCount++;
        oddNums.push(value);
    }else{
        evenNumCount++;
        evenNums.push(value);
    }
}
console.log(`Total odd number: ${oddNumCount} from array ${oddNums}`);
console.log(`Total even number: ${evenNumCount} from array ${evenNums}`);

function isOddNumber(number){
    return number % 2 !== 0;
}




