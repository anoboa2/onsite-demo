import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../../modules/components/AppBar';
import Toolbar from '../../modules/components/Toolbar';
import { useRownd } from '@rownd/react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import IconButton from '@mui/material/IconButton';
import Typography from '../../modules/components/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


const pages = ['About Us', 'Blog', 'Profile', 'Sign Up'];


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


    
    
const rightLink = {
    fontSize: 16,
    color: 'secondary.main',
    ml: 3,
    '&:hover': {
        color: "#0FAACD",
    },
};

const image = {
    marginTop: 5,
    paddingLeft: 10,
}
const useStyles = makeStyles((theme) => ({
    appbar: {
        [theme.breakpoints.down("sm")]: {

            marginLeft: 0,
            paddingLeft: 0,
        },
    }
}))


const onsiteLogo = '/img/onsiteLogoColor.webp';
const onsiteLogoText = '/img/onsiteLogoTextBW.webp';

function NewAppBar() {
    const { is_authenticated } = useRownd();
    const classes = useStyles()
    return (
        <div >
            <AppBar className={classes.appbar} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flex: 0.1, justifyContent: 'flex-start' }} />
                    <Link
                        underline="none"
                        href="/"
                    >
                        <img
                            src={onsiteLogo}
                            alt="Onsite Logo in Color; a flying plane leaving an O-shaped trail"
                            height='35px'
                            width='45px'
                            style={image}
                        />
                        <img
                            src={onsiteLogoText}
                            alt="Onsite Logo in Black and White Typography"
                            height='30px'
                            width='110px'
                            style={image}
                        />
                    </Link>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                       <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleOpenNavMenu}
                          color="inherit"
                        >
                          <MenuIcon />
                        </IconButton>

                        <Menu
                          id="menu-appbar"
                          anchorEl={anchorElNav}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                          }}
                          open={Boolean(anchorElNav)}
                          onClose={handleCloseNavMenu}
                          sx={{
                            display: { xs: 'block', md: 'none' },
                          }}
                        >
                          {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                              <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                          ))}
                        </Menu>

                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            href="/aboutus"
                            sx={rightLink}
                        >
                            {'About Us'}
                        </Link>
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            href="https://blogonsiteplanning.wordpress.com"
                            sx={rightLink}
                            target="_blank"
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
                                data-rownd-sign-in-trigger
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
            </Container>
            </AppBar>
        </div>
    );
}

export default NewAppBar;
