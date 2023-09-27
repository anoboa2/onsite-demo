import { Avatar, Box, Grid, Typography , Container} from '@mui/material';
import NavBar from '../components/organisms/NavBar';
import Banner from '../components/molecules/Banner';
import Footer from '../components/organisms/Footer';
import Team from  '../content/Team';
import StartBookingBanner from '../content/StartBookingBanner';
import AboutHero from '../components/organisms/AboutHero';

const AboutUs = (setting) => {
  return (
    <div>
      <NavBar />
      <AboutHero/>
      <Grid container spacing={3} sx={{ px: { xs: 3, sm: "20%" }, py: 5, mb: 10, mt: { xs: 12, sm: 21 }, overflow: "hidden" }}>
        {/* <Grid item xs={12}>
         <Typography variant="h2"  fontWeight="300" align="left" sx={{ py: 1}} color="primary.contrastText"><b>Our Story</b></Typography>
          <Typography variant="h6" fontWeight="400" align='left' sx={{ mt: { xs: 3, sm: 3 } , mb: { xs: 6, sm: 6 }}}>
            Our mission is to eliminate the stress and uncertainty of travel planning by connecting travelers with our destination-based, DEDICATED travel specialists, who are COMMITTED to making dream trips a reality. It is like having your own personal matchmaker at your disposal; all users need to do is select their next travel destination and leave the rest to our elite travel planners. As our tagline suggests, “Stress Less, Dream More."
          </Typography>
          <Typography variant="h3" fontStyle= "italic" align="left" lineHeight={1.3} sx={{ pr: { xs: 3, sm: 20 }  , mb: { xs: 8, sm: 6 }}}>We will use the power of technology & innovation to provide travelers with the most valuable & MEMORABLE travel experiences around the world.</Typography>
        </Grid> */}

        <Grid item xs={12}>
        <Typography variant="h2"  fontWeight="300" align="left" sx={{ py: 1,  mt: { xs: -3, sm: -9 } , mb: { xs: 8, sm: 3 } ,  textAlign:{ xs: "center" , sm: "left" }}} color="primary.contrastText"><b>Meet Our Founders</b></Typography>
        </Grid>

        {Team.map((teamMember) => (
          <Grid item xs={12} sm={6} md={4} key={teamMember.id} align='center' sx={{  mt: { xs: 1, sm: 7 }  }} >
            <Box p={2}>
              <Avatar alt={teamMember.alt} src={teamMember.img} sx={{ height: 150, width: 150 ,  mt: { xs: -5, sm: -7 } , mb: { xs: 8, sm: 3 } }}/>
              <Typography align='center' variant="h6" sx={{ mt: { xs: -5, sm: 1 } }}>{teamMember.name}</Typography>
              <Typography align='center' variant="body1" color="secondary.main" sx={{ mt: { xs: 1, sm: 1 } }}>{teamMember.title}</Typography>
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