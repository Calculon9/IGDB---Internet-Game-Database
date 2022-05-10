import Modal from './Modal'

import classes from './GameItem.module.css'
import { GameContext } from '../../context/GameContext'
import { useContext, useState } from 'react'
import { useHistory } from 'react-router'

function GameItem(props) {

    const history = useHistory();

    const gameContext = useContext(GameContext);

    // State for modal display
    const [displayModal, setDisplayModal] = useState(false)

    // If click 'Add to Favourites'
    function fvtClickHandler(e) {
        const game = props.game;
        !gameContext.isFavourite(game.id) ? gameContext.addFavourite(game) : gameContext.removeFavourite(game.id);
    }

    // If click 'X'
    function delClickHandler() {
        // Display modal
        setDisplayModal(true);
    }

    // If click 'NO' in modal
    function noClickHandler() {
        setDisplayModal(false);
    }

    // If click 'Yes' in modal
    function yesClickHandler() {
        const gameId = props.game.id;
        fetch('https://igdb-f1501-default-rtdb.firebaseio.com/games/' + gameId + ".json",
            {
                method: 'DELETE',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                    'mode': 'cors'
                }

            })
            .then(() => {
                // Refresh current page
                history.go(0)
            })
    }

    return (
        <div className={gameContext.isFavourite(props.game.id) ? classes.favourite : classes.game}>
            {displayModal && <Modal yesClickHandler={yesClickHandler} noClickHandler={noClickHandler} />}
            <div className={classes.top}>
                <div className={classes.title}><h3 id='title'>{props.game.title}</h3></div>
                <div className={classes.rating}><p>{props.game.rating}</p></div>
            </div>
            <div className={classes.middle}>
                <div className={classes.release}><p>{props.game.year}</p></div>
                <div className={classes.genre}><p>{props.game.genre}</p></div>
            </div>
            <div className={classes.description}><p>{props.game.description}</p></div>
            <div className={classes.btns}>
                <button className={classes.favouritesBtn} onClick={fvtClickHandler}>{gameContext.isFavourite(props.game.id) ? 'Remove from favourites' : 'Add to favourites'}</button>
                <button className={classes.delBtn} onClick={delClickHandler}>X</button>
            </div>
        </div>
    )
}

export default GameItem