import { Box, Typography } from '@mui/material';
import StandardPage from "../components/templates/StandardPage";


import Hero from "../components/templates/Hero";
import DestinationProfile from "../components/organisms/DestinationProfile";
import MemberBenefits from "../components/organisms/MemberBenefits";
import PopularItinerariesCountry from "../components/organisms/PopularItinerariesCountry";
import { StartBookingBanner } from "../components/organisms/Banners";




const Destination = () => {
  return (
    <StandardPage>
      <Hero image='url("/img/destinations/italy-cover2.jpg")'>
        <Box component="div" sx={{ display: 'block', m: 'auto', width: '80%', maxWidth: '1440px', height: '100%', backgroundColor: 'rgba(255, 255, 255, .1)' }}>
          <Box component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'space-evenly', backgroundColor: 'rgba(255, 255, 255, .1)' }}>
            <Typography variant="h2" align="center" color="primary.contrastText">Italy</Typography>
            <Typography variant="subtitle1" align="center">
              The beautiful country of fine food and wine, sun-bathed landscapes, Venetian canals, smoldering volcanoes, and sleepy lagoons. Let our travel specialists help you enjoy a trip of a lifetime. 
              From Milan to Rome to Positano, use our travel guides to explore all the hidden gems in this beautiful country.
            </Typography>
          </Box>
        </Box>
      </Hero>
      <MemberBenefits />
      <PopularItinerariesCountry />
      <DestinationProfile />
      <StartBookingBanner />
    </StandardPage>
  );
}

export default Destination;