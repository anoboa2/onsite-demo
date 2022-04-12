import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useEffect } from "react";
import "./RatingsSlider.css";
import { Box, Grid, Paper, Stack, Avatar } from "@mui/material";
import Typography from "../../../modules/components/Typography";
import { Fade } from "react-reveal";
import { makeStyles } from "@mui/styles";
import Izanna from "./images/Izanna-Levintova.webp";
import Alex from "./images/Alex-Noboa.webp";
import Peter from "./images/Peter-Delle.webp";
import "./about.css"

const itemData = [
    {
        id: 1,
        img: Izanna,
        title: "Breakfast",
        designation:
            "Founder and Chief Executive Office",
        name: "Izanna Levintova"
    },
    {
        id: 2,
        img: Alex,
        title: "Burger",
        designation:
            "Co-Founder and Chief Technology Officer",
        name: "Alex Noboa"
    },
    {
        id: 3,
        img: Peter,
        title: "Breakfast",
        designation:
            "Head of Marketing",
        name: "Peter Delle"
    }
];

const useStyles = makeStyles((theme) => ({
    mainbox: {
        [theme.breakpoints.down("sm")]: {
        },
    },
    typographytwo: {
        marginLeft: "10px !important",
        borderBottom: "none !important",
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "20px !important",
            marginLeft: "40px !important",
        },
    },
    typographyone: {
        marginRight: "10px !important",
        marginLeft: "10px !important",
        borderBottom: "3px solid #0FAACD",
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "35px !important",
            marginLeft: "40px !important",
        },
    },
    typographythree: {
        [theme.breakpoints.down("sm")]: {
            marginLeft: "40px !important",
            fontSize: "35px !important",
        },
    },
    typographyfour: {
        [theme.breakpoints.down("sm")]: {
            marginLeft: "40px !important",
            fontSize: "25px !important",
        },
    },
    boxone: {

        flexDirection: "column !important",
        [theme.breakpoints.down("sm")]: {
            fontSize: "25px !important",
        },
    },
    boxtwo: {
        // display: "flex",
        flexDirection: "row !important",
        [theme.breakpoints.down("sm")]: {
            fontSize: "25px !important",
            flexDirection: "column !important",
        },
    },
}));

const AboutTeam = () => {
    const classes = useStyles();
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    const settings = {
        dots: true,
        color: "#0FAACD",
        dotsClass: "slick-dots line-indicator",
        ref: sliderRef,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };
    return (
        <Grid>
            <Fade bottom>
                <Grid>
                    <div style={{ marginTop: "50px", marginBottom: "100px" }}>
                        <div
                            style={{
                                display: "flex",
                                padding: "0 10px",
                                align: "center",
                                width: "100%",
                                justifyContent: "center"
                            }}
                        >
                            <Box className={classes.boxone}>
                                <Box className={classes.boxtwo}>
                                    <Typography
                                        className={classes.typographythree}
                                        textAlign="center"
                                        variant="h4"
                                    >
                                        Meet the team
                                    </Typography>
                                </Box>
                                <Box>
                                    {" "}
                                    <Typography
                                        className={classes.typographytwo}
                                        textAlign="center"
                                        variant="h6"
                                    >
                                        The travelers behind creating Onsite
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                        <div style={{ margin: 30, display: "grid", gridAutoFlow: "column" }}>
                            {itemData.map((newData) => (
                                <>
                                    <div style={{ margin: 20 }}>
                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Box sx={{
                                                display: "inline-block", position: "relative", alignItems: "center",
                                            }}>
                                                <Stack direction="row" style={{ marginBottom: "10px", justifyContent: "center" }} spacing={4}>
                                                    <Avatar
                                                        alt={newData.name}
                                                        src={newData.img}
                                                        sx={{ width: 100, height: 100 }}
                                                    />
                                                </Stack>
                                                <Typography variant="h5" component="h5" sx={{ textAlign: "justify" }}>
                                                    {newData.name}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Paper elevation={3} className={classes.paperbox} sx={{ marginTop: "-55px", borderRadius: "40px", boxShadow: 0 }}>
                                            <Box
                                                paddingX={1}
                                                className={classes.mainbox}
                                                padding={4}
                                                sx={{ borderRadius: "20px" }} >
                                                <Box>
                                                    <Typography
                                                        variant="h6"
                                                        component="h6"
                                                        marginTop={0}
                                                        style={{ paddingTop: "30px", textAlign: "center" }}
                                                    >
                                                        {newData.designation}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </Grid>
            </Fade>
        </Grid>
    );
};

export default AboutTeam;
