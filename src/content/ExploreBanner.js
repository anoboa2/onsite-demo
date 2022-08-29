import { Button , Typography } from '@mui/material';

const ExploreBanner = {
  title: <Typography variant="h3" align="center" sx={{ pb: 1 }} >Looking for bespoke travel itineraries based on your interests?</Typography>,
  subtitle: <Typography variant="body1" align="center" sx={{ pb: 1 , paddingLeft: { xs: -7, sm: 15 } , paddingRight: { xs: -7, sm: 15 } , mt: { xs: 2, sm: -1 } ,  mb: { xs: 2 , sm: -1} }} >In addition to our influencer travel plans, Onsite offers concierge service to fully customize your itinerary.</Typography>,
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