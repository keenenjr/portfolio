import React from 'react'
import ColorButton from '../ColorButton';

const GameScreen = ({viewport, colourToFind, tilesToDisplay, handleClick, resetGame, resetHighScore}) => {
  return (
    <>
        <div className="word-container">
            <h4>{colourToFind}</h4>
        </div>
        <br />
        <div className="colour-container">
            {tilesToDisplay.map((value, index) => {
                return (
                    <div key={index} style={viewport.height > 809 ? {backgroundColor: `${value}`} : (viewport.height > 720 ? {backgroundColor: `${value}`, height: '200px'} : {backgroundColor: `${value}`, height: '130px'})} className="colour-tile" onClick={() => {handleClick(value)}}></div>
                )
            })}
        </div>
        <br />
        <div style={{'display': 'flex'}}>
            <ColorButton onClick={resetGame} variant="outlined">RESTART</ColorButton>
            &nbsp;
            <ColorButton onClick={resetHighScore} variant="outlined">RESET HIGHSCORE</ColorButton>
        </div>
    </>
  )
}

export default GameScreen;
