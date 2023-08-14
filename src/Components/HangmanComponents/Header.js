import React from 'react'

const Header = () => {
  return (
    <>
      <div className="hangman-header">
        <div>Find the secret word or phrase.</div>
        <div>Topic: Computer Science!</div>
        <div>Enter one letter at a time.</div>
        <br />
        <div>However, beware...</div> 
        <div>Six wrong guesses and you'll be <span className="spooky-text">HANGED!</span></div>
      </div>
      <br />
      <br />
    </>
  )
}

export default Header;
