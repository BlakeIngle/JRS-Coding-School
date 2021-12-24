import React, { useEffect, useState } from "react";

export default function FetchData() {

    var request = `https://rickandmortyapi.com/api/character/?name=`

    var [character, setCharacter] = useState(null);

    useEffect(() => {
        // send request
        fetch(request)
            .then(response => response.json())
            // get data
            .then(data => {
                console.log(data.results)
                // update the state with that data
                setCharacter(data.results[0])
            });
    }, []);

    function getNewData(event) {
        fetch(request + event.target.value)
            .then(response => response.json())
            // get data
            .then(data => {
                console.log(data.results)
                // update the state with that data
                setCharacter(data.results[0])
            });
    }

    if (character) {
        return (
            <div>
                <input type="text" onChange={getNewData} />
                <h1>Data:</h1>
                <p>{character.name}</p>
                <img src={character.image} />
            </div>
        )
    } else {
        return <p>Loading...</p>
    }
}