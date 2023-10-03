import { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import BasePage from '../components/templates/BasePage';

const appId = '1071094180207728';
const redirectUri = 'https://www.onsiteplanning.com/igredirect/';
const instagram_auth = 
  `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`

const IgRedirect = () => {
  // get query parameters
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  const storeToken= (payload) => {
    fetch('https://hmou3ha9b1.execute-api.us-east-1.amazonaws.com/v1/profile/storeinstagramtoken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  useEffect(() => {
    storeToken({
      user: 'noboa',
      platform: 'instagram',
      code: code
    })
  }, [code]);
  

  return (
    <BasePage>
      <Box>
        <Button href={instagram_auth}>
          Sign in with Instagram
        </Button>
      </Box>
      <Box>
        <Typography variant="h2">Redirected from Instagram</Typography>
        {code && <Typography variant="body1">Code:<br/>{code}</Typography>}
      </Box>
    </BasePage>
  );
}

export default IgRedirect;