import React from "react";
import { Box, Button, Typography , Container , Grid } from '@mui/material'
import './ExploreImage.css';



const ExploreHero = ({ details }) => {

  return (
    
    <div className="hero-image3">
<br />
        <Grid container spacing={3} sx={{ justifyContent: 'center', px: 15, mb: 13}}>              
        <Grid item xs={12} sx={{ mr:{xs:-2} , ml:{xs:-13 , sm: -3}}} >
            <Typography variant="h1" align='left' lineHeight={1.3} sx={{ px: { xs: 2, sm: "20%" }, py: 5, mb: -1, ml:{xs: -15 , sm:-28 }  , mr: -5, mt: { xs:10, sm: 20 }, paddingLeft: { xs: 8 } , paddingRight: { xs: 8} , fontSize:{xs:"20px" , sm: "2.5rem"} , overflow: "hidden" , color:"primary.contrastText"}}>
            Explore With <Box component="span" sx={{ color:"secondary.main" ,  borderBottom: "3px solid #1CCC6F"}} ><b>Onsite</b></Box></Typography>
            </Grid>
            </Grid>
        </div>

  );
}

export default ExploreHero;