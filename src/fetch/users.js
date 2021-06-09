import axios from "axios";
const API_URL = "http://localhost:4001/api/users/";

// fetch logged user data
export const getUser = async (userId) => {
    const response = await axios.get(API_URL + userId);
    return response;
}