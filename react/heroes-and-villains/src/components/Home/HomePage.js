import React, { useEffect, useState } from 'react'
import { useApi } from '../../services/api.service'
import HeroCard from '../HeroCard/HeroCard'
import './HomePage.css'

export default function HomePage() {

    const http = useApi();
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        getHeroes();
    }, []);

    function getHeroes() {
        http.getAllHeroes()
            .then((response) => {
                setHeroes(response.data.heroes);
            });
    }

    return (
        <div>
            HomePage
            {heroes.map(hero => (
                <HeroCard key={hero.id} {...hero} />
            ))}
        </div>
    )
}
