import { Box, Container, Typography } from '@mui/material';

const FAQHero = ({ details }) => {

    return (
      <Box sx={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', p: {xs: "150px 0px", sm: 5 }, m: 0, backgroundImage: 'url(/img/HeroImage.webp)', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
      <Container sx={{ width: { xs: "80%", sm: "50%" }, my: { xs: 2, sm: 10 }, mr: { xs: 'auto', sm: "33vw" } }}>
        <Typography variant="h2" align="left" sx={{ py: 1 }}>FAQ's</Typography>
        <Typography variant="subtitle1" align="left" sx={{ py: 1}}>Travelers , Specialists and About Onsite.</Typography>
      </Container>
    </Box>
    );
}

export default FAQHero;