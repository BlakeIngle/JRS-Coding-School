import React from "react";
import NavItem from "./navItem";
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function Nav() {

    return (
        <nav>
            <NavItem link="https://reactjs.org/" linkName="Learn React" />
            <NavItem link="https://www.imdb.com/title/tt0119698/" linkName="Princess Mononoke" />
            <FontAwesomeIcon icon={faCoffee} />
        </nav>
    )
}