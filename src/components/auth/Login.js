import {users} from "../../eventsSeedData";
/* HANDLE BACKEND LOGIC */

export const Login = (credentials) => {
    let authSuccessful = false;
    let authMessage = "Logging unsuccessful! Please check your credentials!";
    let loggedUser = {};

    users.forEach((user) => {
        if(user.email === credentials.email) {
            for(let u in user) {
                if(u !== "password") {
                    loggedUser[u] = user[u];
                }
            }

            authSuccessful = true;
            authMessage = "Logging successful!";
        } 
    })

    return {authSuccessful, authMessage, loggedUser};
}