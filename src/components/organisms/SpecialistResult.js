import { useEffect, useState } from 'react';
import { Avatar, Grid, Typography } from '@mui/material';

const formStyle = {
  backgroundColor: 'rgba(33, 195, 126, 0.13)',
  borderRadius: '10px',
  width: '80%',
  minWidth: '350px',
  mx: 'auto',
  my: 10,
  p: 7,
  boxShadow: "12px 12px 45px rgba(0,0,0,.1)"
}

const SpecialistResult = () => {
  const [values, setValues] = useState({
    profile_image: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/izanna.lev/profile.jpeg',
    first_name: 'Izanna',
    last_name: 'Levintova',
    email: 'izanna.lev@onsiteplanning.com'
  });


  // get query parameter called destination
  const urlParams = new URLSearchParams(window.location.search);
  const destination = urlParams.get('destination');

  // useeffect to check if the destination equals 'Bali' and if so, set the values to the bali specialist
  useEffect(() => {
    if (destination === 'Bali') {
      setValues({
        profile_image: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/alyssaandthecity/profile.jpeg',
        first_name: 'Alyssa',
        last_name: 'Chlebek',
        email: 'info@onsiteplanning.com'
      })
    }
  }, [destination])

  return (
    <Grid sx={{  justifyContent: 'center', alignContent: 'center', mb: {xs: -18 , sm: 13}}}>
      <Grid container spacing={2} sx={formStyle}>
        <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar alt='Izanna' src={values.profile_image} sx={{ height: 200, width: 200 }}/><br/>
          <Typography variant='h6' color="primary.main"><b>{values.first_name} {values.last_name[0]}.</b></Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='body1' ><b>We have matched you with {values.first_name}</b></Typography> <br/>
          <Typography variant='body1'>She will reach out to you shortly to start planning your upcoming trip.  If you have any questions in the meantime you may contact them at:</Typography><br/>
          <Typography variant='body1' href="+1(844)200-8332">+1(844)200-8332</Typography>
          <Typography variant='body1'>{values.email}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SpecialistResult;