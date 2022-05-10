import classes from './MainNav.module.css'
import { Link } from 'react-router-dom'

function MainNav() {
    return (
        <header className={classes.header}>
            <h1>IGDB <span>Internet Game DataBase</span></h1>
            <nav>
                <ul>
                    <li><Link to='/'><button>GAMES</button></Link></li>
                    <li><Link to='/favourites'><button>FAVOURITES</button></Link></li>
                    <li><Link to='/add-game'><button>ADD GAME</button></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNav