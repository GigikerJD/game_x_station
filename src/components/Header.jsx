import { GameStationAuth } from "../config/GameStationProvider";
import { DashboardHeader } from "./DashboardHeader";
import { DefaultHeader } from "./DefaultHeader";

function Header(){
    const { isLoggedIn } = GameStationAuth();
    return(
        <> { isLoggedIn ? <DashboardHeader/> : <DefaultHeader/>} </>
    )
}

export default Header;