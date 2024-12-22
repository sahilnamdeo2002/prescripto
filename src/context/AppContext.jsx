import { createContext } from "react";
import { doctors } from "../assets/assets";

// Create a context
export const AppContext = createContext();

// Create a provider component
export const AppContextProvider = ({ children }) => {


    const currency = '$';
    const value = {
        doctors,currency
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
