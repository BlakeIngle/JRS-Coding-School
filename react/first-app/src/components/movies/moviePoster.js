import React, { useState } from "react";

export default function MoviePoster(
    {
        title,
        director,
        releaseYear,
        img,
        selectedMovie,
        setSelectedMovie }
) {

    function toggleSelected() {
        // call that state function from the parent
        setSelectedMovie({
            title: title,
            director: director,
            releaseYear: releaseYear,
            img: img
        })
    }

    var styles = {
        backgroundColor: selectedMovie.title == title ? "#b3b3b388" : "#2223"
    }

    return (
        <div className={`
                movie-poster
                ${selectedMovie.title == title ? 'selected' : ''}
            `}
            onClick={toggleSelected}
        >
            <h2>{title}</h2>
            <img src={img} height="150" />
            <h3>{director}</h3>
            <h3>{releaseYear}</h3>
        </div>
    )
}