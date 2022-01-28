import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

const onsiteLogo = '/img/onsiteLogoColorBg.png';

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 0.1, justifyContent: 'flex-start' }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24}}
          >
            <img 
            src = {onsiteLogo} 
            width = '50px'
            />
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {/* <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/signin"
              sx={rightLink}
            >
              {'Log In'}
            </Link> */}
            <Link
              variant="h6"
              underline="none"
              href="/signup"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Sign Up'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
