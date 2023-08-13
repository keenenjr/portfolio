import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
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
          <Navbar />
      </ThemeProvider>
    </>

  );
}

export default App;
