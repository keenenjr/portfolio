import React from 'react'

const IncorrectGuesses = ({wrongGuesses}) => {
  return (
    <>
        <div className='hangman-wrong-guesses'>
            Incorrect Guesses: [
            {wrongGuesses.map((letter, i) => {
                return (
                    <span key={i}>
                        {i === wrongGuesses.length - 1 ? `${letter}` : `${letter}, `}
                    </span>
                )
            })}]
        </div>

        <br />
        <br />
    </>
  )
}

export default IncorrectGuesses;
