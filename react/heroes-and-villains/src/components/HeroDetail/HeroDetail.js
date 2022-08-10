import React from 'react'
import HeroForm from '../HeroForm/HeroForm'
import Modal from '../Modal/Modal'
import './HeroDetail.css'

export default function HeroDetail() {
    return (
        <div>
            HeroDetail
            <Modal>
                <HeroForm />
            </Modal>
        </div>
    )
}
