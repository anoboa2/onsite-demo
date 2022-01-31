import * as React from 'react';
import { useAxios } from 'use-axios-client';
import { Form, Field } from 'react-final-form';
import FormButton from '../form/FormButton';
import RFTextField from '../form/RFTextField';
import Snackbar from '../components/Snackbar';
import Typography from '../components/Typography';
import { Box } from '@mui/system';

const apiKey = 'Q3SLPY'
const referralLink = 'https://www.onsiteplanning.com/waitlist'

function RegisterWaitlist(email) {
    const { data, error, loading } = useAxios({
        url: "https://getwaitlist.com/api/v1/waitlists/submit",
        data: {
            api_key: apiKey,
            email: email,
            referral_link: referralLink,
        }
    });

    if (loading || !data) return (
        <React.Fragment>
            <Typography>Sending email...</Typography>
        </React.Fragment>
    );

    if (error) return (
        <React.Fragment>
            <Typography>We're having some technical trouble at the moment.  Please try again soon!</Typography>
            <Snackbar>Unable to register for the waitlist</Snackbar>
        </React.Fragment>
    );
}

export default function WaitlistButton() {
    const [email, setEmail] = React.useState(null);
    const [sent, setSent] = React.useState(false);

    // React.useEffect(() => {
    //     axios.get(baseUrl).then((response) => {
    //         setPost(response.data);
    //     });
    // }, []);
    
    // function initialCall() {
    //     axios.get(baseUrl).then((response) => {
    //         setPost(response.data);
    //     });
    // }

    // function handleSubmit() {
    //     axios.post(baseUrl, {
    //         'api_key': {api_Key},
    //         'email': {email},
    //         'referral_link': document.URL,
    //     })
    //     .then((response) => {
    //         // Do something
    //     });
    // }

    // if (sent) return (
    //     <Typography
    //     color="primary"
    //     align="center"
    //     variant="body1"
    //     >
            
    //     </Typography>
    // )


    return (
        <React.Fragment>
            <Form
            onSubmit={(e) => RegisterWaitlist(email)}
            >
                {() => (
                    <Box
                    component="form"
                    onSubmit={() => setEmail(Field.input.email)}
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
                        component="input"
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
        </React.Fragment>
    );
};