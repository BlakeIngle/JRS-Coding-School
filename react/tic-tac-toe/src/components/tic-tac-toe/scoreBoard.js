import React from 'react';
import './scoreBoard.css'

export default function ScoreBoard({ xScore, oScore }) {

    return (
        <div className="score-board-root">
            <div className="score-board">
                <p>X - {xScore}</p>
                <p>O - {oScore}</p>
            </div>
        </div>
    )
}