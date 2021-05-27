/* HANDLE BACKEND LOGIC */
import axios from "axios";


export const Register = (credentials) => {
    

    // console.log(resp);

    let authSuccessful = false;
    if(credentials.email) {
        authSuccessful = true;
    }
    return authSuccessful;
    
}