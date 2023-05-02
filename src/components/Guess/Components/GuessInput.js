const GuessInput = ({ gameStatus, guess, setGuess, handleGuess }) => {
  return (
    <form className='guess-input-wrapper' onSubmit={handleGuess}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
};

export default GuessInput;
