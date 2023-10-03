import { Box, Button, Typography } from "@mui/material";
import BasePage from "../components/templates/BasePage";

import Hero from '../components/templates/Hero';
import HowItWorks from '../components/organisms/HowItWorks';
import Services from '../components/organisms/Services';
import ProductSection from '../components/organisms/ProductSection';
import ReviewSlider from '../components/organisms/ReviewSlider';
import { StartBookingBanner, SubscribeEmailBanner } from '../components/organisms/Banners';

const Home = () => {
  return (
    <BasePage>
      <Hero image={{ xs: 'none', sm: 'url("/img/newhero22.png")' }}>
        <Box component="div" sx={{ position: 'relative', display: 'block', top: '30%', left: { xs: '20%', sm: '27%' }, pt: '20px', whiteSpace: 'nowrap', maxHeight: {xs: '100vh', sm: '600px' }, maxWidth: '50%' }}>
          <Typography variant="h1" sx={{ display: 'block' }}>
            We make the plans,
          </Typography>
          <Typography variant="h2" sx={{ mb: 3, display: 'block', color: "#1CCC6F"}}>
            you make the memories.
          </Typography>
          <Typography variant="body1" maxWidth="40%" color="text.primary" sx={{ mt:{xs: 1 , sm: 2} }} style={{ display: "inline-block", textAlign: "left" }} >
            An Instagram-worthy trip is just a click away.
          </Typography>
          <Box component="div" sx={{ mt: 3, mb: 3, width: '50%' }}>
            <Button variant="contained" href="/match" sx={{ color:'primary', padding: "10px 15px", borderRadius: "10px", fontSize: "15px" }}>
              Match with a travel specialist
            </Button>
          </Box>
        </Box>
      </Hero>
      <HowItWorks />
      <ProductSection />
      <Services />
      <StartBookingBanner />
      <ReviewSlider />
      <SubscribeEmailBanner />
    </BasePage>
  );
}

export default Home;
