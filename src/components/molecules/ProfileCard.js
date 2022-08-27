import { Box, Grid, Typography } from '@mui/material';
import SpecialistSocials from './SpecialistSocials';

const ProfileCard = ({ content }) => {
  const { first_name, last_name, bio, id, image_url, primary_socials  } = content;

  return (
    <Box key={id} sx={{ width: {sm: '80%', md: 1000}, border: 'solid rgba(0, 0, 0, 0.3)' }}>
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item sm={12} md={6} sx={{ display: 'flex', justifyContent: 'start' }}>
          <Box component="img" src={image_url} sx={{ height: 500, width: 500, objectFit: 'cover' }}/>
        </Grid>
        <Grid item sm={12} md={6} sx={{ px: 5, display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
          <Box sx={{ py: 1 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>{first_name} {last_name}</Typography>
            <SpecialistSocials socials={primary_socials}/>
          </Box>
          <Box sx={{ py: 1 }}>
            <Typography variant="h6" gutterBottom>About</Typography>
            <Typography variant="body1">{bio}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfileCard;