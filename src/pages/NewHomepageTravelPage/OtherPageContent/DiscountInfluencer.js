import { Button, Grid , Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Fade } from 'react-reveal';
import Typography from '../../../modules/components/Typography';
import './Discount.css';

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
            whiteSpace: "break-spaces",
        }
    },
    typographytwo: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px !important",
        }
    },
}))


 

const DiscountInfluencer = () => {
    const classes = useStyles()
    return (
        <Fade bottom>

            <Grid className={classes.item}>
                <div className="book-image2">

                    <Box className="book-text3">
                        <Typography className={classes.typographyone} marginBottom="40px" variant="h4">
                        Looking for bespoke travel itineraries based on your interests?
                        </Typography >
                        <Typography className={classes.typographytwo} marginBottom="40px" variant="h5">
                        In addition to our influencer travel plans, Onsite offers a concierge service to fully customize your itinerary.
                        </Typography>
                        <Button 
                            href="https://try.onsiteplanning.com/onsiteplanning/"
                            variant="contained" style={{
                                backgroundColor: "#00aaca", padding: "10px 55px",
                                borderRadius: "10px",
                                color: "white",
                                fontSize: "15px"
                            }}>Customize My Trip</Button>
                    </Box>

                </div>
            </Grid>
        </Fade>

    );
}

export default DiscountInfluencer;