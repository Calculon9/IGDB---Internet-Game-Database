import classes from './Modal.module.css'

function Modal(props) {
    return (
            <div className={classes.modal}>
                <div>
                    <h3>Remove this game?</h3>
                </div>
                <div>
                    <button onClick={props.yesClickHandler} className={classes.btn_yes}>YES</button>
                    <button onClick={props.noClickHandler} className={classes.btn_no}>NO</button>
                </div>
            </div>
    )
}

export default Modal