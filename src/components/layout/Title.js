import classes from './Title.module.css'

function Title(props) {
    return (
        <div className={classes.page_title}>
            <h1>{props.currentPage.title}</h1>
        </div>
    )
}

export default Title