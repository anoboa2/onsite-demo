import { Grid } from '@mui/material';
import BasePage from '../components/templates/BasePage.js';
import ProfileSideMenu from '../components/organisms/ProfileSideMenu.js'
import TravelProfile from '../components/templates/TravelProfile.js'


const Profile = () => {
  return (
    <BasePage>
      <Grid container spacing={2} style={{ overflowX: "visible" }}>
        <Grid item sm={3} xs={2}>
          <ProfileSideMenu />
        </Grid>
        <Grid item sm={9} xs={10}>
          <TravelProfile />
        </Grid>
      </Grid>
    </BasePage>
  )
}

export default Profile;