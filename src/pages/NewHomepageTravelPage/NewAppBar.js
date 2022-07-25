import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../../modules/components/AppBar';
import Toolbar from '../../modules/components/Toolbar';
import { useRownd } from '@rownd/react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Typography from '../../modules/components/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb'; 

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


const onsiteLogo = '/img/Onsite_Logo1.png';

function NewAppBar() {
    const { is_authenticated } = useRownd();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const navigate = useNavigate();

    let pages = [
        {
            label: 'Itineraries',
            key:'itineraries',
            path: '/itineraries',
            isTarget: false
        },
        {
            label: 'About Us',
            key:'aboutUs',
            path: '/aboutUs',
            isTarget: false
        },
        {
            label: 'Blog',
            key:'blog',
            path: 'https://blogonsiteplanning.wordpress.com',
            isTarget: false
        }];  

    if(is_authenticated) {
        pages.push({
            label: 'Profile',
            key:'profile',
            path: '/profile',
            isTarget: false
        })
    }

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    const updateMenu = (menuDetails) => {
        handleCloseNavMenu()
        switch(menuDetails.key){
            case ('aboutUs' || 'profile') :
                navigate(menuDetails.path)
                return;
            case 'itineraries':
                    navigate(menuDetails.path)
                    return
            case 'blog':
                window.open(menuDetails.path)
                return
            default:
                return false

        }
    }

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
                            height='40px'
                            width='150px'
                            style={image}
                        />
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent:"right" }}>
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
                          {pages.map((page, index) => (
                            <>
                            <MenuItem key={page.key} onClick={() => updateMenu(page)}>
                            <Typography textAlign="center">{page.label}</Typography>
                            </MenuItem>
                            {index === pages.length -1 && !is_authenticated &&
                            <MenuItem key={page.key} onClick={() => updateMenu(page)}>
                            <Link
                                data-rownd-sign-in-trigger
                                style={{margin:'0px', color:'dimgray'}}
                                variant="h6"
                                underline="none"
                                href="/"
                                onClick={handleCloseNavMenu}
                                sx={{...rightLink, color: 'secondary.main' }}
                            >
                                {'Sign Up'}
                            </Link>
                            </MenuItem>
                        }
                        </>
                          ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"right" }}>
                    <Link
                        color="inherit"
                        variant="h6"
                        underline="none"
                        href="/itineraries"
                        sx={rightLink}
                        >
                            {'Itineraries'}
                        </Link>
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
                                sx={{...rightLink, color: 'secondary.main' }}
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