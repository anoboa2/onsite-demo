import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import ProfileCard from '../molecules/ProfileCard';
import ItineraryCard from '../molecules/ItineraryCard';
import SpecialistHero from '../organisms/SpecialistHero';
import ReactReadMoreReadLess from "react-read-more-read-less";
import { fontWeight } from '@mui/system';

const Specialist = () => {
  const { id } = useParams();
  const [ specialist, setSpecialist ] = useState([]);
  const [ itineraries, setItineraries ] = useState([]);
  const [ firstName, setFirstName ] = useState('');

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
    setFirstName(specialist.first_name);
  }, [specialist]);

  return (
    <>
      <Box sx={{ m: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', justifyItems: 'center', alignItems: 'center' }}>
      
        {specialist.map(specialist => (
          <>
            <SpecialistHero content={specialist} />
            <ProfileCard content={specialist} />
            <Box sx={{  m: {xs: 2, sm: 5, md: 18}, py: 5, borderStyle: 'solid none', borderColor: 'rgba(0,0,0,0.3)', display: 'flex', justifyContent: 'center', alignContent: 'center'  }}>
              <Grid container spacing={2} >
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' , mx: {md: 10}, paddingLeft:{xs: 0 , sm:0} , paddingRight:{xs: 0, sm:0} }}>
                  <Typography variant="h3" align="left" color="primary.main" gutterBottom>
                    Favorite place I've traveled
                  </Typography>
                  <Typography variant="subtitle1" align="left" fontWeight={300} >
                    {specialist.favorite_destination}
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' , mx: {md: 10}, mt: {sm: -63} , paddingLeft:{xs: 10 , sm:0} , paddingRight:{xs: 13, md:0} }}>
                  <Typography variant="h3" color="primary.main" sx={{mr:{xs:-8}}}  >
                    Travel tips from {specialist.first_name}
                  </Typography>
                  <Box sx={{ width: {sm: '85%' , xs: "170%"}, mb: {xs: 5, sm: -5}, justifyContent: 'center', alignContent: 'center', ml:{xs:-2, sm:7} , visibility:{xs:'hidden', sm: 'visible'}  }} >
                    <Box component="ul" >
                      {specialist.tips && specialist.tips.map(tip => (
                        <Box  component="li" key={tip} >
                          <Typography variant="body1" fontWeight={300} paddingBottom={1} lineHeight={1.7}>{tip}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Box sx={{ width: {xs: "170%"},  mb: {xs: 2}, mt: {xs: -205}, justifyContent: 'center', alignContent: 'center', ml:{xs:-2, sm:7} , visibility:{sm:'hidden', xs: 'visible'}  }} >
                    <Box component="ul" >
                      {specialist.tips && specialist.tips.map(tip => (
                        <Box component="li" key={tip} typography="body1" fontWeight={300} paddingBottom={1} lineHeight={1.2} >
                           <ReactReadMoreReadLess
                            charLimit={50}
                            readMoreText={"Read more +"}
                            readLessText={"Read less -"}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            
                            {tip}
                          </ReactReadMoreReadLess>
                          {/* <Typography variant="body1" fontWeight={300} paddingBottom={1} >{tip}</Typography> */}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Grid container spacing={4} sx={{ width: {xs: "185%" , sm: "100%"}, my: 10, px: { xs: 3, sm: "10%" } , alignContent: 'center', py: 5, mb: 10, mt: { xs: -8, sm: 72 }, mb:{xs: 7 , sm: 1} , justifyContent: 'center' }}>
              <Grid item xs={12}>
                <Typography variant="h2" fontWeight="300" align='center' sx={{ px: { xs: 2, sm: "20%" }, py: 5, mb:{xs: -2 , sm: -1}, ml: -5 , mr: -5, overflow: "hidden" }}>
                  Recent <Box component="span" sx={{ color:"primary.main"}} ><b>Itineraries</b></Box>
                </Typography>
              </Grid>
              {itineraries.map(itinerary => (
                <Grid item key={itinerary.title} sm={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <ItineraryCard content={itinerary} firstName={specialist.first_name}/>
                </Grid>
              ))}
            </Grid>
          </>
        ))}
      </Box>
    </>
  )
}

export default Specialist; 