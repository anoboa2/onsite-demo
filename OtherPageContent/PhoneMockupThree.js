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
            paddingBottom: '0px !important'
        }
    },
    gridone: {
        marginTop: "80px !important",
        width: '100%',
        [theme.breakpoints.down("sm")]: {
            marginTop: '0px !important',
            paddingTop: '0px !important'
        }
    },
    googlebutton: {
        padding: "14px 66px !important",
        [theme.breakpoints.down("sm")]: {
            marginTop: "20px !important",
            padding: "10px 40px !important",
        }

    },
    comingsoon: {
        [theme.breakpoints.down("sm")]: {
            marginLeft: "35px !important",
            whitespace: "nowrap !important",
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

    }
}))

const PhoneMockupOne = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Fade bottom>
                <Grid sx={item} className={classes.item}>
                    <Grid className={classes.gridtwo} item container md={6} order={5} sx={{ justifyContent: 'center' }}>
                        <Box
                            component="img"
                            src={threeframe}
                            alt="iphone mockup of mobile app itinerary pages"
                            sx={{ height: { xs: 300, sm: 600 } }}
                        />

                    </Grid>
                    <Grid className={classes.gridone} item padding={10} container md={6} order={5} sx={{ justifyContent: 'center' }}>

                        <Box >

                            <Typography className={classes.typographyone} variant="h4" sx={{ my: 5, }}>
                                Everything in one <Typography color="primary.main" className={classes.typography} display="inline-block" variant='h4'>place</Typography>
                            </Typography>
                            <Typography variant="h5" className={classes.typographytwo} mb={4} gutterBottom>
                                {'Our app allows you and your companions to see your complete itinerary, day by day, including maps, tickets, images and reviews as well as chat with your agent any time you have a question or  need to make a change.'}
                            </Typography>
                            <Button variant="outlined" style={{
                                padding: "10px 55px",
                                borderRadius: "30px",
                                border: "1px solid",
                                fontSize: "15px",
                                marginRight: "20px"
                            }}>
                                <AppleIcon />
                                AppStore
                            </Button>
                            <Button variant="contained" className={classes.googlebutton} style={{
                                backgroundColor: "#00aaca",

                                borderRadius: "30px",
                                color: "white",
                                fontSize: "15px",

                            }}>
                                <GoogleIcon />
                                Google Play
                            </Button>
                            <Typography className={classes.comingsoon} ml={19} mt={1} variant="h5">Coming Soon!!</Typography>
                        </Box>

                    </Grid>

                </Grid>
            </Fade>
        </Grid>
    );
}

export default PhoneMockupOne;