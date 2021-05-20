import { createContext, useState } from "react";
import { events } from "../eventsSeedData";

export const EventContext = createContext();

const EventContextProvider = ({ children }) => {

    const [allEvents, setAllEvents] = useState(events);

    return <EventContext.Provider value={{ allEvents, setAllEvents }}>
        {children}
    </EventContext.Provider>
}

export default EventContextProvider;