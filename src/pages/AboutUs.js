import { Avatar, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import BasePage from '../components/templates/BasePage';
import { StartBookingBanner } from '../components/organisms/Banners';

import Team from  '../content/Team';

const AboutUs = () => {
  return (
    <BasePage>
      <Box component="div" sx={{ display: 'block', width: "80%", mt: 10, mx: 'auto' }}>
        <Typography variant="h2" fontStyle= "italic" align="center" color="secondary.dark">Stress Less, Dream More.</Typography>
        <Box component="img" src='/img/content/About-2.jpg' sx={{ display: 'block', height: "90%", width: "90%", mt: { xs: 8, sm: 10 }, mb: { xs: 8, sm: 10 }, mx: 'auto' }}/>
        <Box component="div" sx={{ display: 'block', width: '80%', mx: 'auto', py: 3 }}>
          <Typography variant="h2"  fontWeight="300" align="left" sx={{ py: 1}} color="primary.contrastText"><b>Our Story</b></Typography>
          <Typography variant="body1" fontWeight="400" align='left' sx={{ mt: { xs: 3, sm: 3 } , mb: { xs: 6, sm: 6 }}}>
            Our mission is to eliminate the stress and uncertainty of travel planning by connecting travelers with our destination-based, dedicated travel specialists who are committed to making dream trips become a reality. It is like having your own personal matchmaker at your disposal; all users need to do is select their next travel destination and leave the rest to our elite travel planners.
          </Typography>
        </Box>
        <Box component="img" src='/img/content/About-3.jpg' sx={{ display: 'block', height: "90%", width: "90%", mt: { xs: 8, sm: 10 }, mb: { xs: 8, sm: 10 }, mx: 'auto' }}/>
      </Box>
      <Box component="div" sx={{ display: 'block', width: "64%", pb: 10, mx: 'auto' }}>
        <Typography variant="h2" align="left" sx={{ textAlign:{ xs: "center" , sm: "left" }}} color="primary.contrastText"><b>Meet Our Founders</b></Typography>
        <Grid container spacing={2} sx={{ mt: 7 }} >
        {Team.map((teamMember) => (
          <Grid xs={12} sm={6} md={4} key={teamMember.id} align="center" sx={{ mt: { xs: 1, sm: 7 } }} >
            <Box p={2} sx={{ display: 'block', p: 3 }}>
              <Avatar alt={teamMember.alt} src={teamMember.img} sx={{ height: 150, width: 150, mt: { xs: -5, sm: -7 }, mb: { xs: 8, sm: 3 }, mx: 'auto' }}/>
              <Typography align='center' variant="h6" sx={{ mt: { xs: -5, sm: 1 } }}>{teamMember.name}</Typography>
              <Typography align='center' variant="body1" color="secondary.main" sx={{ mt: { xs: 1, sm: 1 } }}>{teamMember.title}</Typography>
            </Box>
          </Grid>
        ))}
        </Grid>
      </Box>
      <StartBookingBanner />
    </BasePage>
  );
}

export default AboutUs;