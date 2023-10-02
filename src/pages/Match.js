import { Box, Container, Typography } from '@mui/material'

import NavBar from '../components/organisms/NavBar';
import SpecialistForm from '../components/organisms/SpecialistForm';
import HowItWorks from '../components/organisms/HowItWorks';
import Banner from '../components/molecules/Banner';
import AboutPageBanner from '../content/AboutPageBanner';
import FAQCondensedSection from '../components/organisms/FAQCondensedSection';
import Footer from '../components/organisms/Footer';
import { CondensedSection } from '../content/FAQItems';
import SubscribeEmailBanner from '../content/SubscribeEmailBanner';

const Match = () => {
  // const [isLoading, setIsLoading] = useState(false);

  // const queryParams = new URLSearchParams(window.location.search);
  // const indicator = queryParams.get('indicator');


  return (
    <div>
      <NavBar />
      <Box component="div">
        <Container sx={{ my: 10 }}>
          <Box sx={{ pt: {xs: 5, sm: 5}, pl: { xs: 0, sm: 10 } }} >
          <Typography variant="h2" color="secondary.main" align='left' sx={{ mb: 2 }}>Kick back and relax.  We'll do the planning.</Typography>
          <Typography variant="subtitle1" align='left' color="text.primary">Let us know how we can plan your trip of a lifetime</Typography>
          </Box>
          <SpecialistForm />
        </Container>
      </Box>
      <HowItWorks />
      <Banner content={AboutPageBanner} />
      <FAQCondensedSection faqsection={CondensedSection}/>
      <Banner content={SubscribeEmailBanner} />
      <Footer />
    </div>
  );
}

export default Match;