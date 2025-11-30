const readLine = require(`readline-sync`); //kiểu nhập dữ liệu từ bàn phím

let arrivalTimeStr = readLine.question(`Arrival Time: `);
//Convert a string into number
let arrivalTime = Number(arrivalTimeStr);
let isHeonTime = (Number(arrivalTimeStr) === 7);

if(isHeonTime){
    console.log(`Perfect`)
} else{
    console.log(`Bad`)
}

//Ternary operator: Toán tử 3 ngôi
let msg = isHeonTime ? 'Let\'s talk' : 'Write a letter';
console.log(msg);

if(!msg){
    console.log('Let\'s talk');
}else{
    console.log('Write a letter');
}

if(isSalaryIncreased){
    if(isSightlyDiff){
        console.log(`Stay at company`)
    } else{
        console.log(`Stay for a while`)
    }
} else{
    console.log(`Leave`)
}