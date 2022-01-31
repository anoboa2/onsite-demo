import * as React from 'react';
import { Field, Form } from 'react-final-form';
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '../modules/components/Typography';
import WaitlistButton from '../modules/views/WaitlistButton';
import TestButton from '../modules/views/TestButton';
import WapiButton from '../modules/views/WapiButton';
import withRoot from '../modules/withRoot';

const backgroundImage =
  '/img/waitlistBackground.jpg';

const WaitlistRoot = styled(Container)(({ theme }) => ({
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex', 
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        height: '80vh',
        minHeight: 500,
        maxHeight: 1300,
    },
}));

const Background = styled(Box)(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url(${backgroundImage})`,
    // backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: -2,
}));


function WaitlistLanding() {
    // const [ email, setEmail ] = React.useState("");
    // const [ message, setMessage ] = React.useState("");

    // const [ sent, setSent ] = React.useState(false);

    // let handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         let res = await fetch("https://httpbin.org/post", {
    //             method: "POST",
    //             body: JSON.stringify({
    //                 email: email
    //             }),
    //         });
        
    //         let resJson = await res.json();
    //         if (res.status === 200) {
    //             setEmail("");
    //             setMessage("Email successfully sent");
    //         } else {
    //             setMessage("Some error occurred");
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    //     setSent(true);
    // };



    return (
        <Background>
            <WaitlistRoot>
                <Container 
                disableGutters
                sx={({
                    height: 400,
                    maxWidth: 800,
                    mb: '40vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'space-between',
                    // justifyContent: 'flex-start',
                    // background: 'rgba(245, 245, 245, 0.5)',
                    // boxShadow: '0 0.5em 1em rgba(0, 0, 0, .4)',
                    // backdropFilter: 'blur(3px)',
                    // filter: 'brightness(80)'
                })}
                >
                        <Typography
                        color="primary"
                        align="center"
                        variant="h1"
                        sx={{
                            mx: 10,
                            my: 4,
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
                            mb: 2,
                            fontWeight: 400,
                            color: 'white',
                        }}
                        >
                            Be the first to access Onsite’s personalized travel planning. 
                            We believe in helping you maximize every trip and harness the power of technology to curate the ultimate travel experiences.
                        </Typography>
                        <Form
                        onSubmit={(e) => console.log('Test')}
                        subscription={{ submitting: true}}
                        >
                            {({ handleSubmit: handleSubmit2, submitting }) => (
                                <Box
                                component="form"
                                onSubmit={handleSubmit2}
                                noValidate
                                display="flex"
                                sx={{
                                    mb: 5,
                                    justifyContent: 'center',
                                    alignItems: 'baseline',
                                }}
                                >
                                    <WapiButton />
                                </Box>
                            )}
                        </Form>
                </Container>
            </WaitlistRoot>
        </Background>
    )
}

export default withRoot(WaitlistLanding);