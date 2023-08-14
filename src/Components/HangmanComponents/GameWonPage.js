import React from 'react'

const GameWonPage = ({resetGame, ColorButton}) => {
  return (
    <>
        <h3>Congratulations, you won! 🙃</h3>
        <h5>Click the button below to start a new game.</h5>
        <br />
        <ColorButton onClick={resetGame} variant="outlined">NEW GAME</ColorButton>
    </>
  )
}

export default GameWonPage;
