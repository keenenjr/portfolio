import React from 'react'

const DisplayWord = ({hiddenWord, correctGuesses}) => {
  return (
    <>
        <div className='hangman-hidden-word'>
            {hiddenWord.split('').map((letter, i) => {
                return (
                    <span key={i}>
                        {correctGuesses.includes(letter) ? letter : (letter === ' ' ? ' ' : '_')}
                    </span>
                )
            })}
        </div>
        <br />
        <br />
    </>
  )
}

export default DisplayWord
