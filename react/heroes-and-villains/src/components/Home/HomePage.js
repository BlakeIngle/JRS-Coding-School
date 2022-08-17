import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
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
                setHeroes(response.data);
            });
    }

    return (
        <div>
            HomePage
            {heroes.map(hero => (
                <Link to={`/hero/${hero.id}`} key={hero.id} >
                    <HeroCard {...hero} />
                </Link>
            ))}
        </div>
    )
}
