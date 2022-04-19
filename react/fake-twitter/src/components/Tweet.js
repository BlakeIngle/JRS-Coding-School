import React from 'react'
import './Tweet.css'

export default function Tweet({ tweet }) {
    return (
        <div className="tweet-root">
            <img src={tweet.profile.image} alt="profile img" />
            <div className="body">
                <h3>{tweet.profile.username}</h3>
                <p>{tweet.body}</p>
            </div>
        </div>
    )
}
