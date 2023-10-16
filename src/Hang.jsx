import React, { useState, useEffect } from "react";
import "./Hang.css";
import Modal from "./Modal";

const word = "mascote";
const maxTries = 6;

const Hang = () => {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [tries, setTries] = useState(0);
  const [isWinner, setIsWinner] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!gameOver) {
      const wordArray = word.split(" ").join("").split("");
      const correctlyGuessed = wordArray.filter((letter) =>
        guessedLetters.includes(letter)
      );
      if (correctlyGuessed.length === wordArray.length) {
        setIsWinner(true);
        setGameOver(true);
      } else if (tries >= maxTries) {
        setGameOver(true);
      }
    }
  }, [guessedLetters, tries, gameOver]);

  function handleGuess(letter) {
    if (!guessedLetters.includes(letter) && !gameOver) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setTries(tries + 1);
      }
    }
  }

  function getWordDisplay() {
    return word
      .split("")
      .map((letter) => {
        if (letter === " " || guessedLetters.includes(letter)) {
          return letter;
        } else {
          return "_";
        }
      })
      .join("");
  }

  function restartGame() {
    setGuessedLetters([]);
    setTries(0);
    setIsWinner(false);
    setGameOver(false);
  }

  return (
    <div className="forca-container">
     <div className="content-um">
     <h1>Jogo da Forca 😬</h1>
      <p>Tentativas restantes: {maxTries - tries}</p>
      <div className="word-display">{getWordDisplay()}</div>
      <div className="alphabet">
        {Array.from("abcdefghijklmnopqrstuvwxyz").map((letter, index) => (
          <button
            key={index}
            onClick={() => handleGuess(letter)}
            disabled={guessedLetters.includes(letter) || gameOver || isWinner}
          >
            {letter}
          </button>
        ))}
      </div>
     </div>
      <div className="hangman">
        <img
          src={`images/hangman${tries}.png`}
          alt={`Tentativa ${tries}`}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>
      {gameOver && <Modal isWinner={isWinner} restartGame={restartGame} />}
    </div>
  );
};

export default Hang;
