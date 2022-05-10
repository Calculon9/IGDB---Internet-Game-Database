import { useEffect} from 'react'
import { useHistory } from 'react-router'

import Title from '../components/layout/Title'
import NewGame from '../components/ui/NewGame'

function AddGame(props) {

    // Update the 'current page' state
    useEffect(() => {
        props.setCurrentPage({ title: 'Add Game' })
    }, [])

    // Add new game
    const history = useHistory();
    function addGameHandler(gameData) {
        fetch('https://igdb-f1501-default-rtdb.firebaseio.com/games.json',
            {
                method: 'POST',
                body: JSON.stringify(gameData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => history.replace('/'))
    }

    return (
        <div>
            <Title currentPage={props.currentPage} />
            <NewGame onAddGame={addGameHandler}/>
        </div>
    )
}

export default AddGame