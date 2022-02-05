import * as React from 'react';
import { PropTypes } from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '../components/Card';
import Button from '../components/Button';
import Typography from '../components/Typography';
import WaitlistButton from './WaitlistButton';


// add onHover animation to Cards

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

const cardContent = [
  {icon: '/icon/productHowItWorks1.svg', alt: 'suitcase', text: 'Choose you booking details and a planning package: Full Travel or Daily Planning'},
  {icon: '/icon/productHowItWorks2.svg', alt: 'graph', text: 'Checkout to receive your trip details form and proposed itinerary'},
  {icon: '/icon/productHowItWorks3.svg', alt: 'clock', text: 'Provide any feedback, questions, or changes to the itinerary and your agent will quickly provide updates until you are 100% satisified.'},
  {icon: '/icon/productHowItWorks3.svg', alt: 'clock', text: 'Approve the itinerary and  we  will provide you with a payment link for the full amount of the trip. Once we receive payment, your agent will  make all bookings and reservations.'},
  {icon: '/icon/productHowItWorks3.svg', alt: 'clock', text: 'A finalized itinerary will be sent including all tickets. You can continue to reach out to your agent at anytime with questions or changes, even while on your trip.'},
];

const ProductHowItWorks = (props) => {

  const StepCards = props.cardContent.map((content) => {
    return (
      <Grid item xs={12} md={4}>
        <Card sx={{ ...item, mx: 5, my: 5}}>
          <Box sx={number}>1.</Box>
          <Box
            component="img"
            src={content.icon}
            alt={content.alt}
            sx={image}
          />
          <Typography variant="h5" align="center">{content.text}</Typography>
        </Card>
    </Grid>
    );
  });

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        bgcolor: 'white',
        overflow: 'hidden' }}
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
            {StepCards}
          </Grid>
        </div>
        <WaitlistButton />
      </Container>
    </Box>
  );
}

ProductHowItWorks.propTypes = {
  icon: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
};

export default ProductHowItWorks;
