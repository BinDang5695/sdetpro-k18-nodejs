
let myArray = [1,2,3,4,5]

let myEvenNumbers = myArray.filter(isEvenNumber);
console.log(myEvenNumbers);

function isEvenNumber(number){
    return number % 2 == 0;
}

function isOddNumber(value, index, array){
    return !isEvenNumber(value, index, array);
}

// Delete | Splice
let startIndex = 2;
let deleteCount = 1;
let insertValue = 10;
let clonedArray = [...myArray];
clonedArray.splice(startIndex, deleteCount, insertValue);
console.log(clonedArray);
console.log(myArray);
