import { Grid, Typography , Box } from "@mui/material";
import PopularCountryCard from '../molecules/PopularCountryCard';
import CountryOffered from '../../content/CountryOffered';

const PopularItinerariesCountry = () => {

  return (
    <Grid container spacing={3} sx={{ px: { xs: 3, sm: "20%" }, py:2, mb: 10, overflow: "hidden" }}>
      <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", mb: 5 }}>
        <Typography variant="h2" align="center" fontWeight="300" sx={{ pb: 1 }} >Popular <b>Italy</b> Itineraries</Typography>
        {/* <Typography variant="subtitle1" align="center" color="text.primary" >Your specialist will plan your trip from start to finish</Typography> */}
      </Grid>
      {CountryOffered.map((country, index) => (
        <Grid item xs={12} sm={4} key={index} sx={{ display: "flex", justifyContent: "center"}}>
          <PopularCountryCard {...country} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PopularItinerariesCountry;