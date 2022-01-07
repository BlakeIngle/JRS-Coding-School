import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import HeroDialog from './HeroDialog';
const axios = require('axios');

export default function HeroInfo() {

    const [hero, setHero] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);

    const params = useParams();

    const getHero = () => {

        // heroId
        axios.get(`http://localhost:8080/api/heroes/${params.heroId}`)
            .then(res => {
                setHero(res.data.hero);
            })
            .catch(err => {
                // handle error
                if (err.response.status == 404) {
                    // is 404
                    // show 404 page
                }
                console.error(err);
            })
            .then(() => {
                setIsModalOpen(false);
            });
    }

    const editClicked = () => {
        console.log("edit button clicked")
        // show a modal
        //  with the hero form inside it
        //      we should be able to update the hero info
        toggleModal();
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const editStyle = {
        border: 'none',
        backgroundColor: '#4488ff',
        borderRadius: '50%',
        fontSize: '2rem',
        width: '4rem',
        height: '4rem',
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        transform: 'rotate(90deg)',
        cursor: 'pointer'
    }

    useEffect(() => {
        getHero()
    }, []);

    var blankImg = <img src="https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png"
        className="blank-img"
        width="150"
        onClick={() => {
            setIsImageModalOpen(true);
        }} />
    var profilePic = <img src={hero.image} width="150" />


    useEffect(() => {
        console.log(hero);
    }, [hero]);

    return (
        <div>
            <h1>{hero.name} <span style={{ fontSize: '1.5rem' }}>{hero.alignment}</span></h1>

            {hero.image ? profilePic : blankImg}
            {isImageModalOpen && <ImageModal onSave={(url) => {
                // sent put request
                axios.put(`http://localhost:8080/api/heroes/${hero.id}/image`, { url })
                    .then(res => {
                        // res.data -> ???
                        setHero(res.data.hero);
                    }).catch(err => {
                        console.error(err)
                    });
                setIsImageModalOpen(false);
            }} />}

            <p>Powers: {hero.power}</p>
            <p>Nemesis: {hero.nemesisName}</p>
            <button type="button"
                onClick={editClicked}
                style={editStyle}>&#9998;</button>

            {isModalOpen && <HeroDialog hero={hero} onComplete={getHero} closeModal={toggleModal} />}
        </div>
    )
}

function ImageModal({ onSave }) {

    const [url, setUrl] = useState('');

    function handleChange(e) {
        setUrl(e.target.value);
    }

    return (
        <form onSubmit={e => {
            e.preventDefault();
            onSave(url);
        }}>
            <label>Image URL:</label>
            <input type="text"
                value={url}
                onChange={handleChange}
                name="image"
                placeholder="Image URL" />
            <button type="submit">Save</button>
        </form>
    )
}