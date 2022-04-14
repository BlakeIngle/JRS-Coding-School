import React, { useState } from 'react';
import './StringState.css';

export default function StringState() {

    const [animal, setAnimal] = useState('');

    function handleClick(animal) {
        setAnimal(animal);
    }

    function addS() {
        setAnimal(animal + 's');
    }

    return (
        <div className="strings-root">
            <span>{animal}</span>
            <div>
                <span onClick={() => {
                    handleClick('lion')
                }}>Lion</span>
                <span onClick={() => {
                    handleClick('tiger')
                }}>Tiger</span>
                <span onClick={() => {
                    handleClick('bear')
                }}>Bear</span>

                <span onClick={addS}>
                    Add&nbsp;s
                </span>
            </div>
        </div>
    )
}