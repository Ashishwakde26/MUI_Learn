import React from 'react';
import { Toolbar, IconButton, Typography, Badge, Divider, Card, CardContent} from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const useStyle = makeStyles({
    title: {
        flexGrow: 1
    },
    taglin: {
        fontSize: 20,
        justifyContent: "center",
        textTransform: "uppercase",
        fontFamily: "monserrat"
    },

});

const Header = () => {

    const classes = useStyle();

    return (
        <>
        <Toolbar>
            <IconButton>
                <MenuIcon />
            </IconButton>
            
            <Typography variant="h6" className={classes.title}>Blogging Website</Typography>

            
                <IconButton>
                    <Badge badgeContent={2} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            

            <IconButton>
                <AccountCircleIcon />
            </IconButton>

        </Toolbar>

        <Divider />

        <Toolbar className={classes.taglin}>
            Express your emotions through words
        </Toolbar>

        


        </>
    )
}
    
export default Header;