import axios from "axios";
const API_URL = "http://localhost:4001/api/events";

// fetch logged user data
export const getAllEvents = async () => {
    const response = await axios.get(API_URL);
    return response;
}

// fetch registred runners array from event
export const getEventRunners = async (eventId) => {
    const response = await axios.get(API_URL + `/${eventId}/participants`);
    return response;
}