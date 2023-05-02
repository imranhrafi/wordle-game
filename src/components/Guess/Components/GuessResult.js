import { NUM_OF_GUESSES_ALLOWED } from "../../../constants";
import { range } from "../../../utils";
import GuessContainer from "./guessContainer";

function GuessResults({
  guessResults,
  answer,
  setGuessResults,
  setGameStatus,
}) {
  const handleReset = () => {
    setGuessResults([]);
    setGameStatus("running");
  };

  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <GuessContainer
          key={num}
          answer={answer}
          value={
            guessResults && guessResults[num]
              ? guessResults[num].value
              : undefined
          }
        />
      ))}
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <span style={{ cursor: "pointer" }} onClick={handleReset}>
          Reset
        </span>
        <span style={{ cursor: "pointer" }}> Rules</span>
      </div>
    </div>
  );
}

export default GuessResults;
