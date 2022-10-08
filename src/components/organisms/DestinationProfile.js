import * as React from "react";

import { Avatar, Box, Grid, Typography } from '@mui/material';

const Advisors = [
  {
    firstName: 'Izanna',
    lastName: 'Levintova',
    title: "Specialist",
    image: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/izanna.lev/profile.jpeg',
    id: 'izanna.lev'
  }
]


export default function DestinationProfile() {


  return (
    
    <Grid container spacing={3} sx={{ px: { xs: 3, sm: "20%" }, py: 7, mb: 10, overflow: "hidden" }}>
    <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", mb: 5 }}>
      <Typography variant="h2" align="center" fontWeight="300" sx={{ pb: 6 }} >
      Onsite Specialists that really know <b>Italy</b></Typography>
      {/* <Typography variant="subtitle1" align="center" color="text.primary" >Your specialist will plan your trip from start to finish</Typography> */}
    </Grid>
    <Grid container spacing={3}>
        {Advisors.map(({ firstName, lastName, title, image, id }) => (
          <Grid item key={id} xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' , mt: { xs: -2, sm: -2} }}>
            <Box component="a" href={`/explore/${id}`} sx={{ textDecoration: 'none', mx: 'auto' , mt: { xs: 4, sm: 3} }}>
                <Avatar src={image} sx={{ height: 200, width: 200 }}/>
                <Typography variant="h5" align="center" sx={{mt: { xs: 3, sm: 3}}}>
                  {firstName} {lastName}
                </Typography>
                <Typography variant="h5" align="center" color="secondary.main" sx={{mt: { xs: 1, sm: 1}}}>
                  {title}
                </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
  </Grid>
  );
}

