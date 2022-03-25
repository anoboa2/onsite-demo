
import { Box, Grid } from "@mui/material";
import React from "react";
import Typography from "../../../modules/components/Typography";
import './HeroImage.css';

import ComingSoon from "./ComingSoon";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import newheroimage from "./newheroimage.webp";
import NewBookingForm from "./NewBookingForm";


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
        position: "absolute",
        top: "50%",
        left: "50%",
        [theme.breakpoints.down("sm")]: {
            fontSize: "25px !important",
            marginRight: "10% !important",
        },
    },
    typography2: {
        borderBottom: "3px solid #1CCC6F",
        marginLeft: "2% !important",
        [theme.breakpoints.down("sm")]: {
            fontSize: "25px !important",
            marginRight: "18% !important",
            display: "block !important",
            borderBottom: "none !important",
            marginLeft: "0px !important",
        },
    },
    typography3: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px !important",
            marginRight: "3% !important",
        },
    },
    typography4: {
        marginLeft: "2%  !important",
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px !important",
            marginRight: "11% !important",
        },
    },
    boxtwo: {
        marginLeft: "31% !important",
        display: "flex",
        flexDirection: "row !important",
        [theme.breakpoints.down("sm")]: {
            display: "block !important",
            marginLeft: "0px !important",
        },
    },
    boxthree: {
        marginLeft: "31% !important",
        display: "flex",
        flexDirection: "row !important",
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px !important",
            display: "block !important",
            marginLeft: "0px !important",
        },
    },
    thetypo: {
        fontSize: "3rem !important",
        [theme.breakpoints.down("lg")]: {
            fontSize: "2.5rem !important",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "1.8rem !important",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.95rem !important",
        },
    },
    span: {
        color: "#0FAACD",
        textDecoration: "underline 3px",
        [theme.breakpoints.down("sm")]: {
            textDecoration: "none",
        },
    },
    mainbox: {
        position: "absolute",
        top: "30%",
        left: "8%",
        width: "60%",
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("lg")]: {
            width: "65%",
            top: "30%",
            left: "5%",
        },
        [theme.breakpoints.down("md")]: {
            width: "63%",
            top: "22%",
            left: "5%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "65%",
            top: "15%",
            left: "5%",
        },
    },
    thetypo1: {
        fontSize: "1.2rem !important",
        [theme.breakpoints.down("lg")]: {
            fontSize: "1rem !important",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "0.85rem !important",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.55rem !important",
        },
    },
    newbookingform: {
        width: "90% !important",
        display: "flex",
        [theme.breakpoints.up("lg")]: {
            position: "absolute",
            top: "45%",
            left: "1%",

        },

        [theme.breakpoints.down("lg")]: {
            position: "absolute",
            width: "65%",
            top: "45%",
            left: "3%",
        },
        [theme.breakpoints.down("md")]: {
            width: "63%",
            top: "32%",
            position: "absolute",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            top: "21% !important",
            position: "absolute",
        },
    },
    spanone: {
        display: "none",
        [theme.breakpoints.down("md")]: {


        },
    },
    overallbox: {
        alignContent: 'flex-start'
    }
}))

const HeroImage = () => {
    const classes = useStyles()
    return (

        <Grid container>
            <img src={newheroimage} className="bg" alt="" />
            <Box className={classes.overallbox}>
                <Box className={classes.mainbox}>
                    <Typography variant="h2" component="h2" className={classes.thetypo}>Travel Planning! <span className={classes.span}>Reinvented</span> </Typography>
                    <Typography variant="h5" className={classes.thetypo1}>
                        Get the most of your  travel by <span className={classes.spanone}><br /></span> leaving the planning to us </Typography>
                </Box>

                <Grid className={classes.newbookingform}>
                    <NewBookingForm />
                </Grid>
            </Box>

            <ComingSoon />
        </Grid>
    );
}

export default HeroImage;

