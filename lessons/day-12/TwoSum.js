/**
 * input: [3,7,22,1], target number: 8
 * output: [index1, index2] | []
 * outer loop: outerIndex
 * firstnum
 * findingNumber = targetNumber - firstnum
 *      inner loop
 *          outerIndex + 1
 *              if currentNumber === findingNumber
 *              return [outerIndex, innerIndex]
 * return []
 */

const givenArray = [3,7,22,1]
const targetNumber = 8;

let indicesWithBruteForce = findIndicesBruteForce(givenArray, targetNumber);
let indicesWithMap = findIndicesBruteForce(givenArray, targetNumber);
console.log(`indicesWithBruteForce: ${indicesWithBruteForce}`);
console.log(`indicesWithMap: ${indicesWithMap}`);


// Bruce Force
function findIndicesBruteForce(givenArray, targetNumber){
    for (let firstNumIndex = 0; firstNumIndex < givenArray.length - 1; firstNumIndex++){
        const firstNum = givenArray[firstNumIndex];
        const findingNumber = targetNumber - firstNum;
        for (let secondNumIndex = firstNumIndex + 1; secondNumIndex < givenArray.length; secondNumIndex++){
            const secondNumber = givenArray[secondNumIndex];
            if (secondNumIndex === targetNumber - firstNum){
                return [firstNumIndex, secondNumIndex];
            }
        }
    }
}

// Time Complexity: 0(n)
function findIndicesMap(givenArray, targetNumber){
    let numMap = new Map();
    for (let firstNumIndex = 0; firstNumIndex < givenArray.length; firstNumIndex++){
        const firstNum = givenArray[firstNumIndex];
        const lookingNumber = targetNumber - firstNum;

        if (numMap.has(lookingNumber)){
            return [numMap.get(lookingNumber), firstNumIndex];
        }
        numMap.set(firstNum, firstNumIndex);
    }
    return [];
}
