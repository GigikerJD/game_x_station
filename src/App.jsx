import { GameStationProvider } from "./config/GameStationProvider";
import { RouterProvider } from "react-router-dom"
import router from "./config/DefinedRoutes"

function App(){

  return(
    <>
      <GameStationProvider>
        <RouterProvider router={router}/>
      </GameStationProvider>
    </>
  )
}

export default App;