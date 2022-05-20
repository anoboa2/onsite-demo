
import React, { useState } from "react";
import Typography from "../../../modules/components/Typography";
import './HeroImage.css';
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    typography1: {
        marginRight: "6px !important",
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px !important",
            marginRight: "65px !important",
        },
    },
    typography12: {
        paddingTop: "100px",
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
    },
    boxfour: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
            alignItems: 'center'
        },
    }
}))

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,

};

const LearnMore = ({ details }) => {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false);
    };

    const handleLearnMore = () => {
        setOpen(true);
    }
    const classes = useStyles()
    return (
        <div>
            <div className="hero-image">
                <div className="hero-text" >
                    {/* <TypewriterEffectOne /> */}

                    <Typography className={details.isLearn ? classes.typography1 : classes.typography12} variant="h3">
                        {details.header}
                    </Typography>
                    {details.subHeader && <><Typography className={classes.typography2} variant="h3" marginBottom={3} display="inline-block" color="#1CCC6F" >
                        {details.subHeader}
                    </Typography>
                        <br /></>}
                    <Typography className={classes.typography3} maxWidth="40%" variant="h5" style={{ display: "inline-block", whiteSpace: "pre-line", textAlign: "justify" }} >
                        {details.text}
                    </Typography>
                    <br />
                    <br />
                </div>
            </div>
                

        </div>
    );
}

export default LearnMore;
