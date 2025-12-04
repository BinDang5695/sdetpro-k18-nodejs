
// Promise and thenable chain
asyncFunc01('originalValue')
    .then(function(returnedValue1){
        return asyncFunc02(returnedValue1);
    })
    .then(function(returnedValue2){
        return asyncFunc03(returnedValue2);
    })
    .then(function(finalResult){
        console.log(finalResult);
    })

function asyncFunc01(param1){
    // Wrap any async operation/task into a promise
    console.log(`Processing param: ${param1}`);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const returnedValue = 'asyncFunc01 - ' + param1;
            resolve(returnedValue);
        }, 1 * 1000);
    });
}

function asyncFunc02(param2){
    // Wrap any async operation/task into a promise
    console.log(`Processing param: ${param2}`);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const returnedValue = 'asyncFunc02 - ' + param2;
            resolve(returnedValue);
        }, 2 * 1000);
    });
}

function asyncFunc03(param3){
    // Wrap any async operation/task into a promise
    console.log(`Processing param: ${param3}`);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const returnedValue = 'asyncFunc03 - ' + param3;
            resolve(returnedValue);
        }, 3 * 1000);
    });
}