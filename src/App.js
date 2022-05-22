import Layout from "./components/layout/Layout";
import Games from "./pages/Games";
import Favourites from "./pages/Favourites";
import AddGame from "./pages/Add-Game";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import GameContextProvider from '../src/context/GameContext.js'
import ModalContextProvider from "./context/ModalContext";

function App() {

  // State for current page that's displayed
  const [currentPage, setCurrentPage] = useState({})

  // State for Favourites
  const [favourites, setFavourites] = useState({})

  return (
    <Router>
      <GameContextProvider>
        <ModalContextProvider>
            <Layout>
              <Switch>
                <Route path='/' exact>
                  <Games currentPage={currentPage} setCurrentPage={setCurrentPage} favourites={favourites} setFavourites={setFavourites} />
                </Route>
                <Route path='/favourites'>
                  <Favourites currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Route>
                <Route path='/add-game'>
                  <AddGame currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </Route>
              </Switch>
            </Layout>
        </ModalContextProvider>
      </GameContextProvider>
    </Router >
  );
}

export default App;
