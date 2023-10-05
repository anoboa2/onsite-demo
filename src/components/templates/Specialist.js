import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Collapse, Container, Grid, Typography } from '@mui/material';
import ProfileCard from '../molecules/ProfileCard';
import ItineraryCard from '../molecules/ItineraryCard';


const Specialist = () => {
  const { id } = useParams();
  const [ specialist, setSpecialist ] = useState([]);
  const [ itineraries, setItineraries ] = useState([]);
  const [ expand, setExpand ] = useState(false);

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
      <Box sx={{ m: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', justifyItems: 'center', alignItems: 'center' }}>
        {specialist.map(specialist => (
          <>
            <Box component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h2" align='center' sx={{ my: 3 }}>
                Meet <Box component="span" sx={{ color:"primary.main"}}><b>{specialist.first_name}</b></Box>
              </Typography>
            </Box>
            <ProfileCard content={specialist} />          
            <Box component="div" sx={{ display: 'flex', flexDirection: 'column', my: 5, py: 5, height: '100%', width: '80%', borderStyle: 'solid none', borderColor: 'rgba(0,0,0,0.3)' }}>
              <Box component="div" sx={{ display: 'block', flexDirection: 'column', width: '80%', mx: 'auto' }}>
                <Typography variant="h3" color="primary.main" gutterBottom>
                  Favorite place I've traveled
                </Typography>
                <Typography variant="subtitle1">
                  {specialist.favorite_destination}
                </Typography>
                <Typography variant="h3" color="primary.main">
                  Travel tips from {specialist.first_name}
                </Typography>
                <Collapse in={expand} collapsedSize={'320px'} orientation="vertical" sx={{ width: '100%', justifyContent: 'center', alignContent: 'center' }}>
                  <Box component="ul" >
                  {specialist.tips && specialist.tips.map(tip => (
                    <Box component="li" key={tip}>
                      <Typography variant="body1" paddingBottom={1} lineHeight={1.7}>{tip}</Typography>
                    </Box>
                  ))}
                  </Box>
                </Collapse>
                <Button variant="outlined" color="primary" onClick={() => setExpand(!expand)} sx={{ justifyContent: 'center', alignSelf: 'center', mt: 2 }}>
                  {expand ? 'Read Less' : 'Read More'}
                </Button>
              </Box>
            </Box>
            <Container>
              <Box component="div" sx={{ width: '100%', alignContent: 'center', justifyContent: 'center' }}>
                <Box component="div">
                  <Typography variant="h2" align='center'>
                    Recent Itineraries
                  </Typography>
                </Box>
                <Grid container spacing={2} sx={{ my: 5 }}>
                {itineraries.map(itinerary => (
                  <Grid key={itinerary.title} sm={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ItineraryCard content={itinerary} firstName={specialist.first_name}/>
                  </Grid>
                ))}
                </Grid>
              </Box>
            </Container>
          </>
        ))}
      </Box>
  )
}

export default Specialist; 