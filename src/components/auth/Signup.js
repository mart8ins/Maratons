/* HANDLE BACKEND LOGIC */
import axios from "axios";

export const Signup = async (credentials) => {
    // post signup credentials to server
    const response = await axios.post("http://localhost:4001/api/users/signup", credentials);
    // return boolean for succesful signup, message, and also data for new user except password
    const {message, success, token} = response.data;
    return {
        authSuccessful: success,
        authMessage: message,
        token
    }
}