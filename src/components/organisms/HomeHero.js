import { Box, Button, Container, Link, Typography } from '@mui/material'

const HomeHero = () => {
  return (
    <Box sx={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', p: 5, m: 0, backgroundImage: 'url(/img/HeroImage.webp)', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
      <Container sx={{ width: "50vw", my: 10, mr: "33vw" }}>
        <Typography variant="h1" align="left" sx={{ py: 1 }}>We make the plans,<br />you make the memories</Typography>
        <Typography variant="subtitle1" align="left" sx={{ py: 1}}>Our local travel specialists will provide you with authentic recommendations, personalized itineraries, and insider tips</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Button variant="contained" color="primary" size="large" href="/match" sx={{ m: 2 }}>Match With A Travel Specialist</Button>
          <Link variant="button" underline="hover" href="/explore" sx={{ width: "300px" }}>Explore Itineraries</Link>
        </Box>
      </Container>
    </Box>
  );
}

export default HomeHero;