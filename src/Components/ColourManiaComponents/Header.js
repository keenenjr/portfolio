import React from 'react'

const Header = ({highScore, gameInProgress}) => {
  return (
    <>
      <div className="game-header">
        <div>How fast can you match words to colours?</div>
        <div>Each time a colour word appears,</div>
        <div>click the matching square.</div>
        <br />
        <div>Match as many colours as you can...</div>
        <div>within the 60 second limit!</div>
        <br />
        <div>{gameInProgress === true ? 'Can you beat the current highscore?': `Can you beat the highscore of ${highScore}?`}</div> 
      </div>
      <br />
    </>
  )
}

export default Header;
