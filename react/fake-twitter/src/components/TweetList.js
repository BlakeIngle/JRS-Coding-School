import React from 'react'
import Tweet from './Tweet'
import './TweetList.css'

export default function TweetList({ tweets }) {

    return (
        <div>
            {tweets.map(t => <Tweet tweet={t} />)}
        </div>
    )
}
