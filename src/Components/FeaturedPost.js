import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    cover: {
  //    backgroundImage: `url(https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)`,
      backgroundPosition: "center",
      padding: "35px 25px",
    },
    title: {
      fontSize: 40,
      fontFamily: "Montserrat",
    },
    textContainer: {
      color: "white",
    },
  });



const FeaturedPost = () => {

    const classes = useStyles();

    return (
            <>
                <Card sx={{ backgroundImage:`url(https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)` }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 30 }} gutterBottom>
                            Title of a longer featured blog post
                        </Typography>

                        <Typography>
                            Multiple lines of text that form the lede. informing new readers quickly and efficiently about whats most interesting in the post's containt
                        </Typography>
                        </CardContent>

                        <CardActions>
                            <Button sx={{color: "#90caf9"}}>
                                READ MORE ...
                            </Button>
                        </CardActions>
                    
                </Card>
            </>
    )
}

export default FeaturedPost;