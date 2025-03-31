import { createBrowserRouter } from "react-router-dom";
import { Welcome } from "../pages/Welcome";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { Settings } from "../pages/Settings";

const AppRouter = createBrowserRouter([

    {
        path: '/',
        element: <Welcome/>,
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: 'register',
        element: <Register/>
    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    },
    {
        path: '/settings',
        element: <Settings/>
    }
])

export default AppRouter;