import { Box, Grid, Typography } from '@mui/material';
import SpecialistSocials from './SpecialistSocials';

const ProfileCard = ({ content }) => {
  const { first_name, last_name, bio, id, image_url, primary_socials  } = content;

  return (
    <Box key={id} sx={{ width: {sm: '80%' , xs: "170%"},  mb: {xs: 5, sm: -5},  border: 'solid rgba(0, 0, 0, 0.3)' }}>
      <Grid container  sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid item sm={12} md={6} sx={{ px: 5, display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
          <Box sx={{ py: 1 }}>
          <Typography variant="subtitle1" color="secondary.main" sx={{ mb:{xs: 3, sm: 1} , mt:{xs: 3, sm:-1} }} gutterBottom>Specialist</Typography>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 , mb:{xs: 4, sm: 4} }}>{first_name} {last_name}</Typography>
            <SpecialistSocials sx={{ mb:{xs: 2, sm: 2} }}socials={primary_socials}/>
          </Box>
          <Box sx={{ py: 2 }}>
            <Typography variant="h6" sx={{ mb:{xs: 3, sm: 3} }} gutterBottom>Why {first_name} travel plans are worth it?</Typography>
            <Typography fontWeight={300} variant="body1">{bio}</Typography>
          </Box>
        </Grid>
        <Grid item sm={12} md={6} sx={{ display: 'flex', justifyContent: 'end', mt:{xs: 3, sm: -0}}}>
          <Box component="img" src={image_url} sx={{ objectFit: 'cover' , width: {xs: 365 , sm: 500} , height:{xs: 365 , sm: 500}}}/>
        </Grid>
       
      </Grid>
    </Box>
  );
}

export default ProfileCard;