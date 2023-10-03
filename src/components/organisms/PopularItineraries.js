import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

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
    <Container sx={{ height: '100vh', maxWidth: '1440px' }}>
      <Box component="div" sx={{ display: 'block' }}>
        <Typography variant="h2" align="center" color="primary.contrastText">Our Popular Destinations</Typography>
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: "center", flexDirection: 'row', py: 2 }}>
        {Destinations.map(({ name, image, path }) => (
          <Grid key={path} xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box component="a" href={path} sx={{ textDecoration: 'none' }}>
              <Box component="div" sx={{
                background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${image})`,
                backgroundSize: 'cover',
                borderRadius: '20px',
                m: '30',
                px: 2,
                minHeight: '350px',
                maxHeight: '500px',
                minWidth: '250px',
                maxWidth: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${image})`,
                  backgroundSize: 'cover',
                  backdropFilter: 'blur(5px)',
                }
                }}
              >
                <Typography variant="h2" color="white">{name}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default PopularItineraries;