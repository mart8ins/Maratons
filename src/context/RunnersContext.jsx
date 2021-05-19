import { createContext, useState } from "react";
import { runners } from "../eventsSeedData";

export const RunnersContext = createContext();

const RunnersContextProvider = ({ children }) => {
    const [allRunners, setRunners] = useState(runners);

    return (
        <RunnersContext.Provider value={{ allRunners, setRunners }}>
            {children}
        </RunnersContext.Provider>
    )
}

export default RunnersContextProvider;