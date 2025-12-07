
const readline = require('readline-sync');

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const USER_ENDPOINT = `${BASE_URL}/users`;
const POST_ENDPOINT = `${BASE_URL}/posts`;

// Main function
app();

// Support functions
function app() {
    let isPlaying = true;
    while (isPlaying) {
        handlePromise();
        break;
    }

    function handlePromise() {
        if (!isPlaying) return;
        printMenu();
        getUserOption().then(function (userOption) {
            switch (userOption) {
                case 1:
                    return handleGetPostContent();
                case 2:
                    handleGetAllPosts();
                case 0:
                    isPlaying = false;
                    console.log('See you again!');
                    break;
                default:
                    console.log(`Invalid option!`);
            }
        }).then(handlePromise);
    }
}

function printMenu() {
    console.log(`
        1. Get post content by ID
        2. Get all posts
        0. Exit
    `);
}

function getUserOption() {
    return new Promise(function (resolve) {
        resolve(Number(readline.question('Select your option: ')));
    });
}

function handleGetPostContent() {
    const userId = getUserInput('User ID: ');
    return getAllPostForUser(userId).then(function (returnedData) {
        if (returnedData.hasUser) {
            const postId = getUserInput('Post ID: ');
            const targetPost = returnedData.userRelatedPosts.filter(function (post) {
                return post.id === postId;
            });
            console.log(targetPost);
        }
    });
}

function handleGetAllPosts() {
    const userId = getUserInput('User ID: ');
    return getAllPostForUser(userId).then(function (returnedData) {
        if (returnedData.hasUser) {
            console.log(returnedData.userRelatedPosts);
        }
    });
}

function getAllPostForUser(userId) {
    return fetch(`${USER_ENDPOINT}/${userId}`)
        .then(function (userResponse) {
            const hasUser = userResponse.ok;
            if (hasUser) {
                return fetch(POST_ENDPOINT).then(function (response) {
                    return response.json().then(function (postResponse) {
                        console.log(postResponse);
                        const userRelatedPosts = postResponse.filter(function (post) {
                            return post.userId === userId;
                        });
                        return {
                            hasUser: true,
                            userRelatedPosts: userRelatedPosts
                        }
                    });
                });
            } else {
                console.log(`UserID ${userId} is not existing!`);
                return { hasUser: false };
            }
        })
}

async function getAllPostForUserWithASync() {
    const userResponse = await fetch(`${USER_ENDPOINT}/${userId}`);
    const userData = await userResponse.json();
    const hasUser = userData.id;
    if (hasUser) {
        const postResponse = await fetch(POST_ENDPOINT);    
        const allPostData = await postResponse.json();
} else {
    
    }
}

function getUserInput(question) {
    return Number(readline.question(question));
}
