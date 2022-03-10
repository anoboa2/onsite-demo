import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Fade,
    Grid
} from '@mui/material';
import Button from '../components/Button'
import InitialBookingContent from './InitialBookingContent';
import SubsequentBookingContent from './SubsequentBookingContent';
import withRoot from '../withRoot';
import { useRownd } from '@rownd/react';


const BookingForm = (props) => {
    const initialValues = {
        name: '',
        email: '',
        location: '',
        daterange: [null, null],
        dateunsure: false,
        occasion: [],
        activities: [],
        numberofadults: 1,
        numberofkids: 0,
        budget: 0,
        notes: ''
    }
    const { is_authenticated, user, requestSignIn } = useRownd();

    const [values, setValues] = useState(initialValues)
    const [display, setDisplay] = useState(false)
 

    console.log(user.data.full_name)
    console.log(user.data.email)

    function handleInputChange(name, event) {
        console.log(event);
        setValues({ ...values, [name]: event });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let url = 'https://fz7rq6tvx4.execute-api.us-east-1.amazonaws.com/prod';

        if (!is_authenticated) requestSignIn();
        else {
            setValues({...values, name: user.data.full_name})
            setValues({...values, email: user.data.email})

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(values)
            })
            .then((response) => response.json())

            console.log('Form submitted to AWS API Gateway')
            setValues(initialValues)
            console.log("Form values reset successfully")
            window.location.assign("https://buy.stripe.com/5kA7vi4cketEgWk6oM")
        }
    }


    return (
        <Container>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ px: { xs: 0, sm: 5, }, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff80', backdropFilter: 'blur(2px)', borderRadius: 10, m: 0, width: 1, }}
            >
                <InitialBookingContent
                    values={values}
                    handleInputChange={handleInputChange.bind(this)}
                />
                {display ? <SubsequentBookingContent values={values} handleInputChange={handleInputChange} /> : <Grid item xs={6} sx={{ mx: 'auto', textAlign: 'center', }}><Button variant="contained" color="secondary" onClick={() => setDisplay(true)} sx={{ width: 200, mb: 6, }}>Let's Plan!</Button></Grid>}
            </Box>
        </Container>

    );
}

export default withRoot(BookingForm);