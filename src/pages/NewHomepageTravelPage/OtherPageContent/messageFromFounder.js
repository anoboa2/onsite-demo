import { Avatar, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Fade } from 'react-reveal';
import Typography from '../../../modules/components/Typography';
import Izanna from "./images/Izanna-Levintova.webp";
import classNames from 'classnames/bind';

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
            <Box pt={"50px"}>

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
                        <Typography className={classNames(classes.maintypography)} marginLeft="62px !important"  paddingTop="30px" variant="h4" align="left" component="h2" >
                    Message from Founder
                </Typography>
                            <Typography className={classes.typographyone} padding="45px" marginBottom="70px" variant="h5">
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
