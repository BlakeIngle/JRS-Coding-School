import React, { useEffect, useRef, useState } from 'react'
import Square from '../square/Square';
import './Input.css'

export default function Input({ onSubmit, answer, isEnabled }) {

    const [word, setWord] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        if (isEnabled) {
            inputRef.current.focus();
        }
    }, [isEnabled]);

    function submitAnswer() {
        if (onSubmit) {
            onSubmit(word);
            setIsSubmitted(true);
        }
    }

    function handleInputChange(e) {
        if (isSubmitted) {
            return;
        }
        let value = e.target.value;
        value = value.slice(0, 5);

        setWord(value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        submitAnswer();
    }

    return (
        <form onSubmit={handleFormSubmit}
            className="input-root">

            <label className="square-display">
                {Array(5).fill('').map((foo, i) => (
                    <Square key={i}
                        letter={word.charAt(i)}
                        i={i}
                        answer={answer}
                        showInfo={isSubmitted}
                    />
                ))}
            </label>
            <input type="text"
                value={word}
                onChange={handleInputChange}
                disabled={!isEnabled}
                ref={inputRef}
            />
        </form>
    )
}
