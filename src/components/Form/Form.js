import React, {useState} from 'react';

function Form({status, handleSubmittedGuess}) {
  const [inputValue, setInputValue] = useState('');

  return <>
  <form className="guess-input-wrapper" 
        onSubmit={event => {
          event.preventDefault();
          // console.log(inputValue.toUpperCase());
          handleSubmittedGuess(inputValue.toUpperCase());
          setInputValue('');
        // runSearch(searchTerm);
      }}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input
    required
    disabled={status !== "running"}
    minLength={5}
    maxLength={5}
    pattern="[a-zA-Z]{5}"
    id="guess-input" 
    type="text"
    value={inputValue.toUpperCase()}
    onChange={(event) => {
      setInputValue(event.target.value);
    }} 
  />
  </form>


  </>;


}

export default Form;
