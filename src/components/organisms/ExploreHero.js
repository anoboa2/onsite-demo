import React from "react";
import { Box, Button, Typography , Container , Grid } from '@mui/material'
import './ExploreImage.css';



const ExploreHero = ({ details }) => {

  return (
    
    <div className="hero-image3">
<br />
        <Grid container spacing={3} sx={{ justifyContent: 'center', px: 15, mb: 13}}>              
        <Grid item xs={12} sx={{ mr:{xs:-2} , ml:{xs:-10 , sm: -3}}} >
            <Typography variant="h1" align='left' lineHeight={1.3} sx={{ px: { xs: 2, sm: "20%" }, py: 5, mb: -1, ml:{xs: -7.5 , sm:-28 }  , mr: -5, mt: { xs:3, sm: 23 } , fontSize:{xs:"20px" , sm: "2.5rem"} , overflow: "hidden" , color:"primary.contrastText"}}>
            Explore With <Box component="span" sx={{ color:"primary.main" ,  borderBottom: "3px solid #0FAACD"}} ><b>Onsite</b></Box></Typography>
            <Typography variant="subtitle1" align="left" sx={{ pb: 1 , mr: -5, paddingLeft: { xs: 8, sm: 15 } , ml:{xs: -13 , sm:-11 }, paddingRight: { xs: -17, sm: 15 } , mt: { xs: -2, sm: -2 } ,  mb: { xs: 2 , sm: -1} }} >Check out some of our popular destinations and well known specialists.</Typography>
            </Grid>
            </Grid>
        </div>

  );
}

export default ExploreHero;