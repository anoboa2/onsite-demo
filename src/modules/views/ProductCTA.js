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
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);

    let url = 'https://api.sheety.co/2d1a9568a9af9f0c5b478fb1e08bbbb7/waitlistRegistry/responses';
    let body = {
      response: {
        email: email,
        timestamp: new Date(Date.now()).toString(),
        },
    }
    fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then(json => {
      setSent(true);
      console.log(json.response);
    });
  };

  const handleClose = () => {
    setOpen(false);
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
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom>
                Join our waitlist
              </Typography>
              <Typography variant="h5">
                Onsite will be launching soon.  Stay up-to-date with the latest!
              </Typography>
              <TextField
                noBorder
                placeholder="Your email"
                variant="standard"
                sx={{ width: '100%', mt: 3, mb: 2 }}
              />
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ width: '100%' }}
              >
                Join Waitlist
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
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message="Thank you! We will send you updates on our latest releases and features."
      />
    </Container>
  );
}

export default ProductCTA;
