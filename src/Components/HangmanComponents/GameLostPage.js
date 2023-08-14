import React from 'react'

const GameLostPage = ({resetGame, ColorButton, hiddenWord}) => {
  return (
    <>
        <h3>Sorry, you lost. ☹️</h3>
        <h3>The phrase was '{hiddenWord}'!</h3>
        <h5>Click the button below to start a new game.</h5>
        <br />
        <ColorButton onClick={resetGame} variant="outlined">NEW GAME</ColorButton>
    </>
  )
}

export default GameLostPage;
