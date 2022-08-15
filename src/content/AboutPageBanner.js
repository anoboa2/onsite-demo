import { Button } from '@mui/material';

const StartBookingBanner = {
  title: 'What Makes Us Different',
  subtitle: 'We are travel aficionados. We design and then book itineraries based on your travel profile, interests, and budget. Our local travel specialists curate the best travel plans based on their experiences in your destination. Plus, we enable you to live like a local and show you as much as possible instead of rushing through a city or booking private tours by yourself.',
  cta: 
    <Button
      variant="contained"
      color="primary"
      href="/aboutus"
    >
      Learn More
    </Button>,
  background: '/img/BannerBackground.webp',
}

export default StartBookingBanner;