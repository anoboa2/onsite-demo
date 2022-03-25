import { makeStyles } from "@mui/styles";
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Fade } from 'react-reveal';
import Typography from '../../../modules/components/Typography';
import iphone12 from "./images/iphone12-mockup1.webp";

const item = {


};


const useStyles = makeStyles((theme) => ({
    boxone: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down("md")]: {
            display: 'flex',
            flexDirection: "column !important",
            width: "100%",
        },
        [theme.breakpoints.down("sm")]: {
            display: 'flex',
            flexDirection: "column !important",
            width: "100%",
        }
    },

    typographytwo: {
        borderBottom: "3px solid #0FAACD",
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "20px !important",
        }
    },
    typographyone: {
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "20px !important",
        }
    },
    thegrid: {
        padding: "5%",
    },
    typography3: {
        [theme.breakpoints.down("sm")]: {
            marginTop: "5% !important",
            fontSize: "15px !important",
            fontWeight: "lighter !important",
        }
    },
    thebox: {
        marginTop: "20%",
        [theme.breakpoints.down("md")]: {
            maxWidth: "95%",
            marginTop: "0 !important",
        },

    },
}))

const PhoneMockupTwo = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Fade bottom>
                <Grid className={classes.boxone}>
                    <Grid item sm={6} xs={12} order={1} sx={{ justifyContent: 'center' }}>
                        <Box

                            component="img"
                            src={iphone12}
                            alt="iphone mockup of mobile app itinerary pages"
                            sx={{ height: { xs: 400, sm: 700 } }}
                        />

                    </Grid>

                    <Grid className={classes.thegrid} item sm={6} xs={12} md={6} container order={5} sx={{ justifyContent: 'left' }}>

                        <Box className={classes.thebox}>

                            <Box className={classes.boxtwo}><Typography className={classes.typographyone} variant="h4" >
                                From plan till you arrive
                            </Typography><Typography className={classes.typographytwo} color="primary.main" display="inline-block" variant='h4'>home</Typography></Box>
                            <Typography className={classes.typography3} variant="h5">
                                {'We are there every step of the way. Your agent will provide an itinerary for your feedback, make any needed changes now or at any point in your journey, book every aspect of your trip and be there for any questions till you arrive home.'}
                            </Typography>

                        </Box>


                    </Grid>
                </Grid>
            </Fade>
        </Grid>
    );
}

export default PhoneMockupTwo;