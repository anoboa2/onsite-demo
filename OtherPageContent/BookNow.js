import { Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Fade } from 'react-reveal';
import Typography from '../../../modules/components/Typography';
import './BookNow.css';

const useStyles = makeStyles((theme) => ({
    item: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down("sm")]: {


        }
    },
    typographyone: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px !important",
        }
    },
    typographytwo: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px !important",
        }
    },
}))


const BookNow = () => {
    const classes = useStyles()
    const handleClick = () => {
        document.body.scrollTop = 50;
        document.documentElement.scrollTop = 50;
    };
    return (
        <Fade bottom>

            <Grid className={classes.item}>
                <div className="book-image">

                    <Box className="book-text">
                        <Typography className={classes.typographyone} gutterBottom variant="h3">
                            Ready to book your trip?
                        </Typography >
                        <Typography className={classes.typographytwo} marginBottom="40px" variant="h5">
                            Your next trip is a few clicks away
                        </Typography>
                        <Button onClick={handleClick}
                            variant="contained" style={{
                                backgroundColor: "#00aaca", padding: "10px 55px",
                                borderRadius: "30px",
                                color: "white",
                                fontSize: "15px"
                            }}>Let's Go</Button>
                    </Box>

                </div>
            </Grid>
        </Fade>

    );
}

export default BookNow;