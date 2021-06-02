import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [isLoged, setIsLoged] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoged, setIsLoged }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;