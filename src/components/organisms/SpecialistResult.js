import { Avatar, Grid, Typography } from '@mui/material';

const formStyle = {
  backgroundColor: 'rgba(33, 195, 126, 0.13)',
  borderRadius: '10px',
  width: '80%',
  minWidth: '500px',
  mx: 'auto',
  my: 10,
  p: 7,
  boxShadow: "12px 12px 45px rgba(0,0,0,.1)"
}

const SpecialistResult = () => {
  
  return (
    <Grid container spacing={2} sx={formStyle}>
      <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar alt='Izanna' src='https://onsite-images-1xo7eac.s3.amazonaws.com/profile/izanna.lev/profile.jpeg' sx={{ height: 200, width: 200 }}/>
        <Typography variant='h6'>Izanna L.</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant='body1'>We have matched you with Izanna</Typography>
        <Typography variant='body1'>She will reach out to you shortly to start planning your upcoming trip.  If you have any questions in the meantime you may contact them at:</Typography>
        <Typography variant='body1'>+1(844)200-8332</Typography>
        <Typography variant='body1'>izanna.lev@onsiteplanning.com</Typography>
      </Grid>
    </Grid>
  );
}

export default SpecialistResult;