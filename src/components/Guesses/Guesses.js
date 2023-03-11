import React, {useState} from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Guesses({guesses, answer}) {
  
 
  return <>

  <div className="guess-results">
  
    {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
      <p 
      key={num}
      className="guess"
      >
        <Guess key={num} value={guesses[num]} answer={answer} />
      </p>
    )
    )} 

  </div> 
  
  </>;
}

export default Guesses;
