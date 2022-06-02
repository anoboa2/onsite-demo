import { Grid , Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Typography from '../../../modules/components/Typography';
import Error404 from "./images/Error404.png";
import { Fade } from "react-reveal";
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
    item: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column-reverse !important',

        }
    },
    gridtwo: {
        alignContent: 'right',
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
            fontSize: "25px !important",
        }
    },
    span: {        
        color: "#0FAACD !important", 
        borderBottom: "3px solid #0FAACD",
        [theme.breakpoints.down("sm")]: {
            textDecoration: "none !important",
            display: "block !important",
            fontSize: "35px !important",
            borderBottom: "none !important",
        },
    },
    typographyone: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "35px !important",
        }
    },
    boxtwo: {
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: {

        }
    }
}))

const NotFound = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Fade bottom>
                <Grid className={classes.item}>
                    <Grid item container md={4} xs={12} order={5} className={classes.gridtwo} >
                        <Box
                            component="img"
                            src={Error404}
                            alt="404 page"
                            sx={{ height: { xs: 400, sm: 600 }, width: { xs: 400, sm: 600 } }}
                        />

                    </Grid>
                    <Grid >
                        <Grid item padding={16} xs={12} container md={12} order={6} sx={{ justifyContent: 'center' }}>

                            <Box className={classes.gridone}>
                                <Box className={classes.boxtwo}>
                                    <Typography className={classes.typographyone} variant="h4" >
                                        OOPS!!! <span className={classes.span}> Page Not Found</span>
                                    </Typography>
                                </Box>
                                <Typography variant="h5" sx={{mt: 4}} style={{ textAlign: "justify" }}>
                                    {'Sorry, the page you are looking for could not be found.            '}
                                </Typography>
                                <Box sx={{ p: 3, m: 3, marginLeft: -3 }}>
                                <Button
                                    variant="contained"
                                    href="/"
                                    style={{
                                        backgroundColor: "#00aaca", padding: "10px 30px",
                                        borderRadius: "10px",
                                        color: "white",
                                        fontSize: "15px"
                                    }}
                                 >
                                    Go to About page
                                  </Button>
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Fade >
        </Grid >
    );
}

export default NotFound;