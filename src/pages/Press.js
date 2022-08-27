import { Box, Grid, Link, Typography } from '@mui/material';
import NavBar from '../components/organisms/NavBar';
import Footer from '../components/organisms/Footer';
import PressLinks from '../content/PressLinks';
import Banner from '../components/molecules/Banner';
import SubscribeEmailBanner from '../content/SubscribeEmailBanner';

const Press = () => {
  return (
    <>
      <NavBar />
      <Grid container spacing={3} sx={{ my: 5, pb: 5 }}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center" gutterBottom>
            Press
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            The team at Onsite strives to create the best experiences in the travel space.<br />
            Check out some places were our hard work has been recognized.
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mx: '10%', display: 'flex', flexDirection: 'column' }}>
          {PressLinks.map((press) => (
            <Box component="div" key={press.order} sx={{ my: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="body1" align="left">{press.publication} | {press.date}</Typography>
              <Link href={press.link} target="_blank" rel="noopener noreferrer" variant="body1" sx={{ py: 1 }}>{press.title}</Link>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" sx={{ py: 1 }}>
            Inquiries
          </Typography>
          <Typography variant="subtitle1" align="center" sx={{ py: 1}}>
            For all media inquires, please contact Hardeep Singh<br />
            <Link href="mailto:hardeep@onsiteplanning.com">hardeep@onsiteplanning.com</Link>
          </Typography>
        </Grid>
      </Grid>
      <Banner content={SubscribeEmailBanner}/>
      <Footer />
    </>
  )
}

export default Press; 