import React from "react";

function StatusBanner({status, numOfGuesses}) {
  if(status === 'won'){
  return (
    <div className="happy banner">
      <p><strong>Congratulations!</strong> Got it in <strong>{numOfGuesses} guesses</strong>.</p>
    </div>
  )
  } else if(status === 'lost'){
    return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
    </div>
    )
  }
}

export default StatusBanner;
