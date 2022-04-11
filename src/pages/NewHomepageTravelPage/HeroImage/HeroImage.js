
import { Button } from "@mui/material";
import React from "react";
import Typography from "../../../modules/components/Typography";
import './HeroImage.css';
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
            maxWidth: "60%",
            whiteSpace: "break-spaces",
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

                    <Typography className={classes.typography1} variant="h3">
                        We make the plans,
                    </Typography>
                    <Typography className={classes.typography2} variant="h3" marginBottom={3} display="inline-block" color="#1CCC6F" >
                        you make the memories
                    </Typography>
                    {/* <div className="typewritereffecttwo"> */}
                    {/* <TypewriterEffectTwo /> */}

                    <Typography className={classes.typography3} variant="h5" >
                        Local Travel Specialists Are Standing By To Plan You The Trip of A Lifetime
                    </Typography>
                    <br />
                    <br />
                    {/* <p>&nbsp;</p>
                        <Typography variant="h5" className={classes.typography4}>
                            {'leaving the planning to us'}
                        </Typography> */}
                    <Button
                        variant="contained"
                        color="secondary"
                        href="/booking"
                        sx={{ pt: 1, pr: 1, pl: 1, pb: 1 }}
                    >
                        Let''s Plan
                    </Button>
                    {/*<NewBookingForm />*/}
                </div>
            </div>
        </div>
    );
}

export default HeroImage;
