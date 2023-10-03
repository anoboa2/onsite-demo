import { Box, Typography } from '@mui/material'

import CheckoutSnackbar from '../components/atoms/CheckoutSnackbar';
import NavBar from '../components/organisms/NavBar';
import PopularItineraries from '../components/organisms/PopularItineraries';
import Footer from '../components/organisms/Footer';
import FAQCondensedSection from '../components/organisms/FAQCondensedSection';
import { SpecialistSection } from '../content/FAQItems';
import PopularAdvisors from '../components/organisms/PopularAdvisors';
import StartBookingBanner from '../content/StartBookingBanner';
import OnsiteTravelerIcons from '../components/organisms/OnsiteTravelerIcons';
import Banner from '../components/templates/Banner';
import Hero from '../components/templates/Hero';


const Explore = () => {

  return (
    <div>
      <NavBar />
      <Hero image='url("/img/banner.jpg")'>
        <Box component="div" sx={{ mt: 2 }}>              
          <Box component="div" sx={{ position: 'absolute', display: 'block', top: '40%', left: '10%' }} >
            <Typography variant="h1" align='left' lineHeight={1.3} sx={{ color: "primary.contrastText" }}>
              Explore With <Box component="span" sx={{ color:"primary.main"}}>Onsite</Box>
            </Typography>
            <Typography variant="subtitle1" align="left">
              Check out some of our popular destinations and well known specialists.
            </Typography>
          </Box>
        </Box>
      </Hero>
      <CheckoutSnackbar />
      <PopularAdvisors />
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
      <PopularItineraries />
      <OnsiteTravelerIcons/>
      <FAQCondensedSection faqsection={SpecialistSection} />
      <Banner>
        <Typography variant="h3" align="center" sx={{ pb: 1 }}>Think you have what it takes to become a specialist?</Typography>
        <Typography variant="body1" align="center" sx={{ pb: 1 , paddingLeft: { xs: -7, sm: 15 } , paddingRight: { xs: -7, sm: 15 } , mt: { xs: 2, sm: -1 } ,  mb: { xs: 2 , sm: -1} }}>We're looking for experienced travlers who are passionate about planning the best experiences!</Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://tally.so/r/3laB76"
          target="_blank"
        >
          Apply to Join Onsite
        </Button>
      </Banner>
      <Footer />
    </div>
  );
}

export default Explore;