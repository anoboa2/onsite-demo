import { Grid } from '@mui/material';
import NavBar from '../components/organisms/NavBar.js'
import ProfileSideMenu from '../components/organisms/ProfileSideMenu.js'
import TravelProfile from '../components/templates/TravelProfile.js'
import Footer from '../components/organisms/Footer.js'


const Profile = () => {
  return (
    <>
      <NavBar  />
      <Grid container spacing={2} style={{ overflowX: "visible" }}>
        <Grid item sm={3} xs={2}>
          <ProfileSideMenu />
        </Grid>
        <Grid item sm={9} xs={10}>
          <TravelProfile />
        </Grid>
      </Grid>
      <Footer />
    </>
  )
}

export default Profile;