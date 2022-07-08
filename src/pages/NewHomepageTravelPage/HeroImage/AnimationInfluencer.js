import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { maxWidth } from "@mui/system";
import React from "react";
import { Fade } from "react-reveal";
import travel from "../OtherPageContent/images/travel.gif";


const item = {
    display: 'flex',
    flexDirection: 'row',

};

const useStyles = makeStyles((theme) => ({
    maingrid: {
        marginTop: "-10px" ,
        marginLeft: "200px" ,
        marginLeft: "10px" ,
        [theme.breakpoints.down("sm")]: {
            marginTop: "-250px" ,
            marginLeft: "10px" ,
            
        }
    },
    box: {
        width: "50%",
        marginLeft: "7%",
        display: "inline-block",
        whiteSpace: "pre-line",
        [theme.breakpoints.down("sm")]: {
            width: "70%",
            marginLeft: "1%",
        }
    },
    boxone: {
        marginLeft: "10%",
        marginBottom: "6%",
        [theme.breakpoints.down("sm")]: {

        }
    },
    typographyone: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "35px !important",
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
            display: "block !important",
            fontSize: "35px !important",
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
    },
}));
const AnimationLearn = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.maingrid}>
            <Fade bottom>
                <Grid sx={item}>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Box className={classes.box}>
                            <Box className={classes.boxtwo}>
                            <Grid item container md={6} xs={12} order={5} className={classes.gridtwo} >
                        <Box
                            component="img"
                            src={travel}
                            alt="iphone mockup of mobile app itinerary pages"
                            sx={{ height: { xs: 350, sm: 400 }, width: { xs: 300, sm: 600 } }}
                        />

                    </Grid>
                            </Box>
                        </Box>
                    </div>
                </Grid>
            </Fade >
        </Grid >
    );
}

export default AnimationLearn;