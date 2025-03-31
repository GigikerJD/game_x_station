import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";


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

GameStationProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const GameStationAuth = () => {
    return useContext(GameStationContext);
}