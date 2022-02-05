import * as React from 'react';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import WaitlistButton from './WaitlistButton';

const backgroundImage =
  'https://images.unsplash.com/photo-1415329343600-a53dd8daf392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
      Travel booking, reinvented
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Get the most out of your travel by leaving the planning to us
      </Typography>
      <WaitlistButton />
      {/* <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Personalized Trip Planning & Support
      </Typography> */}
    </ProductHeroLayout>
  );
}