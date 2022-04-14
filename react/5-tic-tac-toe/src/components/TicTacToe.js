import React, { useEffect, useState } from 'react'
import ScoreBoard from './ScoreBoard'
import './TicTacToe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faO } from '@fortawesome/free-solid-svg-icons'

export default function TicTacToe() {

    const [turn, setTurn] = useState('X');
    // {playerName: string, score: number}[]
    const [scores, setScores] = useState([
        { playerName: 'X', score: 0 },
        { playerName: 'O', score: 0 }
    ]);

    function changeTurns() {
        if (turn == 'X') {
            setTurn('O')
        } else {
            setTurn('X')
        }
    }

    return (
        <div>
            <ScoreBoard scores={scores} gameName="Tic-Tac-Toe" />
            <div>{turn}'s turn</div>
            <GameBoard
                turn={turn}
                setTurn={setTurn}
                changeTurns={changeTurns}
                setScores={setScores}
                scores={scores}
            />
        </div>
    )
}

function GameBoard({ turn, setTurn, changeTurns, setScores, scores }) {

    const [theBoard, setTheBoard] = useState(Array(9).fill(''));
    const [isGameOver, setIsGameOver] = useState(false);

    let winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [6, 4, 2]
    ];

    function handleCellClicked(index) {
        // if nobody has played there
        if (theBoard[index] == '' && !isGameOver) {
            //  play there
            setTheBoard(theBoard.map((c, i) => {
                if (i == index) {
                    return turn;
                } else {
                    return c;
                }
            }));

            changeTurns();
        }
        // else nothing
    }

    function checkForWinner() {

        for (let combo of winningCombos) {

            let [i, j, k] = combo;
            if (theBoard[i] && theBoard[i] == theBoard[j] && theBoard[i] == theBoard[k]) {
                // then someone won on this perticular combonation of cells
                return theBoard[i]; // 'X' | 'O'
            }
        }

        return ''; // no winner
    }

    function onResetClicked() {
        // clear the board
        setTheBoard(Array(9).fill(''));
        // unfreeze the game
        setIsGameOver(false);
        // reset to X's turn
        setTurn('X');
    }

    useEffect(() => {
        let winner = checkForWinner(); // '' | 'X' | 'O'
        if (winner) {
            // somebody has officially won!
            // they get a point
            setScores(scores.map((s) => {
                if (s.playerName == winner) {
                    return {
                        ...s,
                        score: s.score + 1
                    };
                } else {
                    return s;
                }
            }));
            //  'freeze' the game
            setIsGameOver(true);
        }
    }, [theBoard]);

    return (
        <>
            <div className="game-board">
                {theBoard.map((cell, i) => (
                    // cell: '' | 'X' | 'O'
                    <div onClick={() => {
                        handleCellClicked(i);
                    }}>
                        {cell && <FontAwesomeIcon
                            size="4x"
                            icon={cell == 'X' ? faXmark : faO}
                        />}
                    </div>
                ))}
            </div>
            <button onClick={onResetClicked}>
                Reset
            </button>
        </>
    );
}