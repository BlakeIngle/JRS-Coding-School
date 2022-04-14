import React, { useState } from 'react';
import './ArrayState.css';

export default function ArrayState() {

    const [countries, setCountries] = useState([]);
    // selectedIndex: number;
    const [selectedIndex, setSelectedIndex] = useState(null);

    function addToArray(newValue) {
        setCountries([...countries, newValue]);
    }
    function removeFromArray(index) {
        setCountries(countries.filter((foo, i) => index !== i));
    }
    function removeFromArrayByValue(value) {
        setCountries(countries.filter(country => country !== value));
    }
    function updateIndex(index, newValue) {
        setCountries(countries.map((c, i) => {
            if (i == index) {
                return newValue;
            } else {
                return c;
            }
        }));
    }

    function handleNewCountryClicked() {
        let newCountry = prompt("Add a new country");
        addToArray(newCountry);
    }

    function handleEditClicked() {
        let newName = prompt('Edit');
        updateIndex(selectedIndex, newName);
    }

    return (
        <div className="array-root">

            <button onClick={handleNewCountryClicked}>
                Add New Country
            </button>

            {countries.map((country, i) => (
                <span key={i}
                    className={`country ${selectedIndex == i && 'selected'}`}
                    onClick={() => {
                        setSelectedIndex(i);
                    }}>
                    {country}
                </span>
            ))}

            <br />
            <br />
            <button onClick={() => {
                removeFromArray(selectedIndex);
            }}>Delete</button>

            <button onClick={handleEditClicked}>Edit</button>
        </div>
    )
}