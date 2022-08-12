import React from 'react'
import './Square.css'

export default function Square({ letter, i, answer, showInfo }) {

    const cName = getClassName();

    function getClassName() {
        if (!showInfo) {
            return;
        }
        if (letter == answer.charAt(i)) {
            return 'green'
        } else if (answer.includes(letter)) {
            return 'yellow'
        } else {
            return 'gray'
        }

    }

    return (
        <div className={
            "square-root "
            + cName + " "
            + (showInfo ? 'show' : ''
            )}
            style={{ "--order": i }}
        >
            {letter}
        </div>
    )
}
