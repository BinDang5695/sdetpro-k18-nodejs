let array = [1,2,3,4,5];

let doubleValueArray = array.map(doubleValue);
function doubleValue(value, index, array){
    return value * 2;
}
console.log(`Orginal array: ${array}`);
console.log(`Double value array: ${doubleValueArray}`);

// SORT - string
let strings = ['B', 'C', 'A'];
strings.sort();
console.log(`Sorted: ${strings}`);
strings.reverse();
console.log(`Reserved: ${strings}`);

// SORT - number
let numbers = [100,19,22];
numbers.sort();
console.log(`Numbers after sorted with default method: ${numbers}`);
numbers.sort(sortNumberASC);
console.log(`Numbers after sorted with custom rule - ASC: ${numbers}`);
numbers.sort(sortNumberDESC);
console.log(`Numbers after sorted with custom rule - DESC: ${numbers}`);

function sortNumberASC(number1,number2){
    return number1 - number2;
}

function sortNumberDESC(number1,number2){
    return number2 - number1;
}

// MIXED contents
let mixContents = ['a','A','1'];
mixContents.sort;
console.log(mixContents);






