// for (let index = 0; index < 5; index++){
//     console.log(index);
// }

// let index = 0;
// while (index < 5){
//     console.log(index);
//     index++;
// }

const readline = require("readline-sync");

/**
 * --- LUCKY NUMBER GAME ---
 * 1. Guess a number (1 -> 10)
 * 0. Exit!
 * 
*/
let isStillPlaying = true;
while (isStillPlaying){
    printGameMenu();
    let userOption = getUserOption();

    if (userOption === 0){
        isStillPlaying = false;
    } else if(userOption === 1){
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(`Lucky number is ${randomNumber}`);
    }else{
        console.log('Nhập lụi rồi Tèo ơi!!');
    }
}
console.log(`Hẹn gặp lại`);

function printGameMenu(){
    console.log(`
/**
 * --- LUCKY NUMBER GAME ---
 * 1. Guess a number (1 -> 10)
 * 0. Exit!
 * 
*/
    `);
}

function getUserOption(){
    return Number(readline.question('Please select an option: '));
}
