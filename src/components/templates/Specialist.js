import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import ProfileCard from '../molecules/ProfileCard';
import ItineraryCard from '../molecules/ItineraryCard';
import SpecialistHero from '../organisms/SpecialistHero';

const Specialist = () => {
  const { id } = useParams();
  const [ specialist, setSpecialist ] = useState([]);
  const [ itineraries, setItineraries ] = useState([]);

  useEffect(() => {
    const getProfile = async () => {
      const response = await fetch(`https://hmou3ha9b1.execute-api.us-east-1.amazonaws.com/v1/planning/getambassador?id=${id}`);
      const json = await response.json();
      console.log('json:', json);
      setSpecialist(json);
    }
    getProfile();
  } , [id]);

  useEffect(() => {
    const getItineraries = async () => {
      const response = await fetch(`https://hmou3ha9b1.execute-api.us-east-1.amazonaws.com/v1/planning/getitineraries?author=${id}`);
      const json = await response.json();
      console.log('json:', json);
      setItineraries(json);
    }
    getItineraries();
  } , [id]);

  return (
    <>
      <Box sx={{ m: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', justifyItems: 'center', alignItems: 'center' }}>
      
        {specialist.map(specialist => (
          <>
          <SpecialistHero content={specialist}/>
            <ProfileCard content={specialist} />
            <Box sx={{ m: {xs: 2, sm: 5, md: 10}, py: 5, borderStyle: 'solid none', borderColor: 'rgba(0,0,0,0.3)', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
              <Grid container spacing={2} sx={{ mx: {xs: 1, sm: 2, md: 5} }}>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="h3" align="left" gutterBottom>
                    Favorite place I've traveled
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    {specialist.favorite_destination}
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="h3">
                    Travel tips from {specialist.first_name}
                  </Typography>
                  <Box>
                    <Box component="ul">
                      {specialist.tips && specialist.tips.map(tip => (
                        <Box component="li" key={tip}>
                          <Typography variant="body1">{tip}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </>
        ))}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" align="left" gutterBottom>
              Recent Itineraries
            </Typography>
          </Grid>
            {itineraries.map(itinerary => (
              <Grid item sm={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <ItineraryCard content={itinerary} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  )
}

export default Specialist; 