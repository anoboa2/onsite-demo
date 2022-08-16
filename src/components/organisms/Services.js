import { Grid, Typography } from "@mui/material";
import ServiceCard from '../molecules/ServiceCard';
import ServicesOffered from '../../content/ServicesOffered';

const Services = () => {

  return (
    <Grid container spacing={3} sx={{ px: {xs: 3, sm: "20%" }, py: 5, mb: 10, overflow: "hidden" }}>
      <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", mb: 5 }}>
        <Typography variant="h2" align="center" sx={{ pb: 1 }}>We arrange the best</Typography>
        <Typography variant="subtitle1" align="center">Your specialist will plan your trip from start to finish</Typography>
      </Grid>
      {ServicesOffered.map((service, index) => (
        <Grid item xs={12} sm={6} key={index} sx={{ display: "flex", justifyContent: "center" }}>
          <ServiceCard {...service} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Services;