import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import DestinationCard from '../molecules/DestinationCard';

const Destinations = [
  {
    name: 'Italy',
    image: '/img/destinations/Italy-popular.jpg',
    path: '/italy'
  },
  {
    name: 'Paris',
    image: '/img/destinations/France-popular.jpg',
    path: '/paris'
  },
  {
    name: 'Iceland',
    image: '/img/destinations/Iceland-popular.jpg',
    path: '/iceland'
  },
  {
    name: 'Thailand',
    image: '/img/destinations/Thailand-popular.jpg',
    path: '/thailand'
  },
  {
    name: 'Canada',
    image: 'https://source.unsplash.com/uhn-U0sSxFQ',
    path: '/canada'
  }
]

const PopularItineraries = () => {
  return (
    <Box component="div" sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
      <Typography variant="h2" align="center" color="primary.contrastText" sx={{ py: 5 }}>Our Popular Destinations</Typography>
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: "center", flexDirection: 'row', py: 2 }}>
      {Destinations.map(({ name, image, path }) => (
        <Grid key={path} xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DestinationCard destination={name} image={image} path={path} />
        </Grid>
      ))}
      </Grid>
    </Box>
  );
}

export default PopularItineraries;