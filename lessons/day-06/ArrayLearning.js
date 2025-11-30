
let myArray = [10,20,30,40,50];
console.log(`Array length: ${myArray.length}`);

let lastElementIndex = myArray.length - 1;
console.log(`Last Element Index:  ${lastElementIndex}`);
let lastElementValue = myArray[lastElementIndex];
console.log(`Last element's value:  ${myArray[myArray.length - 1]}`);

myArray[lastElementIndex] = [100];

myArray[10] = 1000;

for(index = 0; index < myArray.length; index++){
    console.log(`Value of Array at index number ${index}:  ${myArray[index]}`);
}

