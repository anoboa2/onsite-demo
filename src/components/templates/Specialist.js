import { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ProfileCard from '../molecules/ProfileCard';
import ItineraryCard from '../molecules/ItineraryCard';

const Specialist = () => {
  const { id } = useParams();
  const [specialist, setSpecialist] = useState([]);
  const [itineraries, setItineraries] = useState([]);

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

  useEffect(() => {
    console.log('itineraries:', itineraries);
  } , [itineraries]);

  return (
    <>
        <Grid container spacing={2} sx={{ m: 10, display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
          {specialist.map(specialist => (
            <>
              <Grid item xs={12}>
                <ProfileCard content={specialist} />
              </Grid>
              <Grid item xs={12}>
                <Card sx={{ width: '80%' }}>
                  <CardContent>
                    <Grid container spacing={2}>
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
                  </CardContent>
                </Card>
              </Grid>
            </>
          ))}
          <Grid container item xs={12}>
            <Typography variant="h3" align="left" gutterBottom>
              Recent Itineraries
            </Typography>
          <Grid container item spacing={3} xs={12} sx={{ display: 'flex', flexDirection: 'row' }}>
              {itineraries.map(itinerary => (
                <Grid item xs={3}>
                  <ItineraryCard content={itinerary} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
    </>
  )
}

export default Specialist; 