import { Box, Grid, Link, Typography } from '@mui/material';
import SocialStack from '../molecules/SocialStack';

const Footer = () => {
  return (

        <Grid container spacing={3} sx={{ backgroundColor: '#E0F2F1', m: 0, px: "10%", pt: 5, alignContent: 'center', justifyContent: 'center' }}>
          <Grid item xs={12} sm={3} order={{ xs: 3, sm: 1 }} sx={{ display: "flex", flexDirection: "column", alignContent: 'center', justifyContent: 'center', p: { xs: 2, sm: 10 } }}>
            <SocialStack />
            <Typography variant='body1' sx={{ pt: 1 }}>
              © <Link color="inherit" href="https://onsiteplanning.com/">Onsite Inc.</Link> 2022
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} order={{ xs: 1, sm: 2 }} sx={{ display: "flex", flexDirection: "column", alignContent: 'center', p: { xs: 2, sm: 10 } }}>
            <Typography variant="h6" marked="left" gutterBottom>
              Company
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ p: 0.5 }}>
                <Link href="/aboutus" variant="subtitle1" color="text.primary" underline="hover">About</Link>
              </Box>
              <Box component="li" sx={{ p: 0.5 }}>
                <Link href="https://blog.onsiteplanning.com/" variant="subtitle1" color="text.primary" underline="hover">Blog</Link>
              </Box>
              <Box component="li" sx={{ p: 0.5 }}>
                <Link href="/blog" variant="subtitle1" color="text.primary" underline="hover">Press</Link>
              </Box>
              <Box component="li" sx={{ p: 0.5 }}>
                <Link href="/blog" variant="subtitle1" color="text.primary" underline="hover">Investors</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} order={{ xs: 2, sm: 3 }} sx={{ display: "flex", flexDirection: "column", alignContent: 'start', p: { xs: 2, sm: 10 } }}>
            <Typography variant="h6" marked="left" gutterBottom>
              Support
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/faq" variant="subtitle1" color="text.primary" underline="hover">FAQ</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/terms" variant="subtitle1" color="text.primary" underline="hover">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/privacy" variant="subtitle1" color="text.primary" underline="hover">Privacy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} order={{ xs: 4, sm: 4 }} sx={{ display: "flex", flexDirection: "column", alignContent: "start" }}>
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
  );
}

export default Footer;