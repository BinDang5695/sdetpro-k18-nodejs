
function greet(name){
    console.log(`Hello, ${name}`);
}

function elegantgGreet(name){
    console.log(`Hello, ${name}. Where have you been`);
}

function ba3(callBackFn){
    let name = "Teo";
    callBackFn(name);
}

ba3(greet);
ba3(elegantgGreet);