import { Box, Container, Typography } from '@mui/material'
import BasePage from '../components/templates/BasePage';

import FAQSection from '../components/organisms/FAQSection';
import { SubscribeEmailBanner } from '../components/organisms/Banners';

const FAQ = () => {
  return (
    <BasePage>
      <Box component="div" sx={{ display: 'block', my: '5vh' }}>
        <Typography variant="h2" align="center" color="primary">FAQ's</Typography>
      </Box>
      <Container sx={{ mb: 5 }}>
        <FAQSection />
      </Container>
      <SubscribeEmailBanner />
    </BasePage>
  );
}

export default FAQ;