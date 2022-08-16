import { AppBar, Box, Button, Toolbar, IconButton, Link } from '@mui/material';
import { useRownd } from '@rownd/react';
import AccountMenu from '../molecules/AccountMenu';

const pages = [
  {
    name: 'Start a Trip',
    path: '/match'
  },
  {
    name: 'Explore Itineraries',
    path: '/explore'
  },
  {
    name: 'Blog',
    path: 'https://blog.onsiteplanning.com/'
  }
];

const NavBar = () => {
  const { is_authenticated } = useRownd();
  return (
    <AppBar position='fixed'>
      <Toolbar sx={{ mx: 10 }}>
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
                src="/img/OnsiteLogo.png"
                alt="Onsite Logo in Color; a flying plane leaving an O-shaped trail"
                height='40px'
                width='150px'
                style={{ mt: 5, pl: 10 }}
            />
          </Link>
        </IconButton>
        <Box flexGrow={1}>
        </Box>
        {pages.map(page => (
          <Link key={page.name} href={page.path} underline='hover' color='primary' sx={{ px: 1.5 }}>
            {page.name}
          </Link>
        ))}
        {is_authenticated ? (
          <AccountMenu />
        ) : (
          <Button data-rownd-sign-in-trigger variant='contained' color='secondary' sx={{ ml: 2, fontWeight: 900, borderRadius: '6px', padding: "8px 12px" }}>
            Sign Up
          </Button>
        )}
        
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;