import MainNav from "./MainNav"
import classes from './Layout.module.css'

function Layout(props) {
    return (
        <div>
            <MainNav />
            <main className={classes.background}>
                <div className={classes.modal_bg}>
                    {props.children}
                </div>
            </main>
        </div>
    )
}

export default Layout