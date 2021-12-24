import React from "react";
import './favoritesBox.css';

export default function FavoritesBox({ title, list }) {

    const items = list.map((item) => {
        return <li>{item}</li>
    });

    return (
        <div className="favorites-box">
            <h2>{title}</h2>
            <ul>
                {items}
            </ul>
        </div>
    )
}