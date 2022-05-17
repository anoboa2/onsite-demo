
import { Button, Modal } from "@mui/material";
import React, { useState } from "react";
import Typography from "../../../modules/components/Typography";
import './HeroImage.css';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import learnMore from './videos/Learn-More.mov'

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

const HeroImage = ({ details }) => {
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

                    <Typography className={details.isHome ? classes.typography1 : classes.typography12} variant="h3">
                        {details.header}
                    </Typography>
                    {details.subHeader && <><Typography className={classes.typography2} variant="h3" marginBottom={3} display="inline-block" color="#1CCC6F" >
                        {details.subHeader}
                    </Typography>
                        <br /></>}
                    <Typography className={classes.typography3} maxWidth="50%" variant="h5" style={{ display: "inline-block", whiteSpace: "pre-line", textAlign: "justify" }} >
                        {details.text}
                    </Typography>
                    <br />
                    <br />
                    {details.isHome &&
                        <Box className={classes.boxfour}>
                            <Box sx={{ p: 1, m: 1, }}>
                                <Button
                                    variant="contained"
                                    href="/booking"
                                    style={{
                                        backgroundColor: "#00aaca", padding: "10px 55px",
                                        borderRadius: "30px",
                                        color: "white",
                                        fontSize: "15px"
                                    }}
                                >
                                    Request Booking
                                </Button>
                            </Box>
                            <Box sx={{ p: 1, m: 1, }}>
                                <Button
                                    variant="contained"
                                    href="/LearnMore"
                                    style={{
                                        backgroundColor: "#fff",
                                        padding: "10px 55px",
                                        borderRadius: "30px",
                                        color: "#00aaca",
                                        fontSize: "15px"
                                    }}
                                >
                                    Learn More
                                </Button>
                            </Box>
                        </Box>}
                </div>
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <video width="750" height="500" controls >
                                <source src={learnMore} type="video/mp4" />
                            </video>
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <Box sx={{ p: 1, m: 1, }}>
                                <Button
                                    variant="contained"
                                    href="/booking"
                                    style={{
                                        backgroundColor: "#00aaca", padding: "10px 55px",
                                        borderRadius: "30px",
                                        color: "white",
                                        fontSize: "15px"
                                    }}
                                >
                                    Sign me up
                                </Button>
                            </Box>
                            <Box sx={{ p: 1, m: 1, }}>
                                <Button
                                    variant="contained"
                                    onClick={handleClose}
                                    style={{
                                        backgroundColor: "#fff",
                                        padding: "10px 55px",
                                        borderRadius: "30px",
                                        color: "#00aaca",
                                        fontSize: "15px"
                                    }}
                                >
                                    Exit
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Modal></div>

        </div>
    );
}

export default HeroImage;
