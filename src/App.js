import React from 'react';
import Basicbuttons from './Components/Basicbuttons';
import { Container, createTheme, ThemeProvider}  from '@mui/material';
import Header from './Components/Header';
import './App.css'
import FeaturedPost from './Components/FeaturedPost';


function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        {/* <Basicbuttons /> */}
        <Header />
        <FeaturedPost />
      </Container>
    </ThemeProvider>
  );
}

export default App;
