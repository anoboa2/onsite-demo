import * as React from 'react';
import Fade from 'react-reveal/Fade';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '../components/Typography';
import Section from '../components/Section';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  px: { xs: 5, sm: 10 },
  pb: 20,
};

function ProductValues() {
  return (
    <Section
      sx={{
        display: 'flex',
        overflow: 'hidden',
        zIndex: -2
    }}
    >
      <Box
      component='img'
      src='/img/palm_leaves2.png'
      position="absolute"
      sx={{ width: { xs: '280px', sm: '482px'}, height: {xs: '392px', sm: '675px'} }}
      />
      {/* <Box
      component='img'
      src='/img/palm_leaves3.png'
      position="absolute"
      sx={{ display: {sm: 'none', md: 'inline'}, top: {sm: 1200, md: 1900}, left:{ sm: 100, md: 300}, width: { sm: '350px', md: '1300px'}, height: {sm: '275px', md: '975px'} }}
      /> */}
        <Grid container spacing={5} sx={{ md: { ml: 5 }, my: 10, }}>
            <Grid item container md={6} order={1} sx={{ justifyContent: 'center'}}>
              <Fade bottom>
                <Box 
                  component="img"
                  src="/img/iphone13-mockup1.png"
                  alt="iphone mockup of mobile app hotel page"
                  sx={{ height: { xs: 300, sm: 600 }, zIndex: 1 }}
                />
              </Fade>
            </Grid>
            <Grid item container md={6} order={2} sx={{ justifyContent: 'center'}}>
              <Box sx={item}>
                <Fade bottom>
                  <Typography variant="h6" sx={{ my: 5, color: 'primary.main' }}>
                    Local travel professionals
                  </Typography>
                  <Typography variant="h5">
                    {
                      'We connect you with local, knowledgeable travel experts from wherever you are looking to go and let them plan the perfect trip based on their personal experience and your occasion, time and preferences.'
                    }
                  </Typography>
                </Fade>
              </Box>
            </Grid>
            <Grid item container md={6} order={{ xs: 4, md: 3 }} sx={{ justifyContent: 'center'}}>
              <Box sx={item}>
                <Fade bottom>
                  <Typography variant="h6" sx={{ my: 5, color: 'primary.main' }}>
                    From plan till you arrive home
                  </Typography>
                  <Typography variant="h5">
                    {
                      'We are there every step of the way. Your agent will provide an itinerary for your feedback, make any needed changes now or at any point in your journey, book every aspect of your trip and be there for any questions till you arrive home.'
                    }
                  </Typography>
                </Fade>
              </Box>
            </Grid>
            <Grid item container md={6} order={{ xs: 3, md: 4 }} sx={{ justifyContent: 'center'}}>
              <Fade bottom>
                <Box
                  component="img"
                  src="/img/iphone12-mockup1.png"
                  alt="iphone mockup of mobile app booking page"
                  position="relative"
                  sx={{ height: { xs: 300, sm: 600 }}}
                />
              </Fade>
            </Grid>
            <Grid item container md={6} order={5} sx={{ justifyContent: 'center'}}>
              <Fade bottom>
                <Box
                  component="img"
                  src="/img/three-frame.png"
                  alt="iphone mockup of mobile app itinerary pages"
                  sx={{ height: { xs: 300, sm: 600 } }}
                />
              </Fade>
            </Grid>
            <Grid item container md={6} order={6} sx={{ justifyContent: 'center'}}>
              <Box sx={item}>
                <Fade bottom>
                  <Typography variant="h6" sx={{ my: 5, color: 'primary.main' }}>
                    Everything in one place
                  </Typography>
                  <Typography variant="h5">
                    {'Our app allows you and your companions to see your complete itinerary, day by day, including maps, tickets, images and reviews as well as chat with your agent any time you have a question or  need to make a change.'}
                  </Typography>
                </Fade>
              </Box>
            </Grid>
        </Grid>
    </Section>
  );
}

export default ProductValues;
