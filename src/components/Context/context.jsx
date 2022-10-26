import {createContext, useState } from 'react';

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const [selectedCity, setSelectedCity] = useState("Bhimavaram")

    
    const value = {
        selectedCity,
        setSelectedCity,
    }
    return (
        <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
    );
}

export default MainContextProvider;

export const MainContextConsumer = MainContext.Consumer