import { faStar as star } from '@fortawesome/free-regular-svg-icons'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../App'
import { useAxios } from '../services/axios.service'
import './bookCard.css'

export default function BookCard({ id, title, author, coverImage, isFav }) {

    const { state, localStorageService, setState } = useContext(Context);
    const http = useAxios();

    function updateUser(book) {

        const updatedUser = {
            ...state.user,
            favoriteBook: book
        }

        localStorageService.saveUser(updatedUser);
        setState({ ...state, user: updatedUser });
    }

    function handleFavoriteClicked() {

        // do logic here
        http.setFavoriteBook((isFav ? null : id), state.user.id)
            .then(res => {
                // update successful
                updateUser({ id, title, author, coverImage })
            }).catch(err => {
                console.error(err.results);
            });
    }

    return (
        <div className="book-card">
            <div className="background">
                <div className="more-info">
                    <div>{author}</div>
                </div>
                {state.user && <FontAwesomeIcon
                    className={`star ${isFav && 'fav'}`}
                    icon={isFav ? solidStar : star}
                    size="2x"
                    onClick={handleFavoriteClicked} />}
            </div>
            <div className="main-info">
                <img src={coverImage} alt={title + " cover image"} />
                <br />
                <Link to={`/book/${id}`}>
                    <span>{title}</span>
                </Link>
            </div>

        </div>
    )
}
