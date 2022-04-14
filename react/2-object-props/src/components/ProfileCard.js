import React from 'react'
import './ProfileCard.css';

export default function ProfileCard({ image, name, age }) {
    return (
        <div className="profile-root">
            <img src={image} />
            <h2>{name}</h2>
            <p>{age}</p>

            <button>Contact</button>
        </div>
    );
}
