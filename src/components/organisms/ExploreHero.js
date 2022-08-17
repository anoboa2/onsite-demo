import { useState } from 'react';
import { Autocomplete, Box, Grid, Typography } from '@mui/material';

const ExploreHero = () => {
  return (
    <Grid container spacing={2} sx={{ mt: 10 }}>
      <Grid item xs={12}>
        <Typography variant="h6">
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box p={2}>
          <Autocomplete />
        </Box>
      </Grid>
    </Grid>
  );
}

export default ExploreHero;