import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import SpecialistSocials from './SpecialistSocials';

const ProfileCard = ({ content }) => {
  const { first_name, last_name, bio, id, image_url, primary_socials  } = content;

  return (
    <Box key={id} sx={{ display: 'block', maxWidth: { xs: '80%', sm: '60%' } }}>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <Grid sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box component="img" src={image_url} sx={{ objectFit: 'cover', width: { xs: 365 , sm: 500 } , height: { xs: 365 , sm: 500 } }}/>
        </Grid>
        <Grid sm={12} md={6} sx={{ px: 5, display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
          <Box component="div" sx={{ py: 1 }}>
            <Typography variant="subtitle1" color="secondary.main" gutterBottom>Specialist</Typography>
            <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>{first_name} {last_name}</Typography>
            <SpecialistSocials socials={primary_socials}/>
          </Box>
          <Box component="div" sx={{ py: 2 }}>
            <Typography variant="h4" sx={{ mb:{xs: 3, sm: 3} }} gutterBottom> Why Travel With {first_name}</Typography>
            <Typography fontWeight={300} variant="body1">{bio}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfileCard;