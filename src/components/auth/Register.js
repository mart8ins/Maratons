/* HANDLE BACKEND LOGIC */

export const Register = (credentials) => {
    let authSuccessful = false;
    if(credentials.email) {
        console.log(credentials, "registers");
        authSuccessful = true;
    }
    return authSuccessful;
    
}