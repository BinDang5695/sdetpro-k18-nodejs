
const targetUrl = "https://sdetpro.com";

// Callback Hell
sendRequest(targetUrl, function(response){
    processResponse(response, function(statusCode){
        validateResponse(statusCode);
    });
});

// Asynchronous
function sendRequest(url, callback){
    console.log(`1. Sending request to URL: ${url}`)
    setTimeout(function(){
        callback({status: 200});
    }, 1 * 1000);
}

// Asynchronous
function processResponse(response, callback){
    console.log(`2. Processing response...`)
    setTimeout(function(){
        callback(response.status);
    }, 2 * 1000);
}

// Synchronous
function validateResponse(statusCode){
    console.log(`3. Validating response...`);
    if (statusCode === 200){
        console.log(`Response is valid!`);
    } else {
        console.log(`Response is invalid!`);
    }
}

// 1. Callback -> callback hell: nested callback
// 2. Promise + thenable chain
// 3. async/await
