import GameItem from "../components/ui/GameItem"
import Title from "../components/layout/Title"
import classes from './Games.module.css'

import { useEffect, useState } from 'react'

function Games(props) {

    const data = [
        {
            id: 1,
            title: "Dark Souls",
            genre: 'Souls-like',
            release: '2011',
            rating: 9.5,
            description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            favourite: false
        },
        {
            id: 2,
            title: "The Elder Scrolls V: Skyrim",
            genre: 'Action-RPG',
            release: '2011',
            rating: 9.5,
            description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            favourite: false
        },
        {
            id: 3,
            title: "Divinity: Original Sin II",
            genre: 'Tactical-RPG',
            release: '2017',
            rating: 9.5,
            description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            favourite: false
        },
        {
            id: 4,
            title: "Battlefield 1",
            genre: 'FPS',
            release: '2016',
            rating: 9.0,
            description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            favourite: false
        }
    ]

    // Update the 'current page' state
    useEffect(() => {
        props.setCurrentPage({ title: 'Games' })
    }, [])

    // State for games
    const [games, setGames] = useState([]);

    // Fetch all games
    useEffect(() => {
        fetch('https://igdb-f1501-default-rtdb.firebaseio.com/games.json')
            .then(response => response.json())
            .then(data => {
                const games = [];

                for (const key in data) {
                    const game = {
                        id: key,
                        ...data[key]
                    };

                    games.push(game);
                }
                setGames(games);
            })
    }, [])



    return (
        <div>
            <Title currentPage={props.currentPage} />
            <div className={classes.collection}>
                {games.map(game => {
                    return (
                        <GameItem game={game} />
                    )
                })}
            </div>
        </div>
    )
}

export default Games