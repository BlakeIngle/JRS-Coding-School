import React, { useState } from 'react';
import GameBoard from './gameBoard';
import ScoreBoard from './scoreBoard';

export default function TicTacToe() {

    var [winner, setWinner] = useState('');
    var [currentPlayer, setCurrentPlayer] = useState('X')

    var [xScore, setXScore] = useState(0);
    var [oScore, setOScore] = useState(0);

    function declareWinner(player) {
        setWinner(player);

        if (player === "X") {
            setXScore(xScore + 1);
        } else if (player === "O") {
            setOScore(oScore + 1);
        }
    }

    function changePlayer() {
        if (currentPlayer === "X") {
            setCurrentPlayer("O");
        } else {
            setCurrentPlayer("X");
        }
    }

    return (
        <div>
            <ScoreBoard
                xScore={xScore}
                oScore={oScore} />
            <h3>{winner ? winner + ' wins!' : currentPlayer + "'s turn"}</h3>
            <GameBoard
                currentPlayer={currentPlayer}
                changePlayer={changePlayer}
                winner={winner}
                declareWinner={declareWinner} />
        </div>
    )
}