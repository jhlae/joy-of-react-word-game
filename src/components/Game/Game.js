import React, {useState} from 'react';
import Form from '../Form';
import Guesses from '../Guesses';
import StatusBanner from '../StatusBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [status, setStatus] = React.useState('running');
  const [guessList, setGuessList] = useState([]);
 
  function handleSubmittedGuess(guess) {
    const nextGuesses = [...guessList, guess];
    setGuessList(nextGuesses);
    if(guess === answer) {
      setStatus("won");
    } else if (nextGuesses.length > NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
  }

  return <>
    {/* <div>{status}</div> */}
    <Guesses guesses={guessList} answer={answer} />
    <Form 
      status={status}
      handleSubmittedGuess={handleSubmittedGuess} 
    />
    {status !== 'running' && (
      <StatusBanner status={status} numOfGuesses={guessList.length} />
    )}
   </>;
}

export default Game;