import React, { useRef } from 'react'
import './dialog.css'
import HeroForm from './HeroForm';

export default function HeroDialog({ hero, closeModal, onComplete }) {

    var backgroundRef = useRef(null);

    const handleClick = (e) => {
        if (e.target == backgroundRef.current) {
            closeModal();
        }
    }

    return (
        <div className="dialog background"
            ref={backgroundRef}
            onClick={handleClick}>
            <div className="box"
                onClick={handleClick}>
                <h3>Add New Hero</h3>
                <HeroForm onComplete={onComplete} hero={hero} />
            </div>
        </div >
    )
}
