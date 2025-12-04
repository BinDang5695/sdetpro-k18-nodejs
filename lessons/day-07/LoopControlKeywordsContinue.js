
let array = [1,2,3,4,5];
const TARGET_NUMBER = 3;
printArrayWithSkippedValue(array, TARGET_NUMBER);
console.log('-----');
pri

for (let index = 0; index < array.length; index++){
    const value = array[index];
    if(value === TARGET_NUMBER){
        continue;
    }else{
        console.log(`Hello you ${value}`);
    }
    console.log('4353534');
}

function printFullArray(array){
    for (let index = 0; index < array.length; index++)
    {
        const value = array[index];
        console.log(`Hello you ${value}`);
    }
}

function printArrayWithSkippedValue(array, skippedValue){
    for (let index = 0; index < array.length; index++)
    {
        const value = array[index];
        if (value === skippedValue){
            continue;
        } else {
            console.log(`Hello you ${value}`);
        }
    }
}
