import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Fade,
    Grid,
    Modal
} from '@mui/material';
import Button from '../../../modules/components/Button';

import withRoot from '../../../modules/withRoot';
import { useRownd } from '@rownd/react';
import { useLocalStorage } from '../../../useLocalStorage';
import NewInitialBookingContent from './NewInitialBookingContent';
import NewSubsequentBookingContent from './NewSubsequentBookingContent';
import Typography from '../../../modules/components/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
const NewBookingForm = (props) => {
    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        location: '',
        daterange: [null, null],
        dateunsure: false,
        occasion: [],
        activities: [],
        numberofadults: 1,
        numberofkids: 0,
        budget: 0,
        notes: '',
        contact_pref: ''
    }
    const { is_authenticated, user, requestSignIn } = useRownd();

    const [values, setValues] = useLocalStorage("last_booking", initialValues)
    const [display, setDisplay] = useLocalStorage("booking_full_display", false)

    // console.log(user.data.full_name)
    // console.log(user.data.email)
    // useEffect(() => {
    //     console.log("Form values reset successfully")
    //     // window.location.assign("https://buy.stripe.com/5kA7vi4cketEgWk6oM")
    //     localStorage.removeItem("last_booking")
    //     localStorage.removeItem("booking_full_display")
    // });
    function handleInputChange(name, event) {
        setValues({ ...values, [name]: event });
    }
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let url = 'https://fz7rq6tvx4.execute-api.us-east-1.amazonaws.com/prod';

        if (!is_authenticated) requestSignIn({ auto_sign_in: true, identifier: user.data.email });
        else {
            const body = {
                ...values,
                first_name: user.data.first_name,
                last_name: user.data.last_name,
                email: user.data.email,
            }

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(body)
            })
                .then((response) => response.json())

            console.log('Form submitted to AWS API Gateway')
            setValues(initialValues)
            setOpen(true)
            setDisplay(false)
            console.log("Form values reset successfully")
            // window.location.assign("https://buy.stripe.com/5kA7vi4cketEgWk6oM")
            localStorage.removeItem("last_booking")
            localStorage.removeItem("booking_full_display")
        }
    }


    return (
        <Container maxWidth={false}>
            <Box
                id="booking-form"
                component="form"
                onSubmit={handleSubmit}
                sx={{ px: { xs: 0, sm: 5, }, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff80', backdropFilter: 'blur(2px)', backgroundColor: '#1CCC6F10', borderRadius: 10, m: 0, width: 1, }}
            >
                <NewInitialBookingContent
                    values={values}
                    handleInputChange={handleInputChange.bind(this)}
                />
                {display ? <NewSubsequentBookingContent values={values} handleInputChange={handleInputChange} /> : <Grid item xs={6} sx={{ mx: 'auto', textAlign: 'center', }}><Button variant="contained" color="secondary" onClick={() => setDisplay(true)} sx={{ width: 200, mb: 6, }}>Let's Plan!</Button></Grid>}
            </Box>
            <div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Thank you for submitting
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Your personal travel concierge will reach out to you within 1 business day
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </Container>

    );
}

export default withRoot(NewBookingForm);
