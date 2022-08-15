import { Button } from '@mui/material';

const ExploreBanner = {
  title: 'Looking for bespoke travel itineraries based on your interests?',
  subtitle: 'In addition to our influencer travel plans, Onsite offers concierge service to fully customize your itinerary.',
  cta: 
    <Button
      variant="contained"
      color="primary"
      href="/match"
    >
      Plan My Trip
    </Button>,
  background: '/img/BannerBackground.webp',
}

export default ExploreBanner;