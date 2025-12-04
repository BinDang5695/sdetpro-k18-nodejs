const readline = require("readline-sync");

let guessingTime = 0;
let randomNumber = generateRandomNumber();

do {
    let userNumber = getUserNumber();
    if (userNumber === randomNumber){
        console.log(`Hooray!`);
        break;
    }
    guessingTime++;
} while (guessingTime < 3);

if (guessingTime === 3){
    console.log(`Thôi đừng buồn Tèo ơi!`);
} else {
    console.log(`Hẹn gặp lại!`);
}

function getUserNumber(){
    return Number(readline.question(`Please enter your number: `));
}

function generateRandomNumber(){
    return Math.floor(Math.random() * 10 + 1);
}