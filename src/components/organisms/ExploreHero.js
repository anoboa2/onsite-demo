import React from "react";
import { Box, Typography } from '@mui/material'
import './ExploreImage.css';

const ExploreHero = () => {
  return (
    <div className="hero-image3">
      <Box component="div" sx={{ justifyContent: 'center', px: 15, mb: 13}}>              
        <Box component="div" sx={{ position: 'absolute', display: 'block', top: '40%', left: '10%' }} >
          <Typography variant="h1" align='left' lineHeight={1.3} sx={{ color: "primary.contrastText" }}>
            Explore With <Box component="span" sx={{ color:"primary.main"}}>Onsite</Box>
          </Typography>
          <Typography variant="subtitle1" align="left">
            Check out some of our popular destinations and well known specialists.
          </Typography>
        </Box>
      </Box>
    </div>

  );
}

export default ExploreHero;