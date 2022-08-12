import React, { useState } from 'react'
import HeroForm from '../HeroForm/HeroForm'
import Modal from '../Modal/Modal'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useApi } from '../../services/api.service'

export default function Nav() {

    const http = useApi();
    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal() {
        setIsModalOpen(!isModalOpen);
    }

    function submitHero(newHero) {

        http.createNewHero(newHero)
            .then((response) => {
                alert("Your hero was created successfully.");
                toggleModal();
                const newHero = response.data.hero;
                // add hero to list ???
            })
            .catch((error) => {
                console.error(error);
                alert("There was a problem creating your hero :(")
            });
    }

    return (
        <>
            <nav>
                <div className="icons">
                    <Link to="/">
                        <FontAwesomeIcon icon={faHouse} />
                    </Link>

                    <div onClick={() => {
                        setIsModalOpen(true);
                    }}>
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </div>

                    <FontAwesomeIcon icon={faSearch} />
                </div>

            </nav>
            {isModalOpen && (
                <Modal
                    title="Add New Hero"
                    closeModal={toggleModal}
                >
                    <HeroForm onSubmit={submitHero} />
                </Modal>
            )}
        </>
    )
}
