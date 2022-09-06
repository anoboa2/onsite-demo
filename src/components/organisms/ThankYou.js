import React from "react";
import { useEffect, useState } from 'react';
import { Box, Button, Typography , Container , Grid } from '@mui/material'
import './ExploreImage.css';
import OtherItineraries from "./OtherItineraries";



const ThankYou = ({  }) => {

  return (

        <Grid container spacing={3} sx={{ my: 10, px: { xs: 3, sm: "12%" } , alignContent: 'center', py: 5, mb: 10, mt: { xs: 8, sm: 10 }, overflow: "hidden", justifyContent: 'center' }}>              
        <Grid item xs={12}>
            <Typography variant="h3" container spacing={3} color="primary.main" sx={{ my: 10, px: { xs: 3, sm: "12%" } , py: 5, mb: 10, mt: { xs: 8, sm: 10 }, overflow: "hidden" , textAlign:{ xs: "center" , sm: "center" }}}>
            Thank you for purchasing the <Box component="span" ><b> "Destination" </b></Box> Itinerary</Typography>
            
            <Typography variant="h6" fontWeight="400"  align='left' container spacing={3} sx={{ my: 10, px: { xs: 3, sm: "10%" } , alignContent: 'center', py: 5, mb: 10, mt: { xs: -10, sm: -10 }, overflow: "hidden", justifyContent: 'center' }}>
           
            Hi <b>"First Name" "Last Name"</b>,

          </Typography>
      
          <Typography variant="h6" fontWeight="400" align='left' container spacing={3} sx={{ my: 10, px: { xs: 3, sm: "10%" } , alignContent: 'center', py: 5, mb: 10, mt: { xs: -15, sm: -17 }, overflow: "hidden", justifyContent: 'center' }}>
            
            We’re excited for you to go on a trip to <b>"Destination"</b>. 
            We have emailed you the itinerary. Please be sure to check all of your folders in your inbox. 
            (Even the Spam folder. We usually don’t send out any spam emails, but at times it ends up going to the Spam folder.)

          </Typography>

            </Grid>

            <OtherItineraries/>

            </Grid>
  );
}

export default ThankYou;