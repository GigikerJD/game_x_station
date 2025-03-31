import { Link } from "react-router-dom"


export const DashboardHeader = () => {

    return(
        <>
            <header className="container-xl">
                Je suis le dashboard header component
                <ul>
                    <li><Link to="/dashboard">Espace client</Link></li>
                    <li><Link to="/settings">Paramètres</Link></li>
                </ul>
            </header>
        </>
    )
}