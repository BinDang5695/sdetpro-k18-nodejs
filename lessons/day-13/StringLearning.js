
let myString = `Hello, đây là dấu nháy kép: \`.             `;
console.log(myString);

// Length
const strLength = myString.length;
console.log(`strLength: ${strLength}`);

// Get a character at a position
for(let index = 0; index < strLength; index++){
    //console.log(myString.chartAt(index))
};

// Get rid of spaces at the beginning and the end of a string
console.log(myString.trim());
console.log(myString.length);

// Replace
// tmoi mnay gmap mnmhamu 7h <--- encoded
// Key: em phai hy sinh
// toi nay gap nhau 7h <--- decoded
let encodedString = "tmoi mnay gmap mnmhamu 7h";
let decodedString = encodedString.replaceAll("m", "");
console.log(`encodedString: ${encodedString}`);
console.log(`decodedString: ${decodedString}`);

// Regex - Regular Expression
console.log(encodedString.replace(/m/gi, ""));

/**
 * Preparation: 30 minutes
 * Cooking: 120 minutes
 * Total: 150 minutes
 */

let totalCookingTimeFromUI = "Total: 150 minutes";
let totalCookingTimeString = totalCookingTimeFromUI.replace(/[^0-9]/gim, "");
console.log(Number(totalCookingTimeString));

console.log(`Received Number: ${returnNumberOne()}`);

function returnNumberOne(){
    return 1;
}

// Concatenation
let firstString = "Hello ";
let secondString = "Teo";
let fullString = (firstString + secondString).concat("What is your name?");
console.log(`fullString: ${fullString}`);

console.log(Number(totalCookingTimeString + 1));

// Sub-string: substring
let stringToBeCut = "https://sdetpro.com";
// Inclusive
let startIndex = 0;
// Exclusive
let endIndex = 5;
let subString = stringToBeCut.substring(startIndex, endIndex);
console.log(subString);

// Split
console.log(stringToBeCut.split(""));

let obj = {};
console.log(!obj.myName);
if (!obj.myName){
    console.log(`myNameProperty is not existing`);
}

console.log(obj.hasOwnProperty("myName"));












