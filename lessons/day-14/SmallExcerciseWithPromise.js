
// Data
const todo1Endpoint = 'https://jsonplaceholder.typicode.com/todos/1';

// Usage
test(todo1Endpoint);

// Logic - From controller
async function test(url){
    const response = await fetch(url);
    const todo10Object = await response.json();
    if (todo10Object.completed){
        console.log('Task completed');
    } else {
        console.log('Task is In-Progress');
    }
    // fetch(url)
    //     .then(getResponse)
    //     .then(validateResponse)
}

// Support functions
function getResponse(response){
    return response.json();
}

function validateResponse({todo10Object}){
    if (todo10Object.completed){
        console.log('Task completed');
    } else {
        console.log('Task is In-Progress');
    }
}
