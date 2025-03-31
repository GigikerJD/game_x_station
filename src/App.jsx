import { GameStationProvider } from "./config/GameStationProvider";
import { BrowserRouter, RouterProvider, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Welcome } from "./pages/Welcome";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";

function App(){

  return(
    <> 
      <GameStationProvider>
        <Header/> 
        <main style={{ flex: '1 1 auto' }}>
            <Routes>
              <Route path="/" element={<Welcome/>}/>
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/dashboard" element={<Dashboard/>} /> 
            </Routes>
        </main>
        <Footer/>
      </GameStationProvider>
    </>
  )
}

export default App;