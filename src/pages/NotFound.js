import { Box, Grid, Typography } from '@mui/material';
import NavBar from '../components/organisms/NavBar';
import Footer from '../components/organisms/Footer';

const NotFound = () => {
    return (
      <>
        <NavBar />
          <Grid container spacing={3} sx={{ px: { xs: 3, sm: "20%" }, py: 5, mb: 10, mt: { xs: 10, sm: 10 }, overflow: "hidden" }}>
            <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h4">
                OOPS!!! <Box component="span" sx={{ color: '#0FAACD' }}>Page Not Found</Box>
              </Typography>
              <Typography fontWeight={300} variant="h5" sx={{mt: 4}} style={{ textAlign: "justify" }}>
                  Sorry, the page you are looking for could not be found.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                  component="img"
                  src="/img/Error404.png"
                  alt="404 page"
                  sx={{ height: { xs: 400, sm: 600 }, width: { xs: 370, sm: 600 } }}
              />
            </Grid>
          </Grid>
        <Footer />
      </>
    );
}

export default NotFound;