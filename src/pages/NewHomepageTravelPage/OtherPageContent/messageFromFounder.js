import { Avatar, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Fade } from 'react-reveal';
import Typography from '../../../modules/components/Typography';
import Izanna from "./images/Izanna-Levintova.webp";

const useStyles = makeStyles((theme) => ({
    typographyone: {
        fontStyle: "italic",
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px !important",
        }
    },
    boxone: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
    },
    boxtwo: {
        display: "flex",
        width: "70%",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        }
    },
    boxthree: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
    }
}))


const MessageFromFounder = () => {
    const classes = useStyles()
    return (
        <Fade bottom>
            <Box pt={"20px"} padding-top="132px">
                <Typography className={classes.maintypography} variant="h4" align="left" margin-left="322px" component="h2" >
                    Message from Founder
                </Typography>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Grid container
                        spacing={0}
                        className={classes.boxtwo} >
                        <Grid item sm={2} xs={12} className={classes.boxthree}>
                            <Avatar
                                src={Izanna}
                                sx={{ width: 222, height: 222 }}
                            />
                        </Grid>
                        <Grid item sm={10} xs={12}>
                            <Typography className={classes.typographyone} padding={10} marginBottom="40px" variant="h5">
                                “I want to inspire people from all over the world to step outside their comfort zones and experience something new through travel”
                            </Typography >
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Fade>
    );
}

export default MessageFromFounder;
