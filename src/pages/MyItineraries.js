import { Grid, Typography } from '@mui/material';
import BasePage from '../components/templates/BasePage';

const MyItineraries = () => {

  return (
    <BasePage>
      <Grid container spacing={2} sx={{ mt: '10vh', height: '90vh', px: 20}}>
        <Grid item xs={12} sx={{ mt: 20 }}>
          <Typography variant='h4'>My Itineraries</Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 20 }}>
          <Typography variant='body1'>
            Coming soon... access your purchased itineraries here.
          </Typography>
        </Grid>
          {/* {content.map(itinerary => (
            <Grid item xs={12} sm={6} md={4} key={itinerary.name}>
              <ItineraryCard itinerary={itinerary} />
            </Grid>
          ))} */}
      </Grid>
    </BasePage>
  );
}

export default MyItineraries;