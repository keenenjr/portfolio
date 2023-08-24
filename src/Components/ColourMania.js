import React from 'react';
// import { useNavigate } from 'react-router-dom';

import Header from './ColourManiaComponents/Header';
import Info from './ColourManiaComponents/Info';
import GameScreen from './ColourManiaComponents/GameScreen';
import NewHighScorePage from './ColourManiaComponents/NewHighScorePage';
import GameOverPage from './ColourManiaComponents/GameOverPage';


const ColourMania = ({viewport}) => {
    const [gameInProgress, setGameInProgress] = React.useState(false)
    const [highScore, setHighScore] = React.useState(localStorage.getItem('cm_highscore') ? localStorage.getItem('cm_highscore') : '0')
    const [score, setScore] = React.useState(0)
    const [timer, setTimer] = React.useState(60)
    const [colourToFind, setColourToFind] = React.useState('')
    const [tilesToDisplay, setTilesToDisplay] = React.useState([])
    const [gameStatus, setGameStatus] = React.useState('')

    const colours = [
        'red', 
        'blue', 
        'orange', 
        'yellow', 
        'green', 
        'purple', 
        'pink',
        'aqua',
        'azure',
        'beige',
        'bisque',
        'black',
        'brown',
        'chocolate',
        'crimson',
        'cyan',
        'gold',
        'grey',
        'ivory',
        'khaki',
        'lavender',
        'lime',
        'magenta',
        'maroon',
        'navy',
        'olive',
        'tan',
        'teal',
        'turquoise'
    ]

    React.useEffect(() => {
        if (gameInProgress && timer > 0) {
            setTimeout(() => setTimer(timer - 1), 1000)
        } else {
            if (score > parseInt(highScore)) {
                setGameInProgress(false)
                setGameStatus('new_highscore')
                localStorage.setItem('cm_highscore', score)
                setHighScore(localStorage.getItem('cm_highscore'))
            } else if (score <= parseInt(highScore) && score !== 0 && gameInProgress) {
                setGameStatus('over')
            }
            setTimer(60)
            setGameInProgress(false)
        }
    }, [gameInProgress, timer, score, highScore, gameStatus])

    React.useEffect(loadGame, [])

    function getRandomInt (max) {
        return Math.floor(Math.random() * max)
    }
    
    function loadGame() {
        let randomInt = getRandomInt(colours.length)
        const correctAnswer = colours[randomInt]
        setColourToFind(correctAnswer)

        let colourIndices = []
        while (true) {
            if (colourIndices.length === 4) {
            break;
            }
            randomInt = getRandomInt(colours.length)
            if (!colourIndices.includes(randomInt)) {
            colourIndices.push(randomInt)
            }
        }
        let coloursToSet = [colours[colourIndices[0]], colours[colourIndices[1]], colours[colourIndices[2]], colours[colourIndices[3]]]
        if (!coloursToSet.includes(correctAnswer)) {
            randomInt = getRandomInt(4)
            coloursToSet[randomInt] = correctAnswer
        }
        setTilesToDisplay(coloursToSet)
    }

    function handleClick(value) {
        if (!gameInProgress) {
            setTimer(60)
            setGameInProgress(true)
            setScore(1)
            loadGame()
        }

        if (value === colourToFind && gameInProgress) {
            setScore(score + 1)
            loadGame()
        }
    }

    function resetGame() {
        setGameInProgress(false)
        setTimer(60)
        setScore(0)
        setGameStatus('')
        loadGame()
    }

    function resetHighScore() {
        localStorage.setItem('cm_highscore', 0)
        setHighScore(localStorage.getItem('cm_highscore'))
    }

    return (
        <div className="game-container">
            <h1>COLOUR MANIA</h1>
            {gameStatus === '' && 
                <>
                    <Header highScore={highScore} gameInProgress={gameInProgress}/>
                    <Info viewport={viewport} score={score} gameInProgress={gameInProgress} timer={timer} highScore={highScore}/>
                    <GameScreen viewport={viewport} colourToFind={colourToFind} tilesToDisplay={tilesToDisplay} handleClick={handleClick} resetGame={resetGame} resetHighScore={resetHighScore}/>
                </>
            }

            {gameStatus === 'new_highscore' && 
                <NewHighScorePage resetGame={resetGame}/>
            }

            {gameStatus === 'over' && 
                <GameOverPage score={score} resetGame={resetGame}/>
            }
        </div>
    )
}

export default ColourMania;