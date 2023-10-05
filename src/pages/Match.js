import { Box, Container, Typography } from '@mui/material'
import BasePage from '../components/templates/BasePage';

import SpecialistForm from '../components/organisms/SpecialistForm';
import HowItWorks from '../components/organisms/HowItWorks';
import FAQCondensedSection from '../components/organisms/FAQCondensedSection';
import { CondensedSection } from '../content/FAQItems';
import { SubscribeEmailBanner } from '../components/organisms/Banners';

const Match = () => {
  // const [isLoading, setIsLoading] = useState(false);

  // const queryParams = new URLSearchParams(window.location.search);
  // const indicator = queryParams.get('indicator');


  return (
    <BasePage>
      <Container sx={{ my: 10 }}>
        <Box sx={{ pt: {xs: 5, sm: 5}, pl: { xs: 0, sm: 10 } }} >
          <Typography variant="h2" color="secondary.main" align='left' sx={{ mb: 2 }}>Kick back and relax.  We'll do the planning.</Typography>
          <Typography variant="subtitle1" align='left' color="text.primary">Tell us about your dream trip and we'll match you with a specialist who will make it a reality</Typography>
        </Box>
        <SpecialistForm />
      </Container>
      <Container sx={{ my: 4 }}>
        <HowItWorks />
      </Container>
      <Container sx={{ my: 2 }}>
        <FAQCondensedSection faqsection={CondensedSection}/>
      </Container>
      <SubscribeEmailBanner />
    </BasePage>
  );
}

export default Match;