import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const Benefits = [
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

const MemberBenefits = () => {
  return (
    <Box component="div" sx={{ display: 'block', width: '100%' }}>
      <Typography variant="h2" align="center" color="primary.contrastText">As an Onsite Traveler</Typography>
      <Typography variant="subtitle1" align="center" color="text.primary">You get <Box component="span" fontStyle={'italic'}><b>wayyy</b></Box> more</Typography>
      <Grid container sx={{ display: 'flex', my: 2 }}>
      {Benefits.map(({ Name, title, image}) => (
        <Grid key={Name} xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' , mt: { xs: -2, sm: -2} }}>
          <Box component="a" sx={{ px: 5, py: 5, textDecoration: 'none' }}>
            <Box component="img" src={image}  sx={{ display: 'block', height: 90, width: 90, my: 2, mx: 'auto', mb: 4}} />
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
    </Box>
  )
}

export default MemberBenefits;