import { Box, Grid, Typography } from '@mui/material';

const WhatToExpect = () => {
  return (
    <>
      <Grid container spacing={12} sx={{ mt: '5vh', height: '80vh', px: 20}}>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h4">
            What to Expect Next
          </Typography>
          <Typography variant="h5" sx={{mt: 4}} style={{ textAlign: "justify" }}>
            Our specialist will review your request and reach out to you within the next 24 hours.
            They will discuss any additional details they need to plan you the best possible experience for you trip.
            They will prepare and share with you an itinerary specific for your trip.
            If you approve you 
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">
            What to Do Next
          </Typography>
          <Typography variant="h5" sx={{mt: 4}} style={{ textAlign: "justify" }}>
            Update your Travel Profile
            Take a look at where our ambassadors are traveling
            Check us out on TikTok
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default WhatToExpect;