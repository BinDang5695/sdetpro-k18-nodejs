
const readLine = require('readline-sync');
let height = Number(readLine.question('Your height(m): '));
let weight = Number(readLine.question('Your weith(kg): '))
let BMI = weight / (height * height);

if(BMI < 18.5){
    console.log(`Underweight because BMI = ${BMI} < 18.5`)
    console.log(`So sick! Need to increase lot of your weight`)
}else if(BMI >= 18.5 && BMI <= 24.9){
    console.log(`Normal weight because BMI = ${BMI} between 18.5 and 24.9`)
    console.log(`Too standard! Try to promote`)
}else if(BMI >= 25 && BMI <= 29.9){
    console.log(`Overweight because BMI = ${BMI} between 25 and 29.9`)
    console.log(`A bit heavy! Try to decrease your weight`)
}else{
    console.log(`Obesity because BMI = ${BMI} of 30 or greater`)
    console.log(`You are Obesity! Need to decrease lot of your weight`)
}