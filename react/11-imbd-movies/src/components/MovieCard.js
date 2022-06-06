import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard({ id, title, image, description }) {
    return (
        <Link to={`/movies/${id}`}>
            <div>
                <img src={image} width="100" alt={title + ' movie poster'} />
                <h4>{title}</h4>
            </div>
        </Link>
    )
}
