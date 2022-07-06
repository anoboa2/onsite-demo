import { makeStyles } from "@mui/styles";
import { Grid , Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Fade } from 'react-reveal';
import Typography from "../../../modules/components/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';


import Iceland from "./images/Iceland.jpg";
import Bermuda from "./images/Bermuda.jpg";
import Italy from "./images/Italy.jpg";

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
        marginTop: " -30% !important",
        marginBottom: " 3% !important",
        flexDirection: "row !important",
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "20px !important",
            marginLeft: " 10% !important",
        }
    },
    boxtwo: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row !important",
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "20px !important",
            marginLeft: " 5% !important",
        }
    },

})) 

const Influencer = () => {
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
                            Izanna's Recent<Typography variant='h4' display="inline-block" color="primary.main" className={classes.typography} >Travels</Typography>
                            </Typography>
                        </Box>
                        <Box className={classes.boxtwo}>
                            <Typography className={classes.maintypography1} variant="h6" align="center" component="h2" >
                            Check out Izanna's instagram for more : <Link href="https://www.instagram.com/izanna.lev/" underline="none" > @izanna.lev</Link>
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item xs={12} width={"100%"} marginTop={"-5%"} >
                        <Box className={classes.item} width={"100%"} sx={{ mt: 8, display: 'flex', justifyContent: 'center'}}>

                        <div class="flexbox-container">

                        {/* /Iceland/ */}
                            
                        <div>
                        <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="350"
                            src={Iceland}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Iceland
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            view image gallery
                            </Button>
                        </CardActions>
                        </Card>
                        </div>

                        {/* /Bermuda/ */}

                        <div>
                        
                        <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="350"
                            src={Bermuda}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Bermuda
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            view image gallery
                            </Button>
                        </CardActions>
                        </Card>
                        </div>

                        {/* /Italy/ */}

                        <div>
                        
                        <Card sx={{ maxWidth: 400}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="350"
                            src={Italy}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Italy
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            view image gallery
                            </Button>
                        </CardActions>
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

export default Influencer;