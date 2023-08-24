import React from 'react'
import TimerOffIcon from '@mui/icons-material/TimerOff';
import TimerIcon from '@mui/icons-material/Timer';

const Info = ({viewport, score, gameInProgress, timer, highScore}) => {
  return (
    <>
        {gameInProgress === true ? 
                <div className={viewport.width > 500 ? "info-container" : 'info-container-small'}>
                    <div className="score-container">
                        <h4>score: {score}</h4>
                    </div>
                    <div className="timer-container">
                        <div className="timer-icon">{gameInProgress ? <TimerIcon /> : <TimerOffIcon />}</div>
                        <div>:</div>
                        <div className="timer-text">
                            <h3>{timer} s</h3>
                        </div>
                    </div>
                    <div className="score-container">
                        <h4>highscore: {highScore}</h4>
                    </div>
                </div>
            :
            <div className='game-header'>
                <div>Click a colour to start the timer!</div>
            </div>
        }
        <br />
    </>
  )
}

export default Info;
