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
    box: {
        // width: "80%",
        // [theme.breakpoints.up("lg")]: {
        //     marginTop: "0% !important",

        // },
        // [theme.breakpoints.up("md")]: {
        //     marginTop: "20% !important",
        // },
        // [theme.breakpoints.up("sm")]: {
        //     marginTop: "50% !important",

        // },
        // [theme.breakpoints.up("xs")]: {
        //     marginTop: "240%",
        //     marginLeft: "1%",
        // },
    },
    boxone: {
        width: "80%",
        marginLeft: "10%",
        marginBottom: "6%",
        [theme.breakpoints.down("sm")]: {

        }
    },
    typographyone: {
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px !important",
            marginRight: "5% !important",
        }
    },
    typographytwo: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px !important",
        }
    },
    maingrid: {
        padding: "10%"
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
        color: "#0FAACD !important",
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "20px !important",
        }
    }
}));
const ComingSoon = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.maingrid}>
            <Fade bottom>
                <Grid sx={item}>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Box className={classes.box}>
                            <Box className={classes.boxone}>
                                <Typography className={classes.typographyone} variant="h3" >
                                    Stress Less, Dream More. Mobile App. <span> </span>
                                    <span variant="h3"
                                        className={classes.typographythree}  >Coming Soon.</span></Typography>
                            </Box>
                            <Box className={classes.boxtwo}>
                                <Typography className={classes.typographytwo} variant="h5" style={{ display: "inline-block", whiteSpace: "pre-line" }}>
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