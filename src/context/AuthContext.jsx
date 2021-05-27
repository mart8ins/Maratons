import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [isLoged, setIsLoged] = useState(false);
    const [loggedUser, setLoggedUser] = useState({});

    return (
        <AuthContext.Provider value={{ isLoged, setIsLoged, loggedUser, setLoggedUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;