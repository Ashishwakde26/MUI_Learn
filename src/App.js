import React from 'react';
import Basicbuttons from './Components/Basicbuttons';
import { Container, createTheme, ThemeProvider}  from '@mui/material';
import Header from './Components/Header';
import './App.css'
import FeaturedPost from './Components/FeaturedPost';
import Textfields from './Components/Textfields';
import Muiselect from './Components/Muiselect';
import Travels from './Components/Pages/Travels';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Tours from './Components/Pages/Tours';
import SearchAppBar from './Components/SearchAppBar';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    // <ThemeProvider theme={darkTheme}>
    //   <Container>
    //     {/* <Basicbuttons /> */}
        
    //       <Header />
    //       <FeaturedPost />
        
    //     <Textfields />

    //     <Muiselect />

    //   </Container>
    // </ThemeProvider>
    <>
      <BrowserRouter>
          <SearchAppBar />
          <Route exact path="/" component={Travels}/>
          <Route exact path="/:id" component={Tours} />
      </BrowserRouter>

    </>

  );
}

export default App;
