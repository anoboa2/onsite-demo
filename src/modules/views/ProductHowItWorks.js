import * as React from 'react';
import Fade from 'react-reveal/Fade';
import { PropTypes } from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '../components/Card';
import Typography from '../components/Typography';


// add onHover animation to Cards

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  mx: 5,
  my: 5,
  px: 5,
  minHeight: '300px',
  minWidth: '200px',
  zIndex: 2,
  '&:hover': {
    transform: 'scale(1.1)',
    // transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    // transformStyle: 'preserve-3d',
  },
};

// const number = {
//   fontSize: 24,
//   fontFamily: 'default',
//   color: 'secondary.main',
//   fontWeight: 'medium',
// };

const image = {
  height: 55,
  my: 4,
};

const cardContent = [
  {icon: '/icon/suv.png', alt: 'fully packed station wagon car', text: 'Choose you booking details and a planning package: Full Travel or Daily Planning'},
  {icon: '/icon/tickets.png', alt: 'two airplane tickets', text: 'Checkout to receive your trip details form and proposed itinerary'},
  {icon: '/icon/flight.png', alt: 'plane in flight', text: 'Provide any feedback, questions, or changes to the itinerary and your agent will quickly provide updates until you are 100% satisified.'},
  {icon: '/icon/waypoint.png', alt: 'pin on top of map', text: 'Approve the itinerary and we will provide you with a payment link for the full amount of the trip. Once we receive payment, your agent will  make all bookings and reservations.'},
  {icon: '/icon/passport.png', alt: 'silouhette of passport', text: 'A finalized itinerary will be sent including all tickets. You can continue to reach out to your agent at anytime with questions or changes, even while on your trip.'},
];

function ProductHowItWorks(props) {

  const StepCards = cardContent.map((content, index) => {
    return (
      <Grid item key={index} xs={12} md={4}>
        <Fade bottom>
          <Card sx={item}>
            {/* <Box sx={number}>{index+1}</Box> */}
            <Box
              component="img"
              src={content.icon}
              alt={content.alt}
              sx={image}
            />
            <Typography variant="body1" align="center">{content.text}</Typography>
          </Card>
        </Fade>
    </Grid>
    );
  });

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        bgcolor: 'white',
        overflow: 'hidden',
        // backgroungImage: '/img/productCurvyLines.png',
        // backgroundColor: 'white',
      }}
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
            zIndex: -1,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          How it works
        </Typography>
        <div>
          <Grid container spacing={5} sx={{ justifyContent: 'center' }}>
            {StepCards}
          </Grid>
        </div>
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
