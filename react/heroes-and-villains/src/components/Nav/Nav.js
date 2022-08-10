import React from 'react'
import HeroForm from '../HeroForm/HeroForm'
import Modal from '../Modal/Modal'
import './Nav.css'

export default function Nav() {
    return (
        <div>
            Nav
            <Modal>
                <HeroForm />
            </Modal>
        </div>
    )
}
