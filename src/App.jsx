import { GameStationProvider } from "./config/GameStationProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./config/DefinedRoutes";

function App(){

  return(
    <> 
      <GameStationProvider>
        <Header/> 
        <main style={{ flex: '1 1 auto' }}>
          <AppRouter/>
        </main>
        <Footer/>
      </GameStationProvider>
    </>
  )
}

export default App;