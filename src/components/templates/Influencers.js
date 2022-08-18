import { Grid, Typography } from '@mui/material';
import ProfileCard from '../molecules/ProfileCard';
import ItinerarySection from '../organisms/ItinerarySection';


const Influencers = () => {

  const profile = {
    name: 'Izanna Levintova',
    image_url: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/izanna.lev/profile.jpeg',
    description: 'Izanna has had a passion for traveling the world ever since she was a little girl. From organizing family trips to now inspiring others to pack their bags and book that trip.',
    influencerId: 'izanna.lev'
  }

  return (
    <>
      <Grid container item spacing={3} sx={{ px: { xs: 10, sm: 20 }, my: { xs: 10, sm: 15 }, mt: 20 }}>
        <ProfileCard
          key={profile.influencerId}
          content={profile}
        />
      </Grid>
      <Grid container spacing={3} sx={{ px: { xs: 5, sm: 20 }, mb: 15 }}>
        <Grid item xs={12}>
          <Typography variant="h4">Recent Trips</Typography>
        </Grid>
        <ItinerarySection />
      </Grid>
    </>
  );
}

export default Influencers;