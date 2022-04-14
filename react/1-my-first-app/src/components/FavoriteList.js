import React from 'react'

export default function FavoriteList({ title, fav1, fav2, fav3 }) {

    return (
        <div>
            <h2>Favorite {title}</h2>
            <ul>
                <li>{fav1}</li>
                <li>{fav2}</li>
                <li>{fav3}</li>
            </ul>
        </div>
    );
}