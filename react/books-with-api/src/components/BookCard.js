import { faStar as star } from '@fortawesome/free-regular-svg-icons'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Context } from '../App'
import './bookCard.css'

export default function BookCard({ id, title, author, publisher, year, cover, isFav }) {

    const { http, state, localStorageService, setState } = useContext(Context);

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
                if (isFav) {
                    updateUser(null);
                } else {
                    http.getBookById(id)
                        .then(bookRes => {
                            var sqlBook = bookRes.data.book;
                            updateUser(sqlBook);
                        }).catch(err => {
                            console.error(err.response.status, 'error here is not actually an error')
                        });
                }
            }).catch(err => {
                console.error(err.results);
            });
    }

    return (
        <div className="book-card">
            <div className="background">
                <div className="more-info">
                    <div>{author}</div>
                    {publisher && <div>&copy;{publisher}{year && <span> - {year}</span>}</div>}
                </div>
                <FontAwesomeIcon
                    className={`star ${isFav && 'fav'}`}
                    icon={isFav ? solidStar : star}
                    size="2x"
                    onClick={handleFavoriteClicked} />
            </div>
            <div className="main-info">
                <img src={cover} alt={title + " cover image"} />
                <br />
                <span>{title}</span>
            </div>

        </div>
    )
}
