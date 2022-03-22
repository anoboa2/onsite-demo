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


const onsiteLogo = '/img/onsiteLogoColor.png';
const onsiteLogoText = '/img/onsiteLogoTextBW.png';

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
                            height='35px'
                            style={image}
                        />
                        <img
                            src={onsiteLogoText}
                            height='30px'
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
