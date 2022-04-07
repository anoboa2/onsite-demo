import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../../modules/components/AppBar';
import Toolbar from '../../modules/components/Toolbar';
import { useRownd } from '@rownd/react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

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
            <AppBar className={classes.appbar} position="fixed">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ flex: 0.1, justifyContent: 'flex-start' }} />
                    <Link
                        underline="none"
                        href="/"
                    >
                        <img
                            src={onsiteLogo}
                            alt="Onsite Image Logo in Color; a flying plane leaving an O-shaped trail"
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
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
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
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default NewAppBar;
