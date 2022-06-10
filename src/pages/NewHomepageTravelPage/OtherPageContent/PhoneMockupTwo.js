import { makeStyles } from "@mui/styles";
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Fade } from 'react-reveal';
import { Button } from "@mui/material";
import Typography from '../../../modules/components/Typography';

const useStyles = makeStyles((theme) => ({
    boxone: {
        display: 'flex',
        flexDirection: 'row',
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
            fontSize: "35px !important",
        }
    },
    typographyone: {
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "35px !important",
        }
    },
    boxtwo: {
        marginBottom: "20px !important",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "10px !important",

        }
    },

    boxfour: {
        display: 'flex',
        flexDirection: 'row',
        padding: "55px",
        marginLeft: "-60px",
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
            alignItems: 'center',
            padding: "1px",
            margin: "1px",
            paddingTop: "40px",
            
        },
    }

}))

const PhoneMockupTwo = ({ img, details }) => {
    const classes = useStyles()
    return (
        <Grid container>
            <Fade bottom>
                <Grid className={classes.boxone}>
                    <Grid item sm={6} xs={12} order={1} sx={{ justifyContent: 'center' }}>
                        <Box
                            component="img"
                            src={img}
                            alt="cards itinerary and invoice"
                            sx={{ height: { xs: 400, sm: 485 }, width: { xs: 400, sm: 600 } }}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12} md={12} padding={10} container order={5} sx={{ justifyContent: 'left' }}>
                        <Box>
                            <Box className={classes.boxtwo}><Typography className={classes.typographyone} variant="h4" >
                                {details.secondHeader}
                            </Typography>{details.isHome && <Typography className={classes.typographytwo} color="primary.main" display="inline-block" variant='h4'>We Value You</Typography>}</Box>
                            <Typography variant="h5" style={{ textAlign: "justify" }}>
                                {details.secondText}
                            </Typography>

                            <Box className={classes.boxfour}>
                             <Box sx={{ p: -1, m: 1, }}>
                                <Button
                                    variant="contained"
                                    href="https://try.onsiteplanning.com/onsiteplanning/"
                                    style={{
                                        backgroundColor: "#00aaca", padding: "10px 30px",
                                        borderRadius: "10px",
                                        color: "white",
                                        fontSize: "15px"
                                    }}
                                 >
                                    Get Matched With Travel Specialist
                                  </Button>
                                </Box>
                            </Box>
                        </Box>
                        
                    </Grid>
                </Grid>
            </Fade>
        </Grid>
    );
}

export default PhoneMockupTwo;