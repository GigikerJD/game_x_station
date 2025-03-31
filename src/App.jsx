import { GameStationProvider } from "./config/GameStationProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./config/DefinedRoutes";
import { MainDisplay } from "./components/Display";

function App(){

  return(
    <> 
      <GameStationProvider>
        <Header/> 

        <MainDisplay>
          <AppRouter/>
        </MainDisplay>

        <Footer/>
      </GameStationProvider>
    </>
  )
}

export default App;