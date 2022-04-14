import React from 'react';
import './ScoreBoard.css';

export default function ScoreBoard({ gameName, scores }) {
    // scores: {playerName: string, score: number}[]
    return (
        <div className="score-board-root">
            <h3>{gameName}</h3>
            {scores.map((score, i) => (
                <div key={i}>
                    <div>
                        {score.playerName}
                    </div>
                    <div>
                        {score.score}
                    </div>
                </div>
            ))}
        </div>
    )
}
