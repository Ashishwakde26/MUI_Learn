import { Container, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Destination from '../Destination';
import SearchAppBar from '../SearchAppBar';
import Cities from '../data.json';



const Travels = () => {
    return (
        <>
            <Container sx={{marginY: 5}}>

                {Cities.map(city => (
                    <>
                    <Typography
                    variant='h4'
                    component='h5'
                    marginTop={5}
                    marginBottom={3}
                    >
                        {city.name}
                    </Typography>

                    <Grid container spacing={2}>
                        {city.tours.map((tours => (
                            <Destination tours={tours}/>
                        )))}
                    </Grid>

                    </>
                    

                ))}
            </Container>
        </>
    )
}

export default Travels;