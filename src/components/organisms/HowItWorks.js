import { Box, Card, Grid, Typography } from '@mui/material';

import { makeStyles } from "@mui/styles";


const content = [
  {
    order: 1,
    title: 'Submit',
    description: '• Fill out our booking form to get matched with a specialist from your desired destination',
    description2: '• Your specialist will reach out to you to confirm all details necessary to begin creating your perfect trip itinerary',
    icon: '/icon/finger-touching-tablet-screen.png',
    alt: 'fully packed station wagon car'
  },
  {
    order: 2,
    title: 'Match',
    description: '• Allow 48 hours for a draft itinerary to be sent to you',
    description2: '• Chat with your personal specialist to provide any feedback, questions or changes',
    description3: '• Your specialist will quickly provide updates until you are 100% satisfied',
    icon: '/icon/support.png',
    alt: 'two airplane tickets'
  },
  {
    order: 3,
    title: 'Collaborate',
    description: '• Approve the itinerary and we will provide you with a Stripe invoice for the full amount of the trip plus our 7% service fee. Once we receive payment, your specialist will complete all the bookings.',
    icon: '/icon/money.png',
    alt: 'plane in flight'
  }
];

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyItems: 'center',
  m: '20',
  px: 3,
  minHeight: '350px',
  maxHeight: '500px',
  minWidth: '250px',
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
    <Grid container spacing={6} sx={{ justifyContent: 'center', px: 15, mb: 16}}>
    <Grid item xs={12} className={classes.cards}>
      <Typography variant="h2" align='center' sx={{ px: { xs: 2, sm: "20%" }, py: 5, mb: -3, ml: -5 , mr: -5, overflow: "hidden" }}>How Onsite Works<Box component="span" sx={{ color: "primary.main", borderBottom: "3px solid #0FAACD" }}> For You</Box></Typography>
    </Grid>
      {content.map(item => (
        <Grid item xs={28} sm={6} md={4} key={item.order}>
          <Card sx={cardStyle}>
            <Box sx={{ display: 'flex', justItems: "center", justifyContent: 'center', alignItems: 'center', alignContent: "center", flexDirection: 'column', py: 2 }}>
              <Box component="img" src={item.icon} alt={item.alt} sx={{ height: 90, width: 90, my: 2, mx: 'auto'}}/>
              <Typography variant='body1' align="left">{item.description}</Typography><br />
              <Typography variant='body1' align="left">{item.description2}</Typography><br />
              <Typography variant='body1' align="left">{item.description3}</Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default HowItWorks;

