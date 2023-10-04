import { Box, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import SocialStack from '../molecules/SocialStack';

const Footer = () => {
  return (
    <Box component="div" sx={{ display: 'block' }}>
    <Grid container spacing={3} sx={{ display: 'flex', width: "95%", maxWidth: '90vw', overflow: 'hidden', alignItems: 'center', justifyItems: 'center', mx: 'auto', my: 3 }}>
      <Grid xs={12} sm={3} order={{ xs: 3, sm: 1 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SocialStack />
        <Typography variant='body1' sx={{ pt: 1 }}>
          © <Link color="inherit" href="https://onsiteplanning.com/">Onsite Inc.</Link> 2022
        </Typography>
      </Grid>
      <Grid xs={6} sm={3} order={{ xs: 1, sm: 2 }} sx={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
        <Typography variant="h6" align="left" gutterBottom>
          Company
        </Typography>
        <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
          <Box component="li" sx={{ display: 'block', p: 0.5, }}>
            <Link href="/aboutus" variant="subtitle1" color="text.primary" underline="hover">About</Link>
          </Box>
          <Box component="li" sx={{ p: 0.5 }}>
            <Link href="https://blog.onsiteplanning.com/" variant="subtitle1" color="text.primary" underline="hover">Blog</Link>
          </Box>
          <Box component="li" sx={{ p: 0.5 }}>
            <Link href="/press" variant="subtitle1" color="text.primary" underline="hover">Press</Link>
          </Box>
          <Box component="li" sx={{ p: 0.5 }}>
            <Link href="https://wefunder.com/onsiteplanning/" variant="subtitle1" color="text.primary" underline="hover">Investors</Link>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} sm={3} order={{ xs: 1, sm: 2 }} sx={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
        <Typography variant="h6" marked="left" gutterBottom>
          Support
        </Typography>
        <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0, justifyItems: 'end' }}>
          <Box component="li" sx={{ py: 0.5 }}>
            <Link href="/faq" variant="subtitle1" color="text.primary" underline="hover">FAQ</Link>
          </Box>
          <Box component="li" sx={{ py: 0.5 }}>
            <Link href="/terms" variant="subtitle1" color="text.primary" underline="hover">Terms</Link>
          </Box>
          <Box component="li" sx={{ py: 0.5 }}>
            <Link href="/privacy" variant="subtitle1" color="text.primary" underline="hover">Privacy</Link>
          </Box>
          <Box component="li" sx={{ py: 0.5 }}>
            <Box component="div" sx={{ height: 20 }} />
          </Box>
        </Box>
      </Grid>
      <Grid xs={12} sm={3} order={{ xs: 4, sm: 4 }} sx={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
        <Typography variant="h6" marked="left" gutterBottom sx={{ display: { xs: 'none', sm: 'block' }}}>
          Contact Us
        </Typography>
        <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
          <Box component="li" sx={{ py: 0.5 }}>
            <Typography color="text.primary">info@onsiteplanning.com</Typography>
          </Box>
          <Box component="li" sx={{ py: 0.5 }}>
            <Typography color="text.primary">+1 (844) 200-8332</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
    </Box>
  );
}

export default Footer;