import React from "react";
import { Box, Button, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import './HeroImage.css';

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
        <Box component="div" sx={{ mt: 3, mb: 3, width: '50%' }}>
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
            {/* <Button 
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
            </Button> */}
        </Box>
      </Box>
  </Box>
  );
}

export default HomeHero;