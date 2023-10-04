import { Button, Typography } from '@mui/material';
import Banner from '../../templates/Banner'

const StartBookingBanner = () => {
  return (
    <Banner>
      <Typography
        variant="h4"
        align="center"
        sx={{
          pb: 1
        }}
      >
        Ready for a specialist to curate your itinerary?
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="/match"
        sx={{
          my: 2
        }}
      >
        Start a Trip
      </Button>
    </Banner>
  )
};

export default StartBookingBanner;