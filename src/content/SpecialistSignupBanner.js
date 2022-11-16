import { Button , Typography } from '@mui/material';

const ExploreBanner = {
  title: <Typography variant="h3" align="center" sx={{ pb: 1 }}>Think you have what it takes to become a specialist?</Typography>,
  subtitle: <Typography variant="body1" align="center" sx={{ pb: 1 , paddingLeft: { xs: -7, sm: 15 } , paddingRight: { xs: -7, sm: 15 } , mt: { xs: 2, sm: -1 } ,  mb: { xs: 2 , sm: -1} }}>We're looking for experienced travlers who are passionate about planning the best experiences!</Typography>,
  cta: 
    <Button
      variant="contained"
      color="primary"
      href="https://tally.so/r/3laB76"
      target="_blank"
    >
      Apply to Join Onsite
    </Button>,
  background: '/img/BannerBackground.webp',
}

export default ExploreBanner;