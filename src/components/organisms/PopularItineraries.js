import { Grid, Typography } from '@mui/material';

const PopularItineraries = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Popular Itineraries</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">Italy, Paris, Iceland, Thailand, Canada</Typography>
      </Grid>
    </Grid>
  );
}

export default PopularItineraries;