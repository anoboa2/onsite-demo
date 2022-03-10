import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import { useRownd } from '@rownd/react';

const rightLink = {
  fontSize: 16,
  color: 'secondary.main',
  ml: 3,
};

const image = {
  marginTop: 5,
  paddingLeft: 10,
}

const onsiteLogo = '/img/onsiteLogoColor.png';
const onsiteLogoText = '/img/onsiteLogoTextBW.png';

function AppAppBar() {
  const { is_authenticated } = useRownd();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 0.1, justifyContent: 'flex-start' }} />
          <Link
            underline="none"
            href="/"
          >
            <img 
            src= { onsiteLogo }
            height = '50px'
            style= { image }
            />
            <img 
            src = { onsiteLogoText } 
            height = '40px'
            style={ image }
            />
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="https://blogonsiteplanning.wordpress.com"
              sx={rightLink}
            >
              {'Blog'}
            </Link>
            {is_authenticated ? (
              <Link
                color="inherit"
                variant="h6"
                underline="none"
                href="/profile"
                sx={rightLink}
              >
                {'Profile'}
              </Link>
            ) : (
              <Link
                data-rph-login-btn
                color="inherit"
                variant="h6"
                underline="none"
                href="/"
                sx={{ ...rightLink, color: 'secondary.main' }}
              >
                {'Sign Up'}
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
