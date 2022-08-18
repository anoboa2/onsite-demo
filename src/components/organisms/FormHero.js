import { useState, useRef } from 'react';
import { Box, Button, Container, Typography } from '@mui/material'
import SpecialistForm from './SpecialistForm';
import SpecialistResult from './SpecialistResult';
import '@typeform/embed/build/css/widget.css'

const heroStyle = {
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  p: 5,
  m: 0,
  backgroundImage: 'url(/img/HeroImage.webp)',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
}

const formStyle = {
  width: 800,
  height: 400
}

const FormHero = () => {

  return (
    <Box sx={heroStyle}>
      <Container sx={{ my: 10 }}>
        <Box sx={{ pl: 10 }}>
        <Typography variant="h2" color="secondary.main" align='left' sx={{ mb: 2 }}>Kick back and relax<br />We will do the planning</Typography>
        <Typography variant="subtitle1" align='left'>Local travel specialists are standing by to plan your trip of a lifetime</Typography>
        </Box>
        <SpecialistForm />
      </Container>
    </Box>
  );
}

export default FormHero;