import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import Typography from '../../../modules/components/Typography';
import threeframe from "./images/three-frame.webp";
import { Fade } from "react-reveal";
import { makeStyles } from '@mui/styles';

const item = {
    display: 'flex',
    flexDirection: 'row',

};


const useStyles = makeStyles((theme) => ({
    item: {
        display: 'flex',
        flexDirection: 'row',
        padding: "5% !important",
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column !important',

        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column !important',

        }
    },
    gridtwo: {
        alignContent: 'right',
        [theme.breakpoints.down("sm")]: {
            justifyContent: 'center !important',
            alignContent: 'center',
            paddingBottom: '0px !important',
            maxWidth: "95%",

        }
    },
    gridone: {
        marginTop: "8% !important",
        padding: "2% !important",
        width: '100%',
        [theme.breakpoints.down("sm")]: {
            marginTop: '0px !important',
            paddingTop: '0px !important',
        }
    },
    googlebutton: {
        padding: "3% 12% !important",

        [theme.breakpoints.down("sm")]: {
            marginTop: "5% !important",
            padding: "1.5% 4% !important",
        }

    },
    buttonbox: {
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
    },
    comingsoon: {
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {


        }
    },
    typography: {
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
    typographytwo: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px !important",
            fontWeight: "lighter !important",
        }

    },
    thebox: {


    },
}))

const PhoneMockupOne = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Fade bottom>
                <Grid className={classes.item}>
                    <Grid className={classes.gridtwo} item container md={6} order={5} sx={{ justifyContent: 'center' }}>
                        <Box
                            component="img"
                            src={threeframe}
                            alt="iphone mockup of mobile app itinerary pages"
                            sx={{ height: { xs: 300, sm: 600 } }}
                        />

                    </Grid>
                    <Grid className={classes.gridone} item container md={6} order={5} sx={{ justifyContent: 'center' }}>

                        <Box >

                            <Typography className={classes.typographyone} variant="h4" sx={{ my: 5, }}>
                                Everything in one <Typography color="primary.main" className={classes.typography} display="inline-block" variant='h4'>place</Typography>
                            </Typography>
                            <Typography variant="h5" className={classes.typographytwo} mb={4} gutterBottom>
                                {'Our app allows you and your companions to see your complete itinerary, day by day, including maps, tickets, images and reviews as well as chat with your agent any time you have a question or  need to make a change.'}
                            </Typography>
                            <Box className={classes.buttonbox}>
                                <Button variant="outlined" className={classes.googlebutton} style={{

                                    borderRadius: "10px",
                                    border: "1px solid",
                                    fontSize: "0.9rem",

                                }}>
                                    <AppleIcon />
                                    AppStore
                                </Button>
                                <Button variant="contained" className={classes.googlebutton} style={{
                                    backgroundColor: "#00aaca",
                                    borderRadius: "10px",
                                    color: "white",
                                    fontSize: "0.9rem",

                                }}>
                                    <GoogleIcon />
                                    Google Play
                                </Button>
                            </Box>
                            <Box className={classes.comingsoon}>
                                <Typography mt={1} variant="h5">Coming Soon!!</Typography></Box>
                        </Box>

                    </Grid>

                </Grid>
            </Fade>
        </Grid>
    );
}

export default PhoneMockupOne;