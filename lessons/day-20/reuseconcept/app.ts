import { BaseApiClient } from './BaseApiClient';
import UserApi from './UserApi';

main();

async function main(){
    const baseUrl = "jsonplaceholderUrl"
    const userApiHandler = new UserApi(baseUrl);

    // Get all users
    const allUsers: any[] = await userApiHandler.getUsers();

    // Create user
    const user = {
        name: "Teocodon",
        password: "Aicungbiet"
    }

    const userCreationResponse = await userApiHandler.createUser(user);
    console.log(userCreationResponse);
    
}