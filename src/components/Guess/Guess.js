import React, {useState} from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({value,answer}) {
 let result = checkGuess(value,answer);
  return <>
    {range(5).map((num) => (
      <span 
        key={num}
        className={`cell ${ result ? result[num].status : ''}`}
        >
        {value ? value[num] : undefined}
      </span>
    )
    )} 
  </>;
}

export default Guess;