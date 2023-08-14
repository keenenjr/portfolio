import React from 'react'

const SvgFigure = ({wrongGuesses}) => {
  return (
    <>
        {/* Hangman SVG sourced from - Jesse Hall (Github: https://github.com/codeSTACKr) */}
        <svg height="250" width="200" className="figure-container">
            {/* <!-- Rod --> */}
            <line x1="60" y1="20" x2="140" y2="20" />
            <line x1="140" y1="20" x2="140" y2="50" />
            <line x1="60" y1="20" x2="60" y2="230" />
            <line x1="20" y1="230" x2="100" y2="230" />

            {/* <!-- Head --> */}
            {wrongGuesses.length > 0 &&
                <circle cx="140" cy="70" r="20" />
            }
            {/* <!-- Body --> */}
            {wrongGuesses.length > 1 &&
                <line x1="140" y1="90" x2="140" y2="150" />
            }
            {/* <!-- Arms --> */}
            {wrongGuesses.length > 2 &&
                <line x1="140" y1="120" x2="120" y2="100" />
            }
            {wrongGuesses.length > 3 &&
                <line x1="140" y1="120" x2="160" y2="100" />
            }
            {/* <!-- Legs --> */}
            {wrongGuesses.length > 4 &&
                <line x1="140" y1="150" x2="120" y2="180" />
            }
            {wrongGuesses.length > 5 &&
                <line x1="140" y1="150" x2="160" y2="180" />
            }
        </svg>
        <br />
        <br />
    </>

  )
}

export default SvgFigure;
