let intArr = [1,2,3,4,5];
let evenNumberInArray = intArr.filter(getEvenNumber);
let oddNumberInArray = intArr.filter(getOddNumber);
console.log(`Even Number In Array: ${evenNumberInArray}`);
console.log(`Odd Number In Array: ${oddNumberInArray}`);

function getEvenNumber(isEvenNumber)
{
    return isEvenNumber % 2 == 0;
}

function getOddNumber(isOddNumber)
{
    return isOddNumber % 2 != 0;
}


