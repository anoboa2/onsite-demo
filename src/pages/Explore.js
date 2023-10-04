import { Box, Container, Typography } from '@mui/material'
import BasePage from '../components/templates/BasePage';

import Hero from '../components/templates/Hero';
import PopularSpecialists from '../components/organisms/PopularSpecialists';
import PopularItineraries from '../components/organisms/PopularItineraries';
import FAQCondensedSection from '../components/organisms/FAQCondensedSection';
import MemberBenefits from '../components/organisms/MemberBenefits';
import { SpecialistSection } from '../content/FAQItems';
import { SpecialistSignupBanner } from '../components/organisms/Banners';
import CheckoutSnackbar from '../components/atoms/CheckoutSnackbar';


const Explore = () => {

  return (
    <BasePage>
      <Hero image={{ xs: 'none', sm: 'url("/img/banner.jpg")'}}>
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
      <Container>
        <PopularSpecialists />
      </Container>
      <Container sx={{ my: 5 }}>
        <PopularItineraries />
      </Container>
      <Container sx={{ my: 5 }}>
        <MemberBenefits />
      </Container>
      <Container sx={{ mt: -10 }}>
        <FAQCondensedSection faqsection={SpecialistSection} />
      </Container>
      <SpecialistSignupBanner />
    </BasePage>
  );
}

export default Explore;