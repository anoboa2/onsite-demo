import { Box, Card, Grid, Typography } from '@mui/material';

import { makeStyles } from "@mui/styles";


const content = [
  {
    order: 1,
    title: 'Submit',
    description: 'Fill out our booking request form to get matched with a specialist',
    icon: '/icon/suv.png',
    alt: 'fully packed station wagon car'
  },
  {
    order: 2,
    title: 'Match',
    description: 'Your destination-based specialist will reach out to you to confirm all details necessary to begin your travel plans',
    icon: '/icon/tickets.png',
    alt: 'two airplane tickets'
  },
  {
    order: 3,
    title: 'Collaborate',
    description: 'Approve the itinerary and we will provide you with a Stripe invoice for the full amount of the trip plus our 7% service fee. Once we receive payment, your specialist will complete all the bookings.',
    icon: '/icon/flight.png',
    alt: 'plane in flight'
  },
  {
    order: 4,
    title: 'Approve',
    description: 'Approve the itinerary and we will provide you with a payment link for the full amount of the trip. Once we receive payment, your specialist will make all bookings and reservations.',
    icon: '/icon/waypoint.png',
    alt: 'pin on top of map'
  },
  {
    order: 5,
    title: 'Enjoy',
    description: 'A finalized itinerary will be sent including all tickets and reservations. You can continue to reach out to your specialist at any time with questions or changes, even while on your trip.',
    icon: '/icon/passport.png',
    alt: 'silouhette of passport'
  },
  {
    order: 6,
    title: 'Plans',
    description: 'If you’re not looking for a custom-made itinerary, we offer already curated itineraries by our Travel Specialists and Influencers. Inclusive of tips and recommendations.',
    icon: '/icon/business-plan.png',
    alt: 'silouhette of passport'
  }
];

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyItems: 'center',
  m: '20',
  px: 3,
  minHeight: '300px',
  maxHeight: '500px',
  minWidth: '200px',
  maxWidth: '280px',
  borderRadius: "30px",
  zIndex: 2,
  transition: 'all 0.1s ease-in-out',
  boxShadow: "12px 12px 45px rgba(0,0,0,.1)",
  '&:hover': {
    transform: 'scale(1.05)'
  },
};

const useStyles = makeStyles((theme) => ({
  cards: {
      
      [theme.breakpoints.down("sm")]: {

        marginTop:"175px !important"
        
      },
  }
}))

const HowItWorks = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={6} sx={{ justifyContent: 'center', px: 18, mb: 16}}>
    <Grid item xs={12} className={classes.cards}>
      <Typography variant="h2" align='center'>How Onsite <Box component="span" sx={{ color: "primary.main", borderBottom: "3px solid #0FAACD" }}>Works</Box></Typography>
    </Grid>
      {content.map(item => (
        <Grid item xs={28} sm={6} md={4} key={item.order}>
          <Card sx={cardStyle}>
            <Box sx={{ display: 'flex', justItems: "center", justifyContent: 'center', alignItems: 'center', alignContent: "center", flexDirection: 'column', py: 2 }}>
              <Box component="img" src={item.icon} alt={item.alt} sx={{ height: 90, width: 90, my: 2, mx: 'auto'}}/>
              <Typography variant='body1' align="center">{item.description}</Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default HowItWorks;

