import React from "react";
import { Box, Button, Typography } from '@mui/material'
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
      paddingTop: "-20px",
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
    fontSize: "18px !important",
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
          alignItems: 'center',
          marginTop: "9% !important",
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


const HomeHero = ({ details }) => {
  const classes = useStyles()
  return (
    <div className="hero-image">
                <div className="hero-text" >
                    {/* <TypewriterEffectOne /> */}

                    <Typography className={details.isHome ? classes.typography1 : classes.typography12} variant="h1">
                        {details.header}
                    </Typography>
                    {details.subHeader && <><Typography className={classes.typography2} variant="h2" marginBottom={3} display="inline-block" color="#1CCC6F" >
                        {details.subHeader}
                    </Typography>
                        <br /></>}
                    <Typography className={classes.typography3} maxWidth="40%"  variant="body1" style={{ display: "inline-block", whiteSpace: "pre-line", textAlign: "justify" }} >
                        {details.text}
                    </Typography>
                    <br />
                    <br />
                    {details.isHome &&
                        <Box className={classes.boxfour}>
                            <Box sx={{ p: 1, m: 1, }}>
                                <Button
                                    variant="contained"
                                    href="https://try.onsiteplanning.com/onsiteplanning/"
                                    style={{
                                        backgroundColor: "#00aaca", padding: "10px 15px",
                                        borderRadius: "10px",
                                        color: "white",
                                        fontSize: "15px"
                                    }}
                                 >
                                    Get Matched With A Travel Specialist
                                  </Button>
                                </Box>
                            <Box sx={{ p: 1, m: 1, zIndex: 999999,}}>
                                <Button 
                                    variant="contained"
                                    href="/itineraries"
                                    style={{
                                        backgroundColor: "#fff",
                                        padding: "10px 33px",
                                        borderRadius: "10px",
                                        color: "#00aaca",
                                        
                                        fontSize: "15px"
                                    }}
                                >
                                    Explore itineraries
                                </Button>
                            </Box>
                        </Box>}
                </div>
            </div>
  );
}

export default HomeHero;