import { Avatar, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import NavBar from '../components/organisms/NavBar';
import Banner from '../components/molecules/Banner';
import Footer from '../components/organisms/Footer';
import Team from  '../content/Team';
import StartBookingBanner from '../content/StartBookingBanner';
import AboutHero from '../components/organisms/AboutHero';

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <AboutHero/>
      <Box component="div" sx={{ display: 'block', width: "70%", pb: 10, mx: 'auto' }}>
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
      <Banner content={StartBookingBanner} />
      <Footer />
    </div>
  );
}

export default AboutUs;