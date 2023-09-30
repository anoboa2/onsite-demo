import { Box, Container, Typography } from '@mui/material'
import SpecialistForm from './SpecialistForm';

const FormHero = () => {
  return (
    <Box >
      <Container sx={{ my: 10 }}>
        <Box sx={{ pt: {xs: 5, sm: 5}, pl: { xs: 0, sm: 10 } }} >
        <Typography variant="h2" color="secondary.main" align='left' sx={{ mb: 2 }}>Kick back and relax.  We'll do the planning.</Typography>
        <Typography variant="subtitle1" align='left' color="text.primary">Let us know how we can plan your trip of a lifetime</Typography>
        </Box>
        <SpecialistForm />
      </Container>
    </Box>
  );
}

export default FormHero;