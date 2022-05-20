import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://onsiteplanning.com/">
        Onsite Inc.
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  borderRadius: "10px",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'secondary.light',
  mr: 1,
  '&:hover': {
    bgcolor: "#0FAACD",
  },
};


export default function AppFooter() { 
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'neutral.main' }}
    >
      <Container sx={{ my: 8, display: 'flex', flexDirection: "column", justifyContent: "flex-end"}}>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={5}>
          <Grid item xs={4}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="https://www.facebook.com/OnsiteTravelPlanning/" sx={iconStyle}>
                  <img
                    src="/icon/facebook.png"
                    alt="Facebook"
                    height={30}
                  />
                </Box>
                <Box component="a" href="https://twitter.com/OnsiteTravelApp" sx={iconStyle}>
                  <img
                    src="/icon/twitter.png"
                    alt="Twitter"
                    height={30}
                  />
                </Box>
                <Box component="a" href="https://instagram.com/Onsitetravelapp" sx={iconStyle}>
                  <img
                    src="/icon/instagram.png"
                    alt="Instagram"
                    height={30}
                  />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/terms/" sx={{ color: 'text.primary' }}>Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/privacy/" sx={{ color: 'text.primary' }}>Privacy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Contact Us
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Typography>info@onsiteplanning.com</Typography>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Typography>+1 (844) 200-8332</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

      </Container>
    </Typography>
  );
}
