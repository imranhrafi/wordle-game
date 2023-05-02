import React, { useState } from "react";
import GuessInput from "./Components/GuessInput";
import GuessResults from "./Components/GuessResult";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameOverBanner from "../GameOverBanner/GameOverBanner";

function Guess({ answer }) {
  const [gameStatus, setGameStatus] = useState("running");
  const [guess, setGuess] = useState("");
  const [guessResults, setGuessResults] = useState([]);

  const handleGuess = (e) => {
    e.preventDefault();
    if (guess.length === 5) {
      const nextGuess = {
        value: guess,
        id: `${guess}-${Math.random()}`,
      };

      const nextGuessResult = [...guessResults, nextGuess];
      setGuessResults(nextGuessResult);
      setGuess("");

      if (guess.toUpperCase() === answer) {
        setGameStatus("won");
      } else if (nextGuessResult.length >= NUM_OF_GUESSES_ALLOWED) {
        setGameStatus("lost");
      } else if (nextGuessResult <= 0) {
        setGameStatus("Running");
      }
    }
  };

  return (
    <>
      {gameStatus}
      <GuessResults
        guessResults={guessResults}
        answer={answer}
        setGuessResults={setGuessResults}
        setGameStatus={setGameStatus}
      />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        handleGuess={handleGuess}
        gameStatus={gameStatus}
      />
      {gameStatus !== "running" && (
        <GameOverBanner
          gameStatus={gameStatus}
          answer={answer}
          noOfguess={guessResults.length}
        />
      )}
      ;
    </>
  );
}

export default Guess;
