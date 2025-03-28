import { GameStationAuth } from "./GameStationProvider"
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children, endpointLoggedOut}) => {
    const { isLoggedIn } = GameStationAuth();
    if(!isLoggedIn){
        return <Navigate to={endpointLoggedOut}/>
    }
    return <>{children}</>
}