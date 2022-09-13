import { TextField, Toolbar } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const Textfields = () => {

    return (
        <div className='textfield_css'>

            <Stack spacing={4}>
                <Stack direction='row' spacing={4}>
                    <TextField label='name' variant='filled'/>
                    <TextField label='name1' variant='filled'/>
                </Stack>

                <Stack direction='row' spacing={4}>
                    <TextField label='name' variant='filled'/>
                    <TextField label='name1' variant='filled'/>
                </Stack>   
            </Stack>       
        </div>
    )
}

export default Textfields;