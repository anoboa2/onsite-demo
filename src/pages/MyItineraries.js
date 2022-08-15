import { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import NavBar from '../components/organisms/NavBar';
import Footer from '../components/organisms/Footer';

const content = [
  {
    name: "3 Day Trip to New Zealand",
    description: "My trip to New Zealand and the surrounding islands",
  },
  {
    name: "3 Day Trip to New Zealand",
    description: "My trip to New Zealand and the surrounding islands",
  },
  {
    name: "3 Day Trip to New Zealand",
    description: "My trip to New Zealand and the surrounding islands",
  }
];

const ItineraryCard = ({ itinerary }) => {
  const { name, description } = itinerary;

  return (
  <Card sx={{ minWidth: 275 }}>
    <CardMedia
      component='img'
      alt='Contemplative Reptile'
      height='140'
      image='https://source.unsplash.com/random'
      title='Contemplative Reptile'
    />
    <CardContent>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="body1">{description}</Typography>
    </CardContent>
  </Card>
  );
}

const MyItineraries = () => {

  return (
    <>
      <NavBar />
      <Grid container spacing={2} sx={{ mt: '10vh', height: '90vh', px: 20}}>
        <Grid item xs={12} sx={{ mt: 20 }}>
          <Typography variant='h4'>My Itineraries</Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 20 }}>
          <Typography variant='body1'>
            Coming soon... access your purchased itineraries here.
          </Typography>
        </Grid>
          {/* {content.map(itinerary => (
            <Grid item xs={12} sm={6} md={4} key={itinerary.name}>
              <ItineraryCard itinerary={itinerary} />
            </Grid>
          ))} */}
      </Grid>
      <Footer />
    </>
  );
}

export default MyItineraries;