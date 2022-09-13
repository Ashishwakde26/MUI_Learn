import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, Rating } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import {createTheme, ThemeProvider} from '@mui/material';


    const theme = createTheme({
        typography: {
        body2: {
            fontSize: 11,
        },
    }
    });


const Destination = (prop) => {


    return (

            <Grid item xs={3}>
                <ThemeProvider theme={theme}>
                    <Paper elevation={3} >
                        <img 
                        src={prop.tours.image} 
                        className='img'
                        />
                        <Box paddingX={1}>
                            <Typography variant="subtitle2" component="b" gutterBottom>
                                {prop.tours.name}
                            </Typography>

                            <Box sx={{
                                display: "flex",
                                alignItems: "center"
                                 }}>
                                <AccessTime sx={{width:12.5}} />
                                <Typography variant="body2" marginLeft={0.5}>
                                    {prop.tours.duration} Hours
                                </Typography>

                                
                            </Box>

                            <Box sx={{
                                display: "flex",
                                alignItems: "center"
                                 }}
                                 marginTop={1.5}
                                 >
                                
                                <Rating name="read-only" value={prop.tours.rating} readOnly precision={0.5} size="small"/>

                                <Typography variant="body2" marginLeft={0.5}>
                                    {prop.tours.rating}
                                </Typography>

                                <Typography variant="body2" marginLeft={2.5}>
                                    ({prop.tours.numberOfReviews} reviews)
                                </Typography>
                            </Box>

                            <Box>
                                <Typography variant="h6" component="h3">
                                    From C ${prop.tours.price}
                                </Typography>
                            </Box>

                        </Box>   
                    </Paper>
                </ThemeProvider>
            </Grid>

    )
}

export default Destination;