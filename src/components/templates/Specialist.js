import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ProfileCard from '../molecules/ProfileCard';

const Specialist = () => {
  const { id } = useParams();
  const [specialist, setSpecialist] = useState([]);

  useEffect(() => {
    const getProfile = async () => {
      const response = await fetch(`https://hmou3ha9b1.execute-api.us-east-1.amazonaws.com/v1/planning/getambassador?id=${id}`);
      const json = await response.json();
      console.log('json:', json);
      setSpecialist(json);
    }
    getProfile();
    console.log('specialist state is', specialist);
  } , [id]);

  return (
    <Grid container spacing={2} sx={{ m: 10, display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
      <Grid item xs={12}>
        {specialist.map(({ id, image_url, first_name, last_name, bio, primary_socials }) => (
          <ProfileCard
            key={id}
            content={{
              name: `${first_name} ${last_name}`,
              image_url: image_url,
              bio: bio,
              id: id,
              socials: primary_socials
            }}
          />
        ))}
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ width: '80%' }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h4" align="left" gutterBottom>
                  Favorite place I've traveled
                </Typography>
                <Typography variant="body1" align="left">
                  {specialist.favorite_destination && specialist.favorite_destination}
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h3">
                  Travel tips from {specialist.first_name}
                </Typography>
                <Box>
                  <Box component="ul">
                    {specialist.tips && specialist.tips.map(tip => (
                      <Box component="li" key={tip}>
                        <Typography variant="subtitle1">{tip}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Specialist; 