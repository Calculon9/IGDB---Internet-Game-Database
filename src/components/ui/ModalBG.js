import classes from './ModalBG.module.css'

function ModalBG(props) {
    return (
        <div className={classes.modal_bg}>
            {props.children}
        </div>
    )
}

export default ModalBG