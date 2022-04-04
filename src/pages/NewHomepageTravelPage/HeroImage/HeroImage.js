
import { Box } from "@mui/material";
import React from "react";
import Typography from "../../../modules/components/Typography";
import './HeroImage.css';
import NewBookingForm from "./NewBookingForm";
import ComingSoon from "./ComingSoon";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";


// const useStyles = makeStyles((theme) => ({
//     typography1: {
//         [theme.breakpoints.down("sm")]: {
//             display: "flex",
//             color: "#949997",
//         },
//     }
// }))
// const classes = useStyles()

const useStyles = makeStyles((theme) => ({
    typography1: {
        marginRight: "6px !important",
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px !important",
            marginRight: "65px !important",
        },
    },
    typography2: {
        borderBottom: "3px solid #1CCC6F",
        [theme.breakpoints.down("sm")]: {
            fontSize: "17px !important",
            marginRight: "112px !important",
            display: "block !important",
            borderBottom: "none !important",
        },
    },
    typography3: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "14px !important",
        },
    },
    typography4: {
        display: "inline-block",
        [theme.breakpoints.down("sm")]: {
            fontSize: "14px !important",
            display: "block !important",
            marginRight: "45px !important",
        },
    },
    boxtwo: {
        display: "flex",
        flexDirection: "row !important",
        marginLeft: "140px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "14px !important",
            display: "block !important",
            marginLeft: "0px !important",
        },
        alignItems: "baseline",
    },
    boxthree: {
        display: "flex",
        flexDirection: "row !important",
        marginLeft: "140px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "14px !important",
            display: "block !important",
            marginLeft: "0px !important",
        },
    }
}))

const HeroImage = () => {
    const classes = useStyles()
    return (
        <div>
            <div className="hero-image">
                <div className="hero-text" >
                    {/* <TypewriterEffectOne /> */}

                    <Box className={classes.boxtwo}>
                        <Typography className={classes.typography1} variant="h3">
                            Travel Planning,
                        </Typography>
                        <Typography className={classes.typography2} variant="h3" marginBottom={3} display="inline-block" color="#1CCC6F" >
                            Reinvented
                        </Typography>
                    </Box>
                    {/* <div className="typewritereffecttwo"> */}
                    {/* <TypewriterEffectTwo /> */}

                    <Box className={classes.boxthree}>
                        <Typography className={classes.typography3} variant="h5" >
                            Get the most of your travel by leaving the planning to us
                        </Typography>
                        {/* <p>&nbsp;</p>
                        <Typography variant="h5" className={classes.typography4}>
                            {'leaving the planning to us'}
                        </Typography> */}
                    </Box>

                    <NewBookingForm />
                </div>
            </div>
        </div>
    );
}

export default HeroImage;
