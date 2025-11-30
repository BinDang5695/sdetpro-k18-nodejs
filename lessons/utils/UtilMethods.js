const readLine = require('readline-sync');

const mmangCut = function(){
    let inputNumber = readLine.question('Your number: ');
    return Number(inputNumber);
}

function chomChom(){
    let inputNumber = readLine.question('Your number: ')
    return Number(inputNumber);
}

// Common JS Module
module.exports = {
    teo: chomChom,
    ti: mmangCut,
}