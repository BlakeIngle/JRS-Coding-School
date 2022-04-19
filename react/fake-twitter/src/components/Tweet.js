import React from 'react'
import './Tweet.css'

export default function Tweet({ tweet }) {
    return (
        <div className="tweet-root">
            <img src="" alt="profile img" />
            <div className="body">
                <h3>Username</h3>
                <p>tweet body</p>
            </div>
        </div>
    )
}
