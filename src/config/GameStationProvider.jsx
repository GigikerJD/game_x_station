import { createContext, useContext, useState } from "react";


const GameStationContext = createContext();

export const GameStationProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [pseudo, setPseudo] = useState("");

    const login = (givenPseudo) => {
        setPseudo(givenPseudo);
        setIsLoggedIn(true);
    }

    const logout = () => {
        setPseudo("");
        setIsLoggedIn(false);
    }

    return(
        <GameStationContext.Provider value={{ isLoggedIn, pseudo, login, logout}}>
            {children}
        </GameStationContext.Provider>
    )
}

export const GameStationAuth = () => {
    return useContext(GameStationContext);
}