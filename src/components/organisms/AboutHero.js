import { Box, Container, Typography } from '@mui/material';

const AboutHero = () => {
    return (
      
      <Container sx={{ width: { xs: "80%", sm: "50%" }, my: { xs: 0, sm: 10 } , mt: { xs: 20, sm: 20 } , mb: { xs: -8, sm: -8 }}}>
        <Typography variant="h1"  fontWeight="300" align="center" sx={{ py: 1}} color="primary.contrastText">We are <b>Onsite.</b></Typography>
         <Typography variant="h1" fontWeight="300" fontStyle= "italic" align="center" sx={{ py: 1}}>Stress Less, Dream More.</Typography>
         <Container sx={{ mt: { xs: 8, sm: 10 } , mb: { xs: 8, sm: 10 }  , justifyContent:'center', ml: { xs: -11, sm: -33 } }}>
          <img 
          src='/img/content/About-2.jpg' 
          style={{
            height:"auto" ,
            maxWidth:"180%",
            align: "center",
          }}
          />
      </Container>
      <Typography variant="h3" fontWeight="400" align='center'  lineHeight= "1.4">
            "Our mission is to eliminate the stress and uncertainty of travel planning by connecting travelers with our destination-based, DEDICATED travel specialists, who are COMMITTED to making dream trips a reality. It is like having your own personal matchmaker at your disposal; all users need to do is select their next travel destination and leave the rest to our elite travel planners."
          </Typography>
          <Container sx={{ mt: { xs: 8, sm: 10 } , mb: { xs: 8, sm: 10 }  , justifyContent:'center', ml: { xs: -11, sm: -33 } }}>
          <img 
          src='/img/content/About-1.jpg' 
          style={{
            height:"auto" ,
            maxWidth:"180%",
            align: "center",
          }}
          />
      </Container>
      </Container>
    
    );
}

export default AboutHero;