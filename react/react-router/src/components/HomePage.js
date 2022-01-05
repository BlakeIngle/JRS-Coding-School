import React, { useEffect } from 'react';
const axios = require('axios');

export default function HomePage() {

    function getAllHeroes() {
        axios.get('http://localhost:8080/api/supers')
            .then(response => {
                // handle success
                console.log(response);
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
            .then(() => {
                // always executed
            });
    }

    useEffect(() => {
        getAllHeroes();
    }, [])

    return (
        <div>
            Home Page!!!
        </div>
    )
}
