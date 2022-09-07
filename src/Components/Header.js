import React from 'react';
import { Toolbar, IconButton, Typography, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {

    return (
        <Toolbar>
            <IconButton>
                <MenuIcon />
            </IconButton>
            
            <Typography>Blogging Website</Typography>

            
                <IconButton>
                    <Badge badgeContent={2} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            

            <IconButton>
                <AccountCircleIcon />
            </IconButton>


            
        </Toolbar>
    )
}

export default Header;