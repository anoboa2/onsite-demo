import { Container, Typography } from '@mui/material';

const FAQHero = () => {
    return (
      
      <Container sx={{ width: { xs: "80%", sm: "50%" }, my: { xs: 0, sm: 10 } , mt: { xs: 20, sm: 20 } , mb: { xs: -8, sm: -8 }}}>
        <Typography variant="h1" align="center" sx={{ py: 1 }} color="#0FAACD">FAQ's</Typography>
        {/* <Typography variant="subtitle1" align="left" sx={{ py: 1}}>Travelers , Specialists and About Onsite.</Typography> */}
      </Container>
    
    );
}

export default FAQHero;