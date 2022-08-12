import React, { useRef } from 'react'
import './Modal.css'

export default function Modal({ children, title, closeModal }) {

    let backgroundRef = useRef();

    function handleBackgroundClicked(e) {
        console.log(e.target)
        if (e.target == backgroundRef.current) {
            closeModal();
        }
    }

    return (
        <div className="modal-root"
            ref={backgroundRef}
            onClick={handleBackgroundClicked}
        >
            <div className="modal">
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    )
}
