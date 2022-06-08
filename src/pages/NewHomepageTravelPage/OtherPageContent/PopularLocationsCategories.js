import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '../../../modules/components/Typography';
import { Grid } from '@mui/material';
import { Fade } from 'react-reveal';
import { makeStyles } from '@mui/styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './PopularLocations.css'

import Dining from "./images/Dining.jpg";
import Accommodations from "./images/Accommodations.jpg";
import Transportation from "./images/Transportation.jpg";
import Activities from "./images/Activities.jpg";



const useStyles = makeStyles((theme) => ({
    item: {
        [theme.breakpoints.down("sm")]: {
            display: 'flex',
            flexDirection: 'column !important',
            width: "200px !important",
        }
    },
    typography: {
        marginLeft: "10px !important",
        borderBottom: "3px solid #0FAACD",
        [theme.breakpoints.down("sm")]: {

            borderBottom: "none !important",
            fontSize: "35px !important",
        }
    },
    typography1: {
        borderBottom: "3px solid #0FAACD",
        [theme.breakpoints.down("sm")]: {

            borderBottom: "none !important",
            fontSize: "20px !important",
        }
    },
    maintypography: {
        [theme.breakpoints.down("sm")]: {

            borderBottom: "none !important",
            fontSize: "35px !important",
        }
    },
    maintypography1: {
        [theme.breakpoints.down("sm")]: {

            borderBottom: "none !important",
            fontSize: "20px !important",
        }
    },
    boxone: {
        display: "flex",
        flexDirection: "row !important",
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "20px !important",
            marginLeft: " 10% !important",
        }
    },
    boxtwo: {
        display: "flex",
        flexDirection: "row !important",
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "20px !important",
            marginLeft: " 5% !important",
        }
    },

}))

export default function PopularLocationCategories() {
    const classes = useStyles()
    return (
        <Grid mb={5} pl={4} pr={4} pt={5}>
            <Fade bottom>
                <Grid container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center" >
                    <Grid item xs={12}>
                        <Box className={classes.boxone}>
                            <Typography className={classes.maintypography} variant="h4" align="center" component="h2" >
                                We arrange the<Typography variant='h4' display="inline-block" color="primary.main" className={classes.typography} >best</Typography>
                            </Typography>
                        </Box>
                        <Box className={classes.boxtwo}>
                            <Typography className={classes.maintypography1} variant="h6" align="center" component="h2" >
                            Check out the services we offer below
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item xs={12} width={"100%"}>
                        <Box className={classes.item} width={"100%"} sx={{ mt: 8, display: 'flex', justifyContent: 'center'}}>

                        <div class="flexbox-container">

                            
                        <div>
                        <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="200"
                            src={Dining}
                            alt="Dining"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                            Dining
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            From fine dining to casual dining, we make sure only the best reservations are booked for you. Have a dietary restriction? No problem, we’ll accommodate for you.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                        </div>


                        <div>
                        
                        <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="200"
                            src={Accommodations}
                            alt="Accommodations"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                            Accommodations
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Do you prefer 4 star or 5 star Hotels? Maybe you’re interested in airbnbs or villas more. We value your preferences and reserve accordingly.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                        </div>
                        </div>

                        </Box>
                    </Grid>

                    <Grid item xs={12} width={"100%"}>
                        <Box className={classes.item} width={"100%"} sx={{ mt: 2, display: 'flex', justifyContent: 'center'}}>

                        <div class="flexbox-container">

                            
                        <div>
                        <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="200"
                            src={Transportation}
                            alt="Transportation"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                            Transportation
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Whether you need airfare or ground transportation booked, we will make sure your travel needs are always satisfied.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                        </div>


                        <div>
                        
                        <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="200"
                            src={Activities}
                            alt="Activities"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                            Activities
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Adventure? Cultural experiences? Water sports? No matter the activity, we will add your plans to your travel plans that best fit your travel personality.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                        </div>
                        </div>

                        </Box>
                    </Grid>
                </Grid>
            </Fade>
        </Grid >
    );
}
