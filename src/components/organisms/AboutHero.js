import { Box, Typography } from '@mui/material';

const AboutHero = () => {
    return (
      <Box component="div" sx={{ display: 'block', width: "80%", mt: 10, mx: 'auto' }}>
        <Typography variant="h2" fontStyle= "italic" align="center" color="secondary.dark">Stress Less, Dream More.</Typography>
        <Box component="img" src='/img/content/About-2.jpg' sx={{ display: 'block', height: "90%", width: "90%", mt: { xs: 8, sm: 10 }, mb: { xs: 8, sm: 10 }, mx: 'auto' }}/>
        <Box component="div" sx={{ display: 'block', width: '80%', mx: 'auto', py: 3 }}>
          <Typography variant="h2"  fontWeight="300" align="left" sx={{ py: 1}} color="primary.contrastText"><b>Our Story</b></Typography>
          <Typography variant="body1" fontWeight="400" align='left' sx={{ mt: { xs: 3, sm: 3 } , mb: { xs: 6, sm: 6 }}}>
            Our mission is to eliminate the stress and uncertainty of travel planning by connecting travelers with our destination-based, dedicated travel specialists who are committed to making dream trips become a reality. It is like having your own personal matchmaker at your disposal; all users need to do is select their next travel destination and leave the rest to our elite travel planners.
          </Typography>
        </Box>
        <Box component="img" src='/img/content/About-3.jpg' sx={{ display: 'block', height: "90%", width: "90%", mt: { xs: 8, sm: 10 }, mb: { xs: 8, sm: 10 }, mx: 'auto' }}/>
      </Box>
    );
}

export default AboutHero;