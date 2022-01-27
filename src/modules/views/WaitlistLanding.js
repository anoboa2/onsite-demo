import * as React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FormButton from '../form/FormButton';
import Typography from '../components/Typography';
import RFTextField from '../form/RFTextField';
import AppForm from '../views/AppForm';
import { SportsRugbySharp } from '@mui/icons-material';

const backgroundImage =
  'https://images.unsplash.com/photo-1536789966001-6a8beea3779b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80';

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
                <Container 
                disableGutters
                sx={({
                    maxHeight: 400,
                    maxWidth: 800,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: 'rgba(245, 245, 245, 0.5)',
                    boxShadow: '0 0.5em 1em rgba(0, 0, 0, .4)',
                    backdropFilter: 'blur(3px)',
                    // filter: 'drop-shadow(2px 2px 4px 3px black)'
                })}
                >
                        <Typography
                        color="primary"
                        align="center"
                        variant="h4"
                        sx={{
                            mx: 20,
                            mt: 5,
                            mb: 2,
                        }}
                        >
                            Your Personalized Travel Itinerary Is Coming Sooner Than You Think!
                        </Typography>
                        <Typography 
                        color="primary"
                        align="justify"
                        paragraph
                        sx={{
                            display: 'flex',
                            mx: 7,
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
                                    color: 'rgba(0, 0, 0, 0)',
                                }}
                                >
                                    <Field
                                    autoComplete="email"
                                    autoFocus
                                    component={RFTextField}
                                    disabled={sent}
                                    fullWidth
                                    placeholder="Email"
                                    margin="normal"
                                    name="email"
                                    required
                                    size="large"
                                    />
                                    <FormButton 
                                    size="small"
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