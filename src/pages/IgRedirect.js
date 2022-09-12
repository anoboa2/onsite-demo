import { Box, Button, Typography } from '@mui/material';
import NavBar from '../components/organisms/NavBar';
import Footer from '../components/organisms/Footer';

const appId = '1071094180207728';
const redirectUri = 'https://www.onsiteplanning.com/igredirect/';
const instagram_auth = 
  `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`

const IgRedirect = () => {
  // get query parameters
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  return (
    <>
      <NavBar />
      <Box>
        <Button href={instagram_auth}>
          Sign in with Instagram
        </Button>
      </Box>
      <Box>
        <Typography variant="h2">Redirected from Instagram</Typography>
        {code && <Typography variant="body1">Code:<br/>{code}</Typography>}
      </Box>
      <Footer />
    </>
  );
}

export default IgRedirect;