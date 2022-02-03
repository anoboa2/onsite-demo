import * as React from 'react';
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '../modules/components/Typography';
import WaitlistButton from '../modules/views/WaitlistButton';
import withRoot from '../modules/withRoot';

const backgroundImage =
  '/img/waitlistBackground.jpg';

const WaitlistRoot = styled(Container)(({ theme }) => ({
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex', 
    flexFlow: 'column wrap',
    alignItems: 'center',
    // [theme.breakpoints.up('sm')]: {
    //     height: '80vh',
    //     minHeight: 500,
    //     maxHeight: 1300,
    // },
}));

const Background = styled(Box)(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: -2,
}));


function WaitlistLanding() {

    return (
        <Background>
            <WaitlistRoot>
                <Typography
                color="primary"
                align="center"
                variant="h1"
                sx={{
                    mx: 10,
                    my: 4,
                    pb: 2,
                    fontWeight: 900,
                    color: 'white',
                }}
                >
                    Your personalized travel itinerary is coming sooner than you think!
                </Typography>
                <Typography 
                color="primary"
                align="center"
                variant="body1"
                sx={{
                    display: 'flex',
                    fontSize: 24,
                    mx: 7,
                    mb: 4,
                    pb: 2,
                    fontWeight: 400,
                    color: 'white',
                }}
                >
                    Be the first to access Onsite’s personalized travel planning. 
                    We believe in helping you maximize every trip and harness the power of technology to curate the ultimate travel experiences.
                </Typography>
                <WaitlistButton sx={{ mx: 'auto' }}/>
            </WaitlistRoot>
        </Background>
    )
}

export default withRoot(WaitlistLanding);