import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Typography from '../../../modules/components/Typography';
import iphone13 from "./images/iphone13-mockup1.webp";
import { Fade } from "react-reveal";
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
    item: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column-reverse !important',

        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column-reverse !important',

        }
    },
    gridtwo: {
        alignContent: 'right',
        [theme.breakpoints.down("md")]: {
            justifyContent: 'right !important',
            alignContent: 'center',
            order: 4,
        },
        [theme.breakpoints.down("sm")]: {
            justifyContent: 'left !important',
            alignContent: 'center',
            order: 4,
        }
    },
    gridone: {
        marginTop: "80px !important",
        width: '100%',

        [theme.breakpoints.down("sm")]: {
            marginTop: '10px !important',
        }
    },
    typography: {
        borderBottom: "3px solid #0FAACD",
        maxWidth: "40%",
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "20px !important",
        }
    },
    typographyone: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px !important",
        }
    },
    boxtwo: {
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: {

        }
    },
    typographytwo: {
        [theme.breakpoints.down("sm")]: {
            marginTop: "10px !important",
            fontSize: "15px !important",
            fontWeight: "lighter !important",
        }
    }
}))

const PhoneMockupOne = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Fade bottom>
                <Grid className={classes.item}>
                    <Grid item container md={6} xs={12} order={5} className={classes.gridtwo} >
                        <Box
                            component="img"
                            src={iphone13}
                            alt="iphone mockup of mobile app itinerary pages"
                            sx={{ height: { xs: 400, sm: 600 } }}
                        />

                    </Grid>
                    <Grid >
                        <Grid item padding={10} xs={12} container md={12} order={6} sx={{ justifyContent: 'center' }}>

                            <Box className={classes.gridone}>
                                <Box className={classes.boxtwo}>
                                    <Typography className={classes.typographyone} variant="h4" >
                                        Local Travel
                                    </Typography>
                                    <Typography color="primary.main" className={classes.typography} variant='h4'>Professionals</Typography>
                                </Box>
                                <Typography className={classes.typographytwo} variant="h5">
                                    {'We connect you with local, knowledgeable travel experts from wherever you are looking to go and let them plan the perfect trip based on their personal experience and your occasion, time and preferences.'}
                                </Typography>

                            </Box>

                        </Grid>

                    </Grid>
                </Grid>
            </Fade >
        </Grid >
    );
}

export default PhoneMockupOne;