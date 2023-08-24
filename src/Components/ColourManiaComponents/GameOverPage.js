import React from 'react'
import ColorButton from '../ColorButton';

const GameOverPage = ({score, resetGame}) => {
  return (
    <>
        <h3>Sorry, you didn't beat the highscore ☹️</h3>
        <h3>Your score was {score}!</h3>
        <h5>Click the button below to start a new game.</h5>
        <br />
        <ColorButton onClick={resetGame} variant="outlined">NEW GAME</ColorButton>
    </>
  )
}

export default GameOverPage;
