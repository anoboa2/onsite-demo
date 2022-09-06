import { Box, Grid, Typography , item } from '@mui/material';

const Traveler = [
  {
    Name: 'Curated Travel Itineraries',
    title: "Experience a destination like a travel influencer or a local",
    image: '/icon/curate.png',
  },
  {
    Name: 'Forget typical tourism',
    title: "Our travel specialists recommend local and hidden gems",
    image: '/icon/expert.png',
  },
  {
    Name: 'Request Customizations',
    title: "You can request a custom itinerary from one of our specialists",
    image: '/icon/request.png',
  }
]

const OnsiteTravelerIcons = () => {
  return (
    <Grid  container spacing={3} sx={{ px: { xs: 3, sm: "20%" }, py: 5, mb: 10, mt: { xs: -13, sm: 10 }, overflow: "hidden" }}>
      <Grid item xs={12}>
        <Typography variant="h2"  fontWeight="300"  sx={{ py: 1,  mt: { xs: -3, sm: -7 } , mb: { xs: 8, sm: 8 } ,  textAlign:{ xs: "center" , sm: "center" }}} color="primary.contrastText">As an Onsite <b>Traveler </b></Typography>
        <Typography variant="subtitle1" color="text.primary" sx={{ py: 1,  mt: { xs: -8, sm: -9 } , mb: { xs: 8, sm: 8 } ,  textAlign:{ xs: "center" , sm: "center" }}}>You get <Box component="span" fontStyle={'italic'} > <b>wayyy</b></Box> more </Typography>
      </Grid>
      <Grid container spacing={2} align="center">
        {Traveler.map(({ Name, title, image}) => (
          <Grid item key={Name} xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' , mt: { xs: -2, sm: -2} }}>
            <Box component="a" sx={{ px: 5, py:5, textDecoration: 'none', mx: 'auto' , mt: { xs: -3, sm: -3} }}>
            <Box component="img" src={image}  sx={{ height: 90, width: 90, my: 2, mx: 'auto', mb: 4}}/>
                <Typography variant="h5" align="center" color="primary.main" sx={{mt: { xs: 3, sm: 3}}}>
                  {Name}
                </Typography>
                <Typography variant="h5" align="center" fontWeight="300" sx={{mt: { xs: 1, sm: 1}}}>
                  {title}
                </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default OnsiteTravelerIcons;