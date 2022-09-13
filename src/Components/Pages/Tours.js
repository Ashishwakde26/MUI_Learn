import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Imagecolloge from './Imagecolloge';
import CustomizedAccordions from './CustomizedAccordions';
import FixedBottomNavigation from './FixedBottomNavigation';

const Tours = () => {

    return (
       <Container sx={{width:800}}>
            <Typography variant="h3" component="h1" marginTop={3}>
                Immerse into the falls
            </Typography>
            <Box sx={{display: "flex"}} marginTop={3}>
                <img 
                src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/495000/495536-bellagio-casino.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh"
                width={500}
                height={400}
                />
                <Imagecolloge />
            </Box>

            <Box>
                <Typography variant="h6" component="b" marginTop={2}>
                    About this ticket
                </Typography>

                <Typography variant="paragraph" component="p" marginTop={2}>
                    afrfar r ararg erg rger gerg ewrgwe rgwe gwerg ewrgw egwrgw rgwe rgwe rgwerg werg afrfar r ararg erg rger gerg ewrgwe rgwe gwerg ewrgw egwrgw rgwe rgwe rgwerg werg afrfar r ararg erg rger gerg ewrgwe rgwe gwerg ewrgw egwrgw rgwe rgwe rgwerg werg afrfar r ararg erg rger gerg ewrgwe rgwe gwerg ewrgw egwrgw rgwe rgwe rgwerg werg
                    afrfar r ararg erg rger gerg ewrgwe rgwe gwerg ewrgw egwrgw rgwe rgwe rgwerg werg
                    afrfar r ararg erg rger gerg ewrgwe rgwe gwerg ewrgw egwrgw rgwe rgwe rgwerg werg
                </Typography>

                <Box marginBottom={8}>

                <Typography variant="h6" component="h1" marginTop={2} marginBottom={2} >
                    Frequently asked questions
                </Typography>
                <CustomizedAccordions />
                </Box>
                
                <FixedBottomNavigation />

            </Box>
       </Container>
    )
}

export default Tours;