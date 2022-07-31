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
        }
    },
    box: {
        width: "50%",
        marginLeft: "7%",
        display: "inline-block",
        whiteSpace: "pre-line",
        [theme.breakpoints.down("sm")]: {
            width: "70%",
            zIndex: -1,
            marginLeft: "1%",
        }
    },
    boxone: {
        marginLeft: "10%",
        marginBottom: "6%",
        [theme.breakpoints.down("sm")]: {

        }
    },
    boxone2: {
        marginLeft: "10%",
        marginBottom: "6%",
        [theme.breakpoints.down("sm")]: {
            width: "120%",
            marginLeft: "10%",
            marginTop: "-10px !important",
        }
    },
    typographyone: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "30px !important",
            paddingTop: "145px",
        }
    },
    typographyone2: {
        paddingTop: "6px",
        fontSize: "22px !important",
        marginTop: "-42px !important",
        [theme.breakpoints.down("sm")]: {
            fontSize: "18px !important",
            paddingTop: "6px",
            marginTop: "-12px !important",
            
        }
    },
    typographytwo: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px !important",
        }
    },
    span: {        
        color: "#0FAACD !important", 
        borderBottom: "3px solid #0FAACD",
        [theme.breakpoints.down("sm")]: {
            textDecoration: "none !important",
            
            fontSize: "18px !important",
            borderBottom: "none !important",
        },
    },
    typographythree: {
        borderBottom: "3px solid #0FAACD",        
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "25px !important",
        }
    },
    boxtwo: {
        width: "100%",
        marginLeft: "1%",
        marginBottom: "6%", 
        [theme.breakpoints.down("sm")]: {

        }
    }
}));
const ComingSoon = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.maingrid}>
            <Fade bottom>
                <Grid sx={item}>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Box className={classes.box}>
                            <Box className={classes.boxone}>
                                <Typography className={classes.typographyone} variant="h3" >
                                    Stress Less, Dream More.</Typography>
                            </Box>
                            <Box className={classes.boxone2}>
                                    <Typography className={classes.typographyone2} variant="h3" >
                                    Mobile App <span className={classes.span}>Coming Soon.</span></Typography>
                            </Box>
                            <Box className={classes.boxtwo}>
                                <Typography className={classes.typographytwo} variant="h5" style={{ display: "inline-block", whiteSpace: "pre-line", textAlign: "justify" }}>
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