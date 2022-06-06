import React, { useEffect, useState } from 'react'
import { useHttp } from '../services/Http.service';
import { useParams } from 'react-router-dom';
import './MoviePage.css'

export default function MoviePage() {

    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const http = useHttp();

    function getMovieData() {
        http.getMovieByExpression(movieId)
            .then((response) => {
                console.log(response.data.results[0]);
                setMovie(response.data.results[0]);
            });
    }

    useEffect(() => {
        getMovieData();
    }, []);

    return (
        <div className="movie-page-root">
            <img src={movie?.image}
                className="poster"
                width="200" />
            <div className="info">
                <h1 className="title">{movie?.title}</h1>
                <p className="year">{movie?.description}</p>
            </div>
        </div>
    )
}
