import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function HeroesApp() {
    return (
        <div>
            <Link to="/">
                <h1>HEROES / VILLAINS</h1>
            </Link>
            <Outlet />
            <p>Heroes app - &copy;2022 - JRS Coding School</p>
        </div>
    )
}
