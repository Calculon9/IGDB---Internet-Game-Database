import { createContext, useState } from "react";

export const GameContext = createContext();

function GameContextProvider(props) {

    // Favourite games State
    const [favourites, setFavourites] = useState([])

    const context = {
        favourites,
        total: favourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        isFavourite
    }

    function addFavouriteHandler(game) {
        setFavourites((prevFavs) => {
            return prevFavs.concat(game)
        })
    }
    
    function removeFavouriteHandler(gameId) {
        setFavourites((prevFavs) => {
            return prevFavs.filter(game => gameId !== game.id)
        })
    }

    function isFavourite(gameId) {
        return favourites.some(game => gameId == game.id)
    }

    return (
        <GameContext.Provider value={context}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;