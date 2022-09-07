import React from 'react';
import { Stack, Box, Divider}  from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Basicbuttons = () => {
    return (
        <>
        <Stack spacing={2} direction="row" alignItems="center">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>

        <Box sx={{ '& button': { m: 1 } }}>
            <Button variant="contained" size="small">
                Small
            </Button>
        </Box>
        <Divider />
        <IconButton color="primary" aria-label="upload picture" component="label">
            <PhotoCamera />
        </IconButton>
        </>
    )
}

export default Basicbuttons;