import { Box, Grid, Typography } from '@mui/material';
import BasePage from '../components/templates/BasePage';

const ComingSoon = () => {
    return (
      <BasePage>
        <Grid container spacing={3} sx={{ px: { xs: 3, sm: "20%" }, py: 5, mb: 10, mt: { xs: 5, sm: 3 }, overflow: "hidden" }}>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h3">
              NEW PAGE!!! <Box component="span" sx={{ color: '#0FAACD' }}>Coming Soon</Box>
            </Typography>
            <Typography fontWeight={300} variant="h5" sx={{mt: 4}} style={{ textAlign: "justify" }}>
                Something Big is Coming Your Way.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
                component="img"
                src="/img/Under construction.png"
                alt="Coming Soon"
                sx={{ height: { xs: 400, sm: 600 }, width: { xs: 370, sm: 600 } }}
            />
          </Grid>
        </Grid>
      </BasePage>
    );
}

export default ComingSoon;