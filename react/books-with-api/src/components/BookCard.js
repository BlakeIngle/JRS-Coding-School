import { faStar as star } from '@fortawesome/free-regular-svg-icons'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './bookCard.css'

export default function BookCard({ id, title, author, publisher, year, cover }) {

    const [fav, setFav] = useState(false);


    return (
        <div className="book-card">
            <div className="background">
                <div className="more-info">
                    <div>{author}</div>
                    {publisher && <div>&copy;{publisher}{year && <span> - {year}</span>}</div>}
                </div>
                <FontAwesomeIcon
                    className={`star ${fav && 'fav'}`}
                    icon={fav ? solidStar : star}
                    size="2x"
                    onClick={() => {
                        setFav(!fav);
                    }} />
            </div>
            <div className="main-info">
                <img src={cover} alt={title + " cover image"} />
                <br />
                <span>{title}</span>
            </div>

        </div>
    )
}
