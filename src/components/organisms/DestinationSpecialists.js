import { Box, Grid, Typography } from '@mui/material';
import SpecialistAvatar from '../molecules/SpecialistAvatar';

const Specialists = [
  {
    firstName: 'Izanna',
    lastName: 'Levintova',
    title: "Specialist",
    image: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/izanna.lev/profile.jpeg',
    id: 'izanna.lev'
  }
]

const DestinationSpecialists = ({ location }) => (
  <Box sx={{ px: { xs: 3, sm: "20%" }, py: 7, mb: 10, overflow: "hidden" }}>
    <Typography variant="h2" align="center" sx={{ pb: 6 }}>Onsite Specialists that really know <b>Italy</b></Typography>
    <Grid container spacing={3}>
    {Specialists.map(({ firstName, lastName, title, image, id }) => (
      <Grid item key={id} xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' , mt: { xs: -2, sm: -2} }}>
        <SpecialistAvatar specialist={{ firstName, lastName, title, image, id }} />
      </Grid>
    ))}
    </Grid>
  </Box>
);

export default DestinationSpecialists;