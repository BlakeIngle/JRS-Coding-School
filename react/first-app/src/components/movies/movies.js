import React, { useState } from "react";
import MoviePoster from "./moviePoster";
import br2049 from './images/2049.jpg'
import django from './images/django.jpg'
import bSaints from './images/boondock_saints.jpg'
import princess from './images/princess_mononoke.jpg'
import './movies.css'

export default function Movies() {
    const movies = [
        {
            title: "Django: Unchained",
            director: "Quentin Tarantino",
            releaseYear: 2012,
            img: django
        },
        {
            title: "The Boondock Saints",
            director: "Troy Duffy",
            releaseYear: 1999,
            img: bSaints
        },
        {
            title: "Blade Runner 2049",
            director: "Dennis Villeneuve",
            releaseYear: 2017,
            img: br2049
        },
        {
            title: "Princess Mononoke",
            director: "Hayao Miyazaki",
            releaseYear: 1997,
            img: princess
        },
    ];

    var [selectedMovie, setSelectedMovie] = useState(movies[0])

    var posters = movies.map((movie) => {
        return (
            <MoviePoster
                key={movie.title}
                director={movie.director}
                title={movie.title}
                releaseYear={movie.releaseYear}
                img={movie.img}
                selectedMovie={selectedMovie}
                setSelectedMovie={setSelectedMovie}
            />
        );
    });

    return (<>
        <h1>{selectedMovie.title}</h1>
        <div className="movies grid">
            {posters}
        </div>
    </>)
}
