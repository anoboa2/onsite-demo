import { Box, Grid, Typography } from '@mui/material';

const Destinations = [
  {
    name: 'Aruba',
    image: '/img/destinations/aurba-destination.jpg',
    path: '/aruba'
  },
  {
    name: 'Jamaica',
    image: '/img/destinations/Jamaica-destination.jpg',
    path: '/jamaica'
  },
  {
    name: 'Bahamas',
    image: '/img/destinations/Bahamas-destination.jpg',
    path: '/bahamas'
  },
]

const OtherItineraries = () => {
  return (
    // <Grid container spacing={3} sx={{ px: { xs: 3, sm: "20%" }, py: 5, mb: 10, mt: { xs: 8, sm: 10 }, overflow: "hidden" }}>
    <Grid container spacing={3} sx={{ my: 10, px: { xs: 3, sm: "12%" } , alignContent: 'center', py: 5, mb: 10, mt: { xs: -5, sm: -5 }, overflow: "hidden", justifyContent: 'center' }}>
      <Grid item xs={12}>
      <Typography variant="h3"  fontWeight="300" sx={{ py: 1,  mt: { xs: -7, sm: -7 } , mb: { xs: 8, sm: 8 } ,  textAlign:{ xs: "center" , sm: "center" }}} color="primary.contrastText">Check out our itineraries for other <b>destinations!</b></Typography>
      </Grid>
      {Destinations.map(({ name, image, path }) => (
       <Grid item key={path} xs={28} sm={6} md={4} sx={{ display: 'flex', justItems: "center", justifyContent: 'center', alignItems: 'center', alignContent: "center", flexDirection: 'column', py: 2, mt: { xs: -5, sm: -4 } , mb: { xs: 8, sm: 8 } }}>
          <Box component="a" href={path} sx={{ textDecoration: 'none', mb:{xs: -4, sm: -4} }}>
            <Box sx={{
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
  );
}

export default OtherItineraries;