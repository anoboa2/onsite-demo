import { useState } from 'react';
import { useRownd } from '@rownd/react';
import { IconButton, Link, Menu, MenuItem } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AuthenticatedNavOptions from '../../content/AuthenticatedNavOptions';

const AccountMenu = () => {
  const { signOut } = useRownd();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        edge='end'
        color='primary'
        aria-label='menu'
        onClick={handleOpenUserMenu}
        >
        <AccountCircle />
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
        {AuthenticatedNavOptions.map(option => (
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

export default AccountMenu;