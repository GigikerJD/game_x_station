import { Welcome } from "../pages/Welcome";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { Cart } from "../pages/Cart";
import { Settings } from "../pages/Settings";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Welcome />} />
                
                <Route path="/login" element={<Login />} />
                
                <Route path="/register" element={<Register />} />
                
                <Route 
                    path="/dashboard" 
                    element={
                        <ProtectedRoute endpointLoggedOut="login">
                            <Dashboard/>
                        </ProtectedRoute>
                    } 
                />

                <Route
                    path="/shopcart"
                    element={
                        <ProtectedRoute endpointLoggedOut="login">
                            <Cart/>
                        </ProtectedRoute>
                    }
                />
                
                <Route 
                    path="settings" 
                    element={
                        <ProtectedRoute endpointLoggedOut="login">
                            <Settings/>
                        </ProtectedRoute>
                    } 
                />
            </Routes>
        </>
    );
};

export default AppRouter;
