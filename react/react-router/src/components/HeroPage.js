import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function HeroPage() {
    var style = {
        border: 'solid black 1px',
        minHeight: '4rem'
    }
    return (
        <div>

            <section style={style}>
                <Outlet />
            </section>
        </div>
    )
}
