import { Button, Typography } from '@mui/material';
import Banner from '../components/templates/Banner'

const StartBookingBanner = () => {
  return (
    <Banner>
      <Typography>Ready for a specialist to curate your itinerary?</Typography>
      <Button
        variant="contained"
        color="primary"
        href="/match"
      >
        Start a Trip
      </Button>
    </Banner>
  )
};

export default StartBookingBanner;