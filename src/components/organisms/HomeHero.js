import React from "react";
import { Box, Button, Typography } from '@mui/material'

const HomeHero = ({ details }) => {
  return (
    <Box component="div" sx={{ backgroundImage: 'url("/img/newhero22.png")', height: { xs: '290px', sm: '500px'}, width: '100%', backgroundPosition: 'right', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative' }}>
      <Box component="div" sx={{ position: 'relative', display: 'block', top: { xs: '55%', sm: '30%' }, left: { xs: '37%', sm: '27%' }, pt: '20px', whiteSpace: 'nowrap', maxHeight: {xs: '400px', sm: '600px' }, maxWidth: '50%' }}>
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