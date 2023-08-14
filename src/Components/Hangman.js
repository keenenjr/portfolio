import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import GameWonPage from './HangmanComponents/GameWonPage';
import GameLostPage from './HangmanComponents/GameLostPage';
import Header from './HangmanComponents/Header';
import DisplayWord from './HangmanComponents/DisplayWord';
import SvgFigure from './HangmanComponents/SvgFigure';
import IncorrectGuesses from './HangmanComponents/IncorrectGuesses';

const ColorButton = styled(Button)(({ theme }) => ({
    color: '#051e39',
    backgroundColor: '#c5e0ff',
    borderColor: '#051e39',
    '&:hover': {
      backgroundColor: '#051e39',
      color: '#c5e0ff',
    },
}));

const words = [
    'developer', 
    'frontend programmer', 
    'backend developer', 
    'javascript', 
    'machine learning', 
    'artificial intelligence', 
    'database systems',
    'frameworks',

]

const Hangman = () => {
    const [gameInProgress, setGameInProgress] = React.useState(true)
    const [hiddenWord, setHiddenWord] = React.useState(words[Math.floor(Math.random() * words.length)])
    const [wrongGuesses, setWrongGuesses] = React.useState([])
    const [correctGuesses, setCorrectGuesses] = React.useState([])

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            const {key, keyCode} = e
            if (gameInProgress && keyCode >= 65 && keyCode <= 99) {
                const letter = key.toLowerCase()
                if (hiddenWord.includes(letter) && !correctGuesses.includes(letter)) {
                    setCorrectGuesses(oldArray => [...oldArray, letter])
                } else if (!hiddenWord.includes(letter) && !wrongGuesses.includes(letter)){
                    setWrongGuesses(oldArray => [...oldArray, letter])
                }
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [gameInProgress, correctGuesses, wrongGuesses, hiddenWord])

    const gameStatus = () => {
        let outcome = 'won'
        const word = hiddenWord.split(' ').join('')
        word.split('').forEach(letter => {
            if (!correctGuesses.includes(letter)) {
                outcome = '';
            }
        })
        if (wrongGuesses.length > 5) {
            outcome = 'lost'
        }
        return outcome
    }

    const resetGame = () => {
        setGameInProgress(true)
        setHiddenWord(words[Math.floor(Math.random() * words.length)])
        setWrongGuesses([])
        setCorrectGuesses([])
    }

    return (
        <div className="hangman-container">
            <h1>HANGMAN</h1>
            {gameStatus() === 'won' &&
                <GameWonPage resetGame={resetGame} ColorButton={ColorButton} />
            }
            {gameStatus() === 'lost' &&
                <GameLostPage resetGame={resetGame} ColorButton={ColorButton} hiddenWord={hiddenWord} />
            }
            {gameStatus() === '' && 
                <>
                    <Header />
                    <DisplayWord hiddenWord={hiddenWord} correctGuesses={correctGuesses} />
                    <SvgFigure wrongGuesses={wrongGuesses} />
                    <IncorrectGuesses wrongGuesses={wrongGuesses} />
                    <ColorButton onClick={resetGame} variant="outlined">RESET</ColorButton>
                </>
            }
        </div>
    )
}

export default Hangman;