import classes from './NewGame.module.css'
import { useRef } from 'react';

function NewGame(props) {

    const titleInputRef = useRef(),
        yearInputRef = useRef(),
        genreInputRef = useRef(),
        descriptionInputRef = useRef(),
        ratingInputRef = useRef();

    function onSubmitHandler(e) {
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value
        const enteredYear = yearInputRef.current.value
        const enteredGenre = genreInputRef.current.value
        const enteredRating = ratingInputRef.current.value
        const enteredDescription = descriptionInputRef.current.value
        

        const gameData = {
            title: enteredTitle,
            year: enteredYear,
            genre: enteredGenre,
            rating: enteredRating,
            description: enteredDescription
        }

        props.onAddGame(gameData);
    }

    return (
        <div className={classes.form}>
            <form onSubmit={onSubmitHandler}>
                <div className={classes.input}>
                    <label htmlFor='title'>Title</label><br />
                    <input id='title' type='text' required ref={titleInputRef}></input>
                </div>
                <div className={classes.input}>
                    <label htmlFor='year'>Year</label><br />
                    <input id='year' type='text' required ref={yearInputRef}></input>
                </div>
                <div className={classes.input}>
                    <label htmlFor='genre'>Genre</label><br />
                    <input id='genre' type='text' required ref={genreInputRef}></input>
                </div>
                <div className={classes.input}>
                    <label htmlFor='rating'>Rating</label><br />
                    <input id='rating' type='text' required ref={ratingInputRef}></input>
                </div>
                <div className={classes.description}>
                    <label htmlFor='description'>Description</label><br />
                    <textarea rows='7' ref={descriptionInputRef} />
                </div>
                <div className={classes.btn}>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default NewGame