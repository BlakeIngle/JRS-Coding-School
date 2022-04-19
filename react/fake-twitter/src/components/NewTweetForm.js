import React, { useState } from 'react'
import './NewTweetForm.css'
import mark from '../assets/images/mark.jpg'

export default function NewTweetForm({ setTweets, tweets }) {

    const [tweetBody, setTweetBody] = useState('')

    function onFormSubmit(e) {
        e.preventDefault();
        // add a tweet to the tweet list
        console.log('hi')

        setTweets([...tweets, {
            id: new Date().getTime().toString(),
            profile: {
                image: mark,
                username: 'blake'
            },
            body: tweetBody
        }]);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="body"
                value={tweetBody}
                onChange={e => setTweetBody(e.target.value)}
            />

            <button type="submit">
                +
            </button>
        </form>
    )
}
