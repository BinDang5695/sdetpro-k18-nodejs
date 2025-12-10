const readline = require('readline-sync');

const inputString = getSentenceFromUser();
const individualWords = processInputString(inputString);
const groupWords = groupWordFromString(individualWords);
console.log(groupWords);

// Functions
function getSentenceFromUser(){
    return readline.question('Please input your sentence: ');
}

function processInputString(inputString){
    return inputString.replace(/,/gi, "").split(" ");
}

function groupWordFromString(individualWords){
    let returnedObj = {};
    for (const word of individualWords){
        if (returnedObj[word]){
            returnedObj[word] = returnedObj[word] + 1;
        } else {
            returnedObj[word] = 1;
        }
    }
    return returnedObj;
}
