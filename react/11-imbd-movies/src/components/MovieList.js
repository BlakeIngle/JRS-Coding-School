import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css';

export default function MovieList({ movies }) {
    return (
        <div className="movie-list-root">
            {movies.map((m) => (
                <MovieCard key={m.id} {...m} />
            ))}
        </div>
    )
}
