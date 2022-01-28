import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  height: 55,
  my: 4,
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/img/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src="/icon/productHowItWorks1.svg"
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Choose you booking details and a planning package: Full Travel or Daily Planning
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="/icon/productHowItWorks2.svg"
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Checkout to receive your trip details form and proposed itinerary
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="/icon/productHowItWorks3.svg"
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Provide any feedback, questions, or changes to the itinerary and your agent will quickly provide updates until you are 100% satisified.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>4.</Box>
                <Box
                  component="img"
                  src="/icon/productHowItWorks3.svg"
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                Approve the itinerary and  we  will provide you with a payment link for the full amount of the trip. Once we receive payment, your agent will  make all bookings and reservations. 
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>5.</Box>
                <Box
                  component="img"
                  src="/icon/productHowItWorks3.svg"
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                
A finalized itinerary will be sent including all tickets. You can continue to reach out to your agent at anytime with questions or changes, even while on your trip.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/sign-up"
          sx={{ mt: 8 }}
        >
          Start booking
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
