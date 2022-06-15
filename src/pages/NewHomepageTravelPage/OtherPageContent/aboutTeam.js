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
        alt:"Izanna",
        title: "Breakfast",
        designation:
            "Founder and Chief Executive Officer",
        name: "Izanna Levintova"
    },
    {
        id: 2,
        img: Alex,
        alt:"Alex",
        title: "Burger",
        designation:
            "Co-Founder and Chief Technology Officer",
        name: "Alex Noboa"
    },
    {
        id: 3,
        img: Peter,
        alt:"Peter",
        title: "Breakfast",
        designation:
            "Head of Marketing",
        name: "Peter Delle"
    }
];

const useStyles = makeStyles((theme) => ({
    item: {
        display: 'flex',
        flexDirection: 'row !important',
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
        [theme.breakpoints.down("sm")]: {
            display: 'flex',
            flexDirection: 'column !important',

        }
    },
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
           
        },
    },
    typographyone: {
        marginRight: "10px !important",
        marginLeft: "10px !important",
        borderBottom: "3px solid #0FAACD",
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "35px !important",
            
        },
    },
    typographythree: {
        [theme.breakpoints.down("sm")]: {
            
            fontSize: "35px !important",
        },
    },
    typographyfour: {
        [theme.breakpoints.down("sm")]: {
            
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
                breakpoint: 400,
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
                    <div style={{ marginTop: "50px", marginBottom: "100px" , marginRight: "0px" , align: "center" }}>
                        <div
                            style={{
                                display: "flex",
                                padding: "10px",
                                marginLeft: "0x",
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
                        <Grid item xs={12} width={"96.88%"}>
                            <Box className={classes.item} width={"96.88%"}>
                                {itemData.map((newData) => (
                                    <Box sx={{ display: "flex", padding: "30px !important", justifyContent: "center", alignItems: "center" , align: "center"}}>
                                        <Box sx={{
                                            display: "inline-block", position: "relative", alignItems: "center",
                                        }}>
                                            <Stack direction="row" style={{ marginBottom: "10px", justifyContent: "center" }} spacing={4}>
                                                <Avatar
                                                    alt={newData.name}
                                                    src={newData.img}
                                                    sx={{ width: 150, height: 150 }}
                                                />
                                            </Stack>
                                            <Typography variant="h5" component="h5" sx={{ textAlign: "center" }}>
                                                {newData.name}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                component="h6"
                                                marginTop={0}
                                                style={{ textAlign: "center" }}
                                            >
                                                {newData.designation}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </div>
                </Grid>
            </Fade>
        </Grid>
    );
};

export default AboutTeam;
