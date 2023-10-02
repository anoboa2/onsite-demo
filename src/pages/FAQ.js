import { Box, Typography } from '@mui/material'
import NavBar from '../components/organisms/NavBar';
import FAQSection from '../components/organisms/FAQSection';
import Footer from '../components/organisms/Footer';
import Banner from '../components/molecules/Banner';
import SubscribeEmailBanner from '../content/SubscribeEmailBanner';

const FAQ = () => {
  return (
    <div>
      <NavBar />
      <Box component="div" sx={{ display: 'block', my: '10vh' }}>
        <Typography variant="h2" align="center" color="primary">FAQ's</Typography>
      </Box>
      <FAQSection />
      <Banner content={SubscribeEmailBanner} />
      <Footer />
    </div>
  );
}

export default FAQ;