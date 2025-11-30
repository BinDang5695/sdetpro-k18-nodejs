let myNumber1 = 1;
let myNumber2 = 2;

let sum = myNumber1 + myNumber2;
let subtraction = myNumber2 - myNumber1;
console.log("Sum = " + sum + "Subtraction = " + subtraction);

//String template:
console.log(`Sum = ${sum} and Subtraction = ${subtraction}`);

console.log(`5/2: ${5/2}`);

let roundingNearest = Math.round(19/3);
console.log(`roundingNearest = ${roundingNearest}`);

let roundingFloor = Math.floor(19/3);
console.log(`roundingFloor = ${roundingFloor}`);

let roundingCelling = Math.ceil(19/3);
console.log(`roundingCelling = ${19/3}`);

let anotherResult = 10/3;
let maxFloatingNumber = 2;
let toFixedNumber = anotherResult.toFixed(maxFloatingNumber); //làm tròn 2 số thập phân
console.log(`toFixedNumber = ${toFixedNumber}`);

let squareNumber = 9 ** 3;
console.log(`squareNumber = ${squareNumber}`);