import { Box, Container, Typography } from '@mui/material'
import BasePage from '../components/templates/BasePage';

import CheckoutSnackbar from '../components/atoms/CheckoutSnackbar';

import PopularItineraries from '../components/organisms/PopularItineraries';

import FAQCondensedSection from '../components/organisms/FAQCondensedSection';
import { SpecialistSection } from '../content/FAQItems';
import PopularSpecialists from '../components/organisms/PopularSpecialists';
import { SpecialistSignupBanner } from '../components/organisms/Banners';
import MemberBenefits from '../components/organisms/MemberBenefits';
import Hero from '../components/templates/Hero';


const Explore = () => {

  return (
    <BasePage>
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
      <Container sx={{ display: 'block', position: 'relative', height: '100%', minHeight: '50vh', width: '80%', my: 5 }}>
        <PopularSpecialists />
      </Container>
      <Container sx={{ display: 'block', position: 'relative', height: '100%', minHeight: '70vh', width: '80%', my: 10 }}>
        <PopularItineraries />
      </Container>
      <Container sx={{ display: 'block', position: 'relative', height: '100%', minHeight: '50vh', width: '80%', my: 5 }}>
        <MemberBenefits />
      </Container>
      <Container sx={{ display: 'block', position: 'relative', height: '100%', minHeight: '50vh', width: '80%' }}>
        <FAQCondensedSection faqsection={SpecialistSection} />
      </Container>
      <SpecialistSignupBanner />
    </BasePage>
  );
}

export default Explore;