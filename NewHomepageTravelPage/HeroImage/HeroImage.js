
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
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px !important",
            marginRight: "65px !important",
        },
    },
    typography2: {
        borderBottom: "3px solid #1CCC6F",
        [theme.breakpoints.down("sm")]: {
            fontSize: "17px !important",
            marginRight: "52px !important",
            display: "block !important",
            borderBottom: "none !important",
        },
    },
    typography3: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "14px !important",
            marginRight: "18px !important",
        },
    },
    typography4: {
        display: "inline-block",
        [theme.breakpoints.down("sm")]: {
            fontSize: "14px !important",
            display: "block !important",
            marginRight: "25px !important",
        },
    },
    box: {
        boxone: {
            [theme.breakpoints.down("sm")]: {

            },
        }
    }
}))

const HeroImage = () => {
    const classes = useStyles()
    return (
        <div>
            <div className="hero-image">
                <div className="hero-text" >
                    {/* <TypewriterEffectOne /> */}

                    <Typography className={classes.typography1} variant="h3">Travel Booking, <Typography className={classes.typography2} variant="h3" marginBottom={3} display="inline-block" color="#1CCC6F" > Reinvented</Typography></Typography>
                    {/* <div className="typewritereffecttwo"> */}
                    {/* <TypewriterEffectTwo /> */}

                    <Typography className={classes.typography3} variant="h5" >
                        Get the most of your  travel by <Typography variant="h5" className={classes.typography4}>leaving the planning to us</Typography>
                    </Typography>

                    <NewBookingForm />
                </div>

            </div>

            <ComingSoon />
        </div>
    );
}

export default HeroImage;