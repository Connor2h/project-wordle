import React, { useState } from 'react';

const initialState = { guess: "" };

function MyForm() {
  const [guess, setGuess] = useState(initialState);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(guess);
    setGuess(initialState);
  }

  const onChangeHandler = (event) => {
    const oldObject = { ...guess, guess: String(event.target.value).toUpperCase() };
    setGuess(oldObject);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={guess.guess} onChange={onChangeHandler} minLength={5} maxLength={5} />
    </form>
  )
}

export default MyForm;
