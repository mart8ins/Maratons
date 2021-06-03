import { createContext, useState } from "react";

export const EventContext = createContext();

const EventContextProvider = ({ children }) => {

    const [allEvents, setAllEvents] = useState([]);

    return <EventContext.Provider value={{ allEvents, setAllEvents }}>
        {children}
    </EventContext.Provider>
}

export default EventContextProvider;