import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useApi } from '../../services/api.service'
import HeroForm from '../HeroForm/HeroForm'
import Modal from '../Modal/Modal'
import './HeroDetail.css'

export default function HeroDetail() {

    const http = useApi();
    const navigate = useNavigate();
    const { id } = useParams();
    const [hero, setHero] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);

    useEffect(() => {
        getHero();
    }, []);

    function toggleModal() {
        setIsModalOpen(!isModalOpen);
    }

    function toggleDeleteConfirmation() {
        setIsDeleteConfirmationOpen(!isDeleteConfirmationOpen);
    }

    function getHero() {
        http.getHeroById(id)
            .then((response) => {
                // console.log(response)
                setHero(response.data);
            });
    }

    function handleEditHero(updatedHero) {
        http.editHero(id, updatedHero)
            .then((response) => {
                const newHero = response.data.hero;
                toggleModal();
                alert(newHero.name + " was updated successfully");
                // "rerender" ??? page
                setHero(newHero);
            })
            .catch((error) => {
                alert("There was a problem updating your hero.")
            });
    }

    function handleDeleteClicked() {
        toggleDeleteConfirmation();
    }

    function handleHeroDelete() {
        http.deleteHeroById(id)
            .then((response) => {
                alert(hero.name + " was deleted :(")
                navigate('/'); // go home
            })
            .catch((error) => {
                alert("Something went wrong. The Hero wasn't deleted")
            })
    }

    if (hero == undefined) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="hero-detail-root">
                <h1>{hero.name}</h1>
                <h4>{hero.realName}</h4>
                <h5>{hero.nemesis}</h5>

                <button type="button"
                    onClick={handleDeleteClicked}
                    className="delete"
                >
                    Delete
                </button>
                <button onClick={toggleModal}>
                    Edit Hero
                </button>

                <p>Powers:</p>
                <div>
                    {hero.powers?.map(p => <div>{p}</div>)}
                </div>

                {isModalOpen && (
                    <Modal title="Edit Hero"
                        closeModal={toggleModal}
                    >
                        <HeroForm
                            existingHero={hero}
                            onSubmit={handleEditHero}
                        />
                    </Modal>
                )}

                {isDeleteConfirmationOpen && (
                    <Modal title="Are you sure you want to delete this hero? :("
                        closeModal={toggleDeleteConfirmation}
                    >
                        <button onClick={toggleDeleteConfirmation}>
                            No. Go Back
                        </button>
                        <button onClick={handleHeroDelete}>
                            Yes. Delete!
                        </button>
                    </Modal>
                )}
            </div>
        )
    }
}
