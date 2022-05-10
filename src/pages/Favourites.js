import { useEffect, useContext} from 'react'
import classes from './Games.module.css'
import { GameContext } from "../context/GameContext.js"

import GameItem from '../components/ui/GameItem'
import Title from '../components/layout/Title'

function Favourites(props) {

    // Update the 'current page' state
    useEffect(() => {
        props.setCurrentPage({ title: 'Favourites' })
    }, [])

    // Retrieve games in library from Global Context
    const favourites = useContext(GameContext).favourites

    return (
        <div>
            <Title currentPage={props.currentPage} />
            <div className={classes.collection}>
                {favourites.map(game => {
                    return (
                        <GameItem game={game} />
                    )
                })}
            </div>
        </div>
    )
}

export default Favourites