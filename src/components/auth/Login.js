import {users} from "../../eventsSeedData";
/* HANDLE BACKEND LOGIC */

export const Login = (credentials) => {
    let authSuccessful = false;
    let authMessage = "Logging unsuccessful! Please check your credentials!";

    users.forEach((user) => {
        if(user.email === credentials.email) {
            authSuccessful = true;
            authMessage = "Logging successful!";
        } 
    })

    return {authSuccessful, authMessage};
}