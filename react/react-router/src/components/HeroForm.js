import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
const axios = require('axios');

export default function HeroForm({ hero, onComplete }) {
    var nameRef = useRef([]);
    var powerRef = useRef(null);
    var nemesisRef = useRef(null);
    const [alignment, setAlignment] = useState("hero");
    const [isEditing, setIsEditing] = useState(false);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (!nameRef.current.value || !powerRef.current.value) {
            return;
        }

        ////////
        if (isEditing) {
            var updatedHero = {
                id: hero.id,
                name: nameRef.current.value,
                power: powerRef.current.value,
                nemesisName: nemesisRef.current.value,
                alignment
            };
            updateHero(updatedHero);
        } else {
            // actually add hero to list
            var newHero = {
                name: nameRef.current.value,
                power: powerRef.current.value,
                nemesisName: nemesisRef.current.value,
                alignment
            };
            addNewHero(newHero)
        }
    }

    function updateHero(hero) {
        axios.put(`http://localhost:8080/api/heroes/${hero.id}`, hero)
            .then((res) => {
                onComplete();
            })
            .catch((err) => {
                console.error(err)
            })
    }

    function addNewHero(hero) {
        // post -> .../api/heroes
        console.log(hero)
        axios.post(`http://localhost:8080/api/heroes`, hero)
            .then((res) => {
                console.log(res.data)
                var id = res.data.id;

                // nav to that hero's page
                navigate(`/hero/${id}`);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    useEffect(() => {
        if (hero) {
            // a hero was provided as a prop
            setIsEditing(true);
            setAlignment(hero.alignment);
        }
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input ref={nameRef} defaultValue={hero?.name} type="text" name="name"></input>
            <br />
            <label>Power:</label>
            <input ref={powerRef} defaultValue={hero?.power} type="text" name="power"></input>
            <br />
            <label>Nemesis:</label>
            <input ref={nemesisRef} defaultValue={hero?.nemesisName} type="text" name="nemesis"></input>
            <br />
            <label>Hero</label>
            <input
                type="radio"
                checked={alignment === "hero"}
                onChange={() => {
                    setAlignment("hero");
                }}
                value="hero"
                name="alignment"
            ></input>
            <label>Villain</label>
            <input
                type="radio"
                checked={alignment === "villain"}
                onChange={() => {
                    setAlignment("villain");
                }}
                value="villain"
                name="alignment"
            ></input>
            <br />

            <button type="button">Cancel</button>
            <button type="submit">{isEditing ? 'Save' : 'Add'}</button>
        </form>
    );
}
