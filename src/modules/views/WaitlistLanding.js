import * as React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FormButton from '../form/FormButton';
import Typography from '../components/Typography';
import RFTextField from '../form/RFTextField';
import AppForm from '../views/AppForm';

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
    // background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: -2,
}));


export default function WaitlistLanding(props) {
    const { sxBackground, children } = props;

    const [ sent, setSent ] = React.useState(false);

    const handleSubmit = () => {
        setSent(true);
    };

    return (
        <Background>
            <WaitlistRoot>
                {/* <Container 
                sx={{
                    height: 100
                }}
                /> */}
                <Container 
                disableGutters
                sx={({
                    maxHeight: 400,
                    maxWidth: 800,
                    // mb: '70%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'space-between',
                    justifyContent: 'flex-start',
                    // background: 'rgba(245, 245, 245, 0.5)',
                    // boxShadow: '0 0.5em 1em rgba(0, 0, 0, .4)',
                    // backdropFilter: 'blur(3px)',
                    // filter: 'brightness(80)'
                })}
                >
                        <Typography
                        color="primary"
                        align="center"
                        variant="h3"
                        sx={{
                            mx: 20,
                            mt: 5,
                            mb: 2,
                            fontWeight: 900,
                        }}
                        >
                            Your Personalized Travel Itinerary Is Coming Sooner Than You Think!
                        </Typography>
                        <Typography 
                        color="primary"
                        align="justify"
                        variant="body1"
                        sx={{
                            display: 'flex',
                            mx: 7,
                            fontWeight: 700,
                        }}
                        >
                            Be the first to access Onsite's personalized travel planning.  We believe in helping you maximize every trip and harness the power technology to curate the ultimate travel experience
                        </Typography>
                        <Form
                        onSubmit={handleSubmit}
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
                                    <Field
                                    autoComplete="email"
                                    autoFocus
                                    component={RFTextField}
                                    disabled={sent}
                                    placeholder="Email"
                                    margin="normal"
                                    name="email"
                                    required
                                    size="small"
                                    sx={{
                                        width: '300px',
                                        borderRadius: '10px 0px 0px 10px',
                                    }}
                                    />
                                    <FormButton 
                                    size="small"
                                    color="secondary"
                                    sx={{
                                        width: '150px',
                                        borderRadius: '0px 10px 10px 0px',
                                    }}
                                    >
                                        Join Waitlist
                                    </FormButton>
                                </Box>
                            )}
                        </Form>
                </Container>
            </WaitlistRoot>
        </Background>
    )
}