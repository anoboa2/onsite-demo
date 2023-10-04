import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import SpecialistItineraryCard from '../molecules/SpecialistItineraryCard';
import CountryOffered from '../../content/CountryOffered';

const DestinationItineraries = () => {
  return (
    <Box component="div" sx={{ display: 'block', width: '100%' }}>
      <Typography variant="h2" align="center" sx={{ my: 4 }}>Popular <b>Italy</b> Itineraries</Typography>
      <Grid container sx={{ display: 'flex', mt: 8, justifyContent: 'start' }}>
      {CountryOffered.map((country, index) => (
        <Grid xs={12} sm={4} key={index} sx={{ display: "flex", justifyContent: "center"}}>
          <SpecialistItineraryCard {...country} />
        </Grid>
      ))}
      </Grid>
    </Box>
  );
}

export default DestinationItineraries;