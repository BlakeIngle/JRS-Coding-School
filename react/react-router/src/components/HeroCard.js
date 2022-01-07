import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroCard({ id, name, alignment }) {


    return (
        <Link to={`hero/${id}`}>
            <div style={
                {
                    color:
                        alignment == 'hero' ? '#222' : '#af2323',
                    backgroundColor:
                        alignment == 'hero' ? '#b0e1ff' : '#222',
                    height: '100%'
                }
            }>
                {name}
            </div>
        </Link>
    )
}
