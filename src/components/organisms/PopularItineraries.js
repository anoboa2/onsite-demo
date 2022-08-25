import { Box, Grid, Typography } from '@mui/material';

const Destinations = [
  {
    name: 'Italy',
    image: 'https://source.unsplash.com/rknrvCrfS1k',
    path: '/italy'
  },
  {
    name: 'Paris',
    image: 'https://source.unsplash.com/nnzkZNYWHaU',
    path: '/paris'
  },
  {
    name: 'Iceland',
    image: 'https://source.unsplash.com/dh8ONmfQyQQ',
    path: '/iceland'
  },
  {
    name: 'Thailand',
    image: 'https://source.unsplash.com/jWKk-0ZBUyg',
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
    <Grid container spacing={2} sx={{ my: 10, alignContent: 'center', justifyContent: 'center' }}>
      <Grid item xs={12}>
        <Typography variant="h3" align='center' sx={{ pb: 1 }}>
          Our Popular Destinations
        </Typography>
      </Grid>
      {Destinations.map(({ name, image, path }) => (
        <Grid item key={path} xs={4} sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
          <Box component="a" href={path} sx={{ textDecoration: 'none' }}>
            <Box sx={{
              background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${image})`,
              backgroundSize: 'cover',
              borderRadius: '20px',
              height: 300,
              width: 400,
              display: 'flex',
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
  );
}

export default PopularItineraries;