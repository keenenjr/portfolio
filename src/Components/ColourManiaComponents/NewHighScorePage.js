import React from 'react'
import ColorButton from '../ColorButton';

const NewHighScorePage = ({resetGame}) => {
  return (
    <>
        <h3>Congratulations, you set a new high score!</h3>
        <h5>Click the button below to start a new game.</h5>
        <br />
        <ColorButton onClick={resetGame} variant="outlined">NEW GAME</ColorButton>
    </>
  )
}

export default NewHighScorePage;
