import React, { useState } from 'react';

const initialState = "";

function MyForm() {
  const [guess, setGuess] = useState(initialState);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (guess.length < 5) {
      window.alert("Please enter exactly 5 characters");
      return
    }
    console.log(guess);
    setGuess('');
  }

  const onChangeHandler = (event) => {
    setGuess(String(event.target.value).toUpperCase());
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input required id="guess-input" type="text" value={guess} onChange={onChangeHandler} minLength={5} maxLength={5} />
    </form>
  )
}

export default MyForm;
