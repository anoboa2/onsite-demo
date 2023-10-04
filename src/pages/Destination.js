import { Box, Container, Typography } from '@mui/material';
import BasePage from "../components/templates/BasePage";

import Hero from "../components/templates/Hero";
import DestinationSpecialists from "../components/organisms/DestinationSpecialists";
import MemberBenefits from "../components/organisms/MemberBenefits";
import DestinationItineraries from "../components/organisms/DestinationItineraries";
import { StartBookingBanner } from "../components/organisms/Banners";

const Destination = () => {
  return (
    <BasePage>
      <Hero image='url("/img/destinations/italy-cover2.jpg")'>
        <Box component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: 'rgba(255, 255, 255, .1)' }}>
          <Box component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80%', height: '100%', backgroundColor: 'rgba(255, 255, 255, .55)' }}>
            <Box component="div" sx={{ display: 'block', width: '50%', flexDirection: 'column', alignContent: 'center', justifyItems: 'center' }}>
              <Typography variant="h2" align="center" color="primary.contrastText" sx={{ my: 4 }}>Italy</Typography>
              <Typography variant="subtitle1" align="center">
                The beautiful country of fine food and wine, sun-bathed landscapes, Venetian canals, smoldering volcanoes, and sleepy lagoons. Let our travel specialists help you enjoy a trip of a lifetime. 
                From Milan to Rome to Positano, use our travel guides to explore all the hidden gems in this beautiful country.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Hero>
      <Container sx={{ my: 5, minHeight: '40vh' }}>
        <MemberBenefits />
      </Container>
      <Container sx={{ my: 5 }}>
        <DestinationItineraries />
      </Container>
      <Container sx={{ my: 5 }}>
        <DestinationSpecialists />
      </Container>
      <StartBookingBanner />
    </BasePage>
  );
}

export default Destination;