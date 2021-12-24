import React from "react";

export default function Movies({ movies }) {
    console.log(movies)
    return (
        <div>
            {movies.map(movie =>
                <Movie
                    key={movie.id}
                    title={movie.title}
                    image={movie.image}
                />
            )}
        </div >
    )
}

export function Movie({ title, image }) {

    return (
        <div>
            <h3>{title}</h3>
            <img src={image} width="200" />
        </div>
    )
}