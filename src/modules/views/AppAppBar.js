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

const onsiteLogo = '/img/onsiteLogoTextColor.png';

function AppAppBar() {
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
            src = {onsiteLogo} 
            width = '120px'
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
            {/* <a href="/signin" data-rph-login-btn data-rph-logged-in-text="Go to Dashboard">Login </a> */}
            <Link
              variant="h6"
              underline="none"
              href="/waitlist"
              sx={{ ...rightLink, color: 'secondary.main' }}
              class="data-rph-login-btn"
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
