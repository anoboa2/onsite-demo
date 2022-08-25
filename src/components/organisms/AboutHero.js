import { Box, Container, Typography } from '@mui/material';

const AboutHero = () => {
    return (
      
      <Container sx={{ width: { xs: "80%", sm: "50%" }, my: { xs: 0, sm: 10 } , mt: { xs: 20, sm: 20 } , mb: { xs: -8, sm: -8 }}}>
        <Typography variant="h1"  fontWeight="300" align="center" sx={{ py: 1}} color="primary.contrastText">We are <b>Onsite.</b></Typography>
         <Typography variant="h1" fontWeight="300" fontStyle= "italic" align="center" sx={{ py: 1}}>Stress Less, Dream More.</Typography>
         <Container sx={{ mt: { xs: 8, sm: 10 } , mb: { xs: 8, sm: 10 }  , justifyContent:'center', ml: { xs: -7, sm: -16 } }}>
        <img 
        src='/img/content/franck-charles.JPG' 
        style={{
          height:"500px" ,
          width:"145%",
          maxWidth: '150%',
          verticalAlign: "center",
        }}
        />
      </Container>
      </Container>
    
    );
}

export default AboutHero;