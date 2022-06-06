import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css';

export default function SearchBar({ onSubmit }) {

    const [searchQuery, setSearchQuery] = useState('');

    function handleFormSubmit(e) {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(searchQuery);
        }
    }

    return (
        <form className="search-bar-root"
            onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="searchQuery"
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                }}

                placeholder="Search"
            />
            <FontAwesomeIcon
                className="glass"
                icon={faMagnifyingGlass} />
        </form>
    )
}
