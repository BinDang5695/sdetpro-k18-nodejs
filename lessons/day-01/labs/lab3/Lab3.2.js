// Method 1
let intArr = [1,2,3,4,5];
let maximumNumber = Math.max(...intArr);
let minimumNumber = Math.min(...intArr);
console.log(`Maximum Number in Array: ${maximumNumber}`);
console.log(`Minimum Number in Array: ${minimumNumber}`);

function getMaximumNumber(isMaximumNumber){
    return isMaximumNumber;
}

function getMinimumNumber(isMinimumNumber){
    return isMinimumNumber;
}

// Method 2
let array = [1,1,5,1,4,5,5,1,5];

let currentMinValue = array[0];
let currentMaxValue = array[0];
let minValueIndexes = [0];
let maxValueIndexes = [0];

for (let index = 1; index < array.length; index++){
    const currentValue = array[index];
    if (currentValue < currentMinValue){
        currentMinValue = currentValue;
        minValueIndexes = [];
        minValueIndexes.push(index);
    } else if (currentValue === currentMinValue){
        minValueIndexes.push(index);
    }

    if (currentValue > currentMaxValue){
        currentMaxValue = currentValue;
        maxValueIndexes = [];
        maxValueIndexes.push(index);
    } else if(currentValue === currentMaxValue){
        maxValueIndexes.push(index);
    }
}

if (currentMinValue === currentMaxValue){
    console.log(`Array contains same value as: ${currentMinValue}`);
} else {
    console.log(`Min value: ${currentMinValue}, minValueIndexes: ${minValueIndexes}`);
    console.log(`Max value: ${currentMaxValue}, maxValueIndexes: ${maxValueIndexes}`);
}