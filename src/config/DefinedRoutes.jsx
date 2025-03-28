import { createBrowserRouter } from "react-router-dom";
import { Welcome } from "../pages/Welcome";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Welcome/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: 'register',
        element: <Register/>
    }
])

export default router;