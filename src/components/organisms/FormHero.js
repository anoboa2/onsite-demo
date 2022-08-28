import { Box, Container, Typography } from '@mui/material'
import SpecialistForm from './SpecialistForm';

// const heroStyle = {
//   height: '100%',
//   alignItems: 'center',
//   justifyContent: 'center',
//   textAlign: 'center',
//   py: 5,
//   px: { xs: 1, sm: 5 },
//   m: 0,
//   backgroundImage: 'url(/img/HeroImage.webp)',
//   backgroundSize: '100%',
//   backgroundRepeat: 'no-repeat',
// }

const FormHero = () => {
  return (
    <Box >
      <Container sx={{ my: 10 }}>
        <Box sx={{ pt: {xs: 5, sm: 5}, pl: { xs: 0, sm: 10 } }} >
        <Typography variant="h2" color="secondary.main" align='left' sx={{ mb: 2 }}>Kick back and relax<br />We will do the planning</Typography>
        <Typography variant="subtitle1" align='left' color="text.primary">Local travel specialists are standing by to plan your trip of a lifetime</Typography>
        </Box>
        <SpecialistForm />
      </Container>
    </Box>
  );
}

export default FormHero;