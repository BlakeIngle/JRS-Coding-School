import React, { useEffect, useState } from "react";
import "./gameBoard.css";

export default function GameBoard({ winner, declareWinner, currentPlayer, changePlayer }) {

    var [board, setBoard] = useState(new Array(9).fill(""));

    function checkForWinner() {
        var winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let [i, j, k] of winningCombinations) {
            if (board[i] === board[j] && board[i] === board[k] && board[i] !== "") {
                //someone wins
                return true;
            }
        }
        return false;
    }

    function resetGame() {
        setBoard(board.fill(""));
        if (currentPlayer === "O") {
            changePlayer();
        }
        declareWinner('');
    }

    useEffect(() => {
        // the board is updated
        if (checkForWinner()) {
            var winner = currentPlayer === 'X' ? 'O' : 'X'
            declareWinner(winner);
        }
    }, [currentPlayer]);

    return (
        <div className="game-board-root">
            <div className="game-board">
                {board.map((cell, i) =>
                    <GameCell
                        key={i}
                        index={i}
                        player={currentPlayer}
                        changePlayer={changePlayer}
                        board={board}
                        setBoard={setBoard}
                        winner={winner}
                    />
                )}
            </div>
            <button type="button" onClick={resetGame}>Reset</button>
        </div>
    );
}

function GameCell({ index, player, changePlayer, board, setBoard, winner }) {

    return (
        <div
            className="cell"
            onClick={() => {
                if (!board[index] && !winner) {
                    setBoard(board => {
                        board[index] = player;
                        return board;
                    });
                    changePlayer();
                }
            }}
        >
            {board[index]}
        </div>
    );
}
