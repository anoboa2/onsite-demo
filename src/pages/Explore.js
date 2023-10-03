import { Box, Typography } from '@mui/material'
import BasePage from '../components/templates/BasePage';

import CheckoutSnackbar from '../components/atoms/CheckoutSnackbar';

import PopularItineraries from '../components/organisms/PopularItineraries';

import FAQCondensedSection from '../components/organisms/FAQCondensedSection';
import { SpecialistSection } from '../content/FAQItems';
import PopularAdvisors from '../components/organisms/PopularAdvisors';
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
      <PopularAdvisors />
      <PopularItineraries />
      <MemberBenefits />
      <FAQCondensedSection faqsection={SpecialistSection} />
      <SpecialistSignupBanner />
    </BasePage>
  );
}

export default Explore;