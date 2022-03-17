import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';

// Update with new waitlist

function ProductCTA() {

  const handleClick = () => {
    window.scrollTo({top: 250, left: 0, behavior: 'smooth' });
  };


  return (
    <Container component="section" sx={{ my: 10, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'warning.main',
              py: 8,
              px: 3,
            }}
          >
            <Box sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom>
                Ready to book your trip?
              </Typography>
              <Typography variant="h5">
                Your next trip is only a few clicks away!
              </Typography>
              <Button
                color="secondary"
                variant="contained"
                onClick={handleClick}
                sx={{ width: '100%', mt: 2 }}
              >
                Lets Go!
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(/img/productCTAImageDots.png)',
            }}
          />
          <Box
            component="img"
            src="/img/atrium_cropped.jpg"
            alt="airplane flying over city"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
              maxHeight: 400,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductCTA;
