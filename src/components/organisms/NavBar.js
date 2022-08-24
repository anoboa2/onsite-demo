import { AppBar, Box, Button, Toolbar, IconButton, Link, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import { useRownd } from '@rownd/react';
import AccountMenu from '../molecules/AccountMenu';
import NavMenu from '../molecules/NavMenu';
import NavigationOptions from '../../content/NavigationOptions';


const NavBar = () => {
  const breakpoint = useMediaQuery(useTheme().breakpoints.up('md'));
  const { is_authenticated } = useRownd();

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar sx={{ mx: {xs: 1, sm: 5, md: 10 } }}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ '&:hover': { backgroundColor: '#fff' } }}
          >
            <Link
              underline="none"
              href="/"
            >
              <img
                  src="/img/Onsite_Logo1.png"
                  alt="Onsite Logo in Color; a flying plane leaving an O-shaped trail"
                  height='40px'
                  width='150px'
                  style={{ mt: 5, pl: 10 }}
              />
            </Link>
          </IconButton>
          <Box flexGrow={1}>
          </Box>
          <>
            {breakpoint ? (
              <>
              {NavigationOptions.map(page => (
                <Link key={page.name} href={page.path} variant="subtitle1" underline='hover' color='primary' sx={{ px: 1.5 }}>
                  {page.name}
                </Link>
              ))}
              {is_authenticated ? (
                <AccountMenu />
              ) : (
                <Button data-rownd-sign-in-trigger variant='contained' color='secondary' sx={{ ml: 2, borderRadius: '6px', padding: "8px 12px" }}>
                  Sign Up
                </Button>
              )}
              </>
            ) : (
              <NavMenu />
            )}
          </>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default NavBar;