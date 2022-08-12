import { useEffect, useState } from 'react';
import './App.css';
import Input from './component/input/Input';
import ALL_WORDS from './assets/Wordle Answers.json'

function App() {

  const [turnNumber, setTurnNumber] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinConditionMet, setIsWinConditionMet] = useState(false);

  const [answer, setAnswer] = useState('');

  useEffect(() => {
    setAnswer(getRandomAnswer);
  }, [])

  useEffect(() => {
    console.log(turnNumber);
    let lastTurn = 5;
    if (turnNumber > lastTurn) {
      setIsGameOver(true);
      setIsWinConditionMet(false);
    }
  }, [turnNumber]);

  function getRandomAnswer() {
    let l = ALL_WORDS.length;
    let r = Math.floor(Math.random() * l);
    return ALL_WORDS[r];
  }

  function guessWord(guess) {

    if (guess == answer) {
      setTimeout(() => {
        alert("you win");
        setIsWinConditionMet(true);
        setIsGameOver(true);
      }, 2000)
      return;
    }

    setTurnNumber(turnNumber + 1);

  }

  return (
    <div className="App">
      <h1>Wordle</h1>

      <div className="guess-container">
        {Array(6).fill('').map((turn, i) => (
          <Input
            key={i}
            onSubmit={guessWord}
            answer={answer}
            isEnabled={i == turnNumber}
          />
        ))}
      </div>

      {isGameOver && <div>answer: {answer}</div>}

    </div>
  );
}

export default App;
