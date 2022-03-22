import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { maxWidth } from "@mui/system";
import React from "react";
import { Fade } from "react-reveal";
import Typography from "../../../modules/components/Typography";


const item = {
    display: 'flex',
    flexDirection: 'row',

};

const useStyles = makeStyles((theme) => ({
    maingrid: {
        [theme.breakpoints.down("sm")]: {
            marginTop: "180%",
        }
    },
    box: {
        width: "50%",
        marginLeft: "7%",
        display: "inline-block",
        whiteSpace: "pre-line",
        marginTop: "10%",
        [theme.breakpoints.down("sm")]: {
            width: "70%",
            marginLeft: "1%",
        }
    },
    boxone: {
        marginLeft: "10%",
        marginBottom: "6%",
        [theme.breakpoints.down("sm")]: {

        }
    },
    typographyone: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "25px !important",
        }
    },
    typographytwo: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px !important",
        }
    },
    boxtwo: {
        width: "100%",
        marginLeft: "1%",
        marginBottom: "6%",
        [theme.breakpoints.down("sm")]: {

        }
    },
    typographythree: {
        borderBottom: "3px solid #0FAACD",
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "25px !important",
        }
    }
}));
const ComingSoon = () => {
    const classes = useStyles()
    return (
        <Grid sx={6} className={classes.maingrid}>
            <Fade bottom>
                <Grid sx={item}>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Box className={classes.box}>
                            <Box className={classes.boxone}>
                                <Typography className={classes.typographyone} variant="h3" >
                                    Stress Less, Dream More.  Mobile App <Typography style={{ display: "inline-block", whiteSpace: "pre-line" }} variant="h3" className={classes.typographythree} color="primary.main">Coming Soon.</Typography> </Typography>
                            </Box>
                            <Box className={classes.boxtwo}>
                                <Typography className={classes.typographytwo} variant="h5" sx={{}} style={{ display: "inline-block", whiteSpace: "pre-line" }}>
                                    We're working non-stop to bring you the mobile app that curates your dream travel experiences. We'll notify you as soon as it's available. In the meantime, plan your next big adventure with us here on our site. Keep an eye out for updates about the mobile app's release.
                                </Typography>
                            </Box>
                        </Box>
                    </div>
                </Grid>
            </Fade >
        </Grid >
    );
}

export default ComingSoon;