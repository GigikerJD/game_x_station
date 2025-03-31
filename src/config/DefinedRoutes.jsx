import { Welcome } from "../pages/Welcome";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { Cart } from "../pages/Cart";
import { Settings } from "../pages/Settings";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { GameStationAuth } from "./GameStationProvider";

const AppRouter = () => {
    const { isLoggedIn } = GameStationAuth();
    return (
        <>
            <Routes>
                <Route 
                    path="/" 
                    element={
                        isLoggedIn ? <Navigate to="/dashboard" /> : <Welcome/>
                    } 
                />
                
                <Route 
                    path="/login" 
                    element={
                        <ProtectedRoute endpointLoggedOut="/login">
                            <Login/>
                        </ProtectedRoute>
                    } 
                />
                
                <Route
                    path="/register"
                    element={
                        <ProtectedRoute endpointLoggedOut="/register">
                            <Register/>
                        </ProtectedRoute>
                    }
                />
                
                <Route 
                    path="/dashboard" 
                    element={
                        <ProtectedRoute endpointLoggedOut="/login">
                            <Dashboard/>
                        </ProtectedRoute>
                    } 
                />

                <Route
                    path="/shopcart"
                    element={
                        <ProtectedRoute endpointLoggedOut="/login">
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
