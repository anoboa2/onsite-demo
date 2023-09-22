import React from "react";
import { Box, Button, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
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

const HomeHero = ({ details }) => {
  return (
    <Box className="hero-image" component="div">
      <Box className="hero-text" component="div" sx={{ position: 'relative', display: 'block', }}>
        <Typography variant="h1" sx={{ display: 'block' }}>
          {details.header}
        </Typography>
        {details.subHeader && 
          <Typography variant="h2" sx={{ mb: 3, display: 'block', color: "#1CCC6F"}}>
            {details.subHeader}
          </Typography>
        }
        <Typography maxWidth="40%"  color="text.primary" sx={{ mt:{xs: 1 , sm: 2} }} variant="body1" style={{ display: "inline-block", textAlign: "left" }} >
            {details.text}
        </Typography>
        <Grid container spacing={2} sx={{ mt: 3, mb: 3, width: '50%' }}>
          <Grid xs={12} sm={6} sx={{ display: 'block', width: 'auto' }}>
            <Button
              variant="contained"
              href="/match"
              style={{
                color:'primary',padding: "10px 15px",
                borderRadius: "10px",
                fontSize: "15px"
              }}
            >
              Match with a travel specialist
            </Button>
          </Grid>
          <Grid xs={12} sm={6} sx={{ display: 'block' }}>
            <Button 
              variant="text"
              href="/explore"
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
          </Grid>
        </Grid>
      </Box>
  </Box>
  );
}

export default HomeHero;