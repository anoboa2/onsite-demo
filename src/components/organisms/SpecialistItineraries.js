import { useEffect, useState } from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ItineraryCard from '../molecules/ItineraryCard';

const SpecialistItineraries = ( id ) => {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    const getItineraries = async () => {
      const response = await fetch(`https://hmou3ha9b1.execute-api.us-east-1.amazonaws.com/v1/planning/getItineraries?author=${id}`);
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
        {itineraries.map((itinerary) => (
          <Grid item xs={12}>
            <ItineraryCard content={itinerary} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default SpecialistItineraries;