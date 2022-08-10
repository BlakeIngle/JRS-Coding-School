import React from 'react'
import './HeroCard.css'

export default function HeroCard({ id, name, realName, powers, nemesis }) {
    return (
        <div>
            {id}: {name} - {realName}
        </div>
    )
}
