import { useEffect, useState } from 'react';
import { useRownd } from '@rownd/react';
import { IconButton, Link, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationOptions from '../../content/NavigationOptions';
import AuthenticatedNavOptions from '../../content/AuthenticatedNavOptions';


const NavMenu = () => {
  const { signOut, is_authenticated } = useRownd();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  }

  useEffect(() => {
    if (is_authenticated) {
      NavigationOptions.push(AuthenticatedNavOptions);
    }
  });

  return (
    <div>
      <IconButton
        edge='end'
        color='primary'
        aria-label='menu'
        onClick={handleOpenUserMenu}
        >
        <MenuIcon />
      </IconButton>
      <Menu
        id='user-menu'
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseUserMenu}
        >
        {NavigationOptions.map(option => (
          <MenuItem key={option.name}>
            <Link href={option.path} underline='none' color='primary.main' sx={{ px: 1 }}>
              {option.name}
            </Link>
          </MenuItem>
        ))}
        <MenuItem key='sign-out'>
          <Link onClick={(e) => {e.preventDefault(); signOut();}} underline='none' color='primary.main' sx={{ px: 1 }}>Sign Out</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavMenu; 