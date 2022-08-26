import { Box, Container, Typography , Grid} from '@mui/material';

const AboutHero = () => {
    return (
      <div>
      <Container sx={{ width: { xs: "80%", sm: "50%" }, my: { xs: 0, sm: 10 } , mt: { xs: 12, sm: 14 } , mb: { xs: -8, sm: -8 }}}>
        <Typography variant="h1"  fontWeight="300" align="center" sx={{ py: 1}} color="primary.contrastText">We are <b>Onsite.</b></Typography>
         <Typography variant="h2" fontWeight="300" fontStyle= "italic" align="center" color="secondary.dark" sx={{ py: 1}}>Stress Less, Dream More.</Typography>
         <Container sx={{ mt: { xs: 8, sm: 10 } , mb: { xs: 8, sm: 10 }  , justifyContent:'center', ml: { xs: -18, sm: -33 } }}>
          <img 
          src='/img/content/About-2.jpg' 
          style={{
            height:"auto" ,
            maxWidth:"180%",
            align: "center",
          }}
          />
       </Container>
      </Container>

      <Grid container spacing={3} sx={{ px: { xs: 3, sm: "20%" }, py: 5, mb: 10, overflow: "hidden" }}>
        <Grid item xs={12}>
        <Typography variant="h2"  fontWeight="300" align="left" sx={{ py: 1}} color="primary.contrastText"><b>Our Story</b></Typography>
          <Typography variant="h6" fontWeight="400" align='left' sx={{ mt: { xs: 3, sm: 3 } , mb: { xs: 6, sm: 6 }}}>
            Our mission is to eliminate the stress and uncertainty of travel planning by connecting travelers with our destination-based, DEDICATED travel specialists, who are COMMITTED to making dream trips a reality. It is like having your own personal matchmaker at your disposal; all users need to do is select their next travel destination and leave the rest to our elite travel planners. As our tagline suggests, “Stress Less, Dream More."
          </Typography>
          <Typography variant="h3" fontStyle= "italic" align="left" lineHeight={1.3} sx={{ pr: { xs: 3, sm: 20 }  , mb: { xs: 8, sm: -2 }}}>We will use the power of technology & innovation to provide travelers with the most valuable & MEMORABLE travel experiences around the world.</Typography>
        </Grid>
      </Grid>

      <Container sx={{ width: { xs: "80%", sm: "50%" }, my: { xs: 0, sm: 10 } , mt: { xs: -12, sm: 5 } , mb: { xs: -8, sm: -8 }}}>
         <Container sx={{ mt: { xs: 8, sm: 10 } , mb: { xs: 8, sm: 10 }  , justifyContent:'center', ml: { xs: -18, sm: -33 } }}>
          <img 
          src='/img/content/About-3.jpg' 
          style={{
            height:"auto" ,
            maxWidth:"180%",
            align: "center",
          }}
          />
       </Container>
      </Container>
      
      </div> 
      
    
    );
}

export default AboutHero;