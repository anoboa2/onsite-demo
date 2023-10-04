import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import ServiceCard from '../molecules/ServiceCard';
import ServicesOffered from '../../content/ServicesOffered';

const Services = () => {

  return (
    <Box component="div" sx={{ py: 5, mb: 10, overflow: "hidden" }}>
      <Box component="div" sx={{ display: 'block', mb: 10, mx: 'auto' }}>
        <Typography variant="h2" align="center" fontWeight="300" sx={{ pb: 1 }} color="primary.main">We arrange the <Box component="span" sx={{ color:"#0FAACD"}} ><b>best</b></Box></Typography>
        <Typography variant="subtitle1" align="center" color="text.primary">Your specialist will plan your trip from start to finish</Typography>
      </Box>
      <Grid container spacing={4} sx={{ maxWidth: '1100px', mx: 'auto' }}>
      {ServicesOffered.map((service, index) => (
        <Grid xs={12} sm={6} key={index} sx={{ display: "flex", justifyContent: "center"}}>
          <ServiceCard {...service} />
        </Grid>
      ))}
      </Grid>
    </Box>
  );
}

export default Services;