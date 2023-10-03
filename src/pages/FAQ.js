import { Box, Typography } from '@mui/material'
import NavBar from '../components/organisms/NavBar';
import EmailSubscribeButton from '../components/atoms/EmailSubscribeButton';
import FAQSection from '../components/organisms/FAQSection';
import Footer from '../components/organisms/Footer';
import Banner from '../components/templates/Banner';

const FAQ = () => {
  return (
    <div>
      <NavBar />
      <Box component="div" sx={{ display: 'block', my: '10vh' }}>
        <Typography variant="h2" align="center" color="primary">FAQ's</Typography>
      </Box>
      <FAQSection />
      <Banner>
        <Typography>Not ready to book yet?</Typography>
        <Typography>Sign up to receive our latest travel tips and inspiration.</Typography>
        <EmailSubscribeButton />
      </Banner>
      <Footer />
    </div>
  );
}

export default FAQ;