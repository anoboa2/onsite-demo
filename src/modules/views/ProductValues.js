import * as React from 'react';
import Fade from 'react-reveal/Fade';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
      <Box
      sx={{
        background: 'url(/img/palm_leaves3.png)',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        display: {
          sm: 'none',
          md: 'block',
        },
        top: 1900,
        left: 300,
        width: {
          md: '350px',
          lg: '1300px',
        },
        height: {
          md: '275px',
          lg: '975px'
        },
      }}
      />
        <Grid container spacing={5} sx={{ md: { ml: 5 }, my: 10, }}>
          <Grid item container xs={12} sx={{ mt: 5, py: 20, justifyContent: 'center', alignItems: 'center',  }}>
          <Typography variant="h3" sx={{ width: "60%", mb: 5, }}>Stress Less, Dream More.  Mobile App Coming Soon.</Typography>
          <Typography variant="h5" sx={{ width: "60%", mb: 5, }}>
            We're working non-stop to bring you the mobile app that curates your dream travel experiences. We'll notify you as soon as it's available. In the meantime, plan your next big adventure with us here on our site. Keep an eye out for updates about the mobile app's release.
          </Typography>
          </Grid>
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
                  <Typography variant="h4" sx={{ my: 5, color: 'primary.main' }}>
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
                  <Typography variant="h4" sx={{ my: 5, color: 'primary.main' }}>
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
                  <Typography variant="h4" sx={{ my: 5, color: 'primary.main' }}>
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
