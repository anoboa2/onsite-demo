import { Avatar, Box, Grid, Typography } from '@mui/material';
import NavBar from '../components/organisms/NavBar';
import Banner from '../components/molecules/Banner';
import Footer from '../components/organisms/Footer';
import Team from  '../content/Team';
import StartBookingBanner from '../content/StartBookingBanner';

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <Grid container spacing={2} sx={{ mt: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h6">
            "Our mission is to eliminate the stress and uncertainty of travel planning by connecting you with destination-based travel specialists, whose only job is to make your dream trip a reality. We match your personal taste profile to your ideal travel experiences"
          </Typography>
        </Grid>
        {Team.map((teamMember) => (
          <Grid item xs={12} sm={6} md={4} key={teamMember.id}>
            <Box p={2}>
              <Avatar alt={teamMember.alt} src={teamMember.img} sx={{ height: 150, width: 150 }}/>
              <Typography variant="h6">{teamMember.name}</Typography>
              <Typography variant="body1">{teamMember.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Banner content={StartBookingBanner} />
      <Footer />
    </div>
  );
}

export default AboutUs;