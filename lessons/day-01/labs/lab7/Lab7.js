
const RequestHandler = require('./RequestHandler');

// Data
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const userId = 1;
const postId = 1;

// Excute main function
lab7();

async function lab7() {
    // Construct objects (models, controllers)
    const reqHanndler = new RequestHandler(BASE_URL);

    // Usage using Functional Programming
    const post = await reqHanndler.getTargetPost(userId, postId);
    console.log(post);

    const allPosts = await reqHanndler.getAllPosts(userId);
    console.log(allPosts);
}
