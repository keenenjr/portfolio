import logo from './logo.svg';
import './App.css';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import TicTacToe from './Components/TicTacToe';
import ColourMania from './Components/ColourMania';
import Hangman from './Components/Hangman';
import About from './Components/About';
import Education from './Components/Education';
import Work from './Components/Work';
import Contact from './Components/Contact';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme({
  typography: {
    fontFamily: [
      'Source Code Pro',
      'monospace',
    ].join(','),
  },});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='' element={<Home />}/>
            <Route path='/tictactoe' element={<TicTacToe />} />
            <Route path='/colourmania' element={<ColourMania />} />
            <Route path='/hangman' element={<Hangman />} />
            <Route path='/about' element={<About />} />
            <Route path='/education' element={<Education />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>

  );
}

export default App;
