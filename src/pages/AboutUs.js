import { Avatar, Box, Grid, Typography , Container} from '@mui/material';
import NavBar from '../components/organisms/NavBar';
import Banner from '../components/molecules/Banner';
import Footer from '../components/organisms/Footer';
import Team from  '../content/Team';
import StartBookingBanner from '../content/StartBookingBanner';
import AboutHero from '../components/organisms/AboutHero';
import DestinationPage from '../components/organisms/DestinationPage';

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <AboutHero/>
      <Grid container spacing={3} sx={{ px: { xs: 3, sm: "20%" }, py: 5, mb: 10, overflow: "hidden" }}>
        {Team.map((teamMember) => (
          <Grid item xs={12} sm={6} md={4} key={teamMember.id} align='center' sx={{  mt: { xs: 3, sm: 10 }  }} >
            <Box p={2}>
              <Avatar alt={teamMember.alt} src={teamMember.img} sx={{ height: 150, width: 150 ,  mb: { xs: 8, sm: 3 } }}/>
              <Typography align='center' variant="h6">{teamMember.name}</Typography>
              <Typography align='center' variant="body1">{teamMember.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Banner content={StartBookingBanner} />
      <DestinationPage />
      <Footer />
    </div>
  );
}

export default AboutUs;