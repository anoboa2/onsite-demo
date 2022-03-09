import React, { useState } from 'react';
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
// import { rownd } from '@rownd/node';




const BookingForm = (props) => {
    const initialValues = {
        name: 'Alex Noboa',
        email: 'noboa@example.com',
        location: '',
        daterange: [null, null],
        dateunsure: false,
        occasion: [],
        activities: [],
        numberofadults: 1,
        numberofkids: 0,
        budget: 0,
        notes: '',
    }

    const [values, setValues] = useState(initialValues)
    const [display, setDisplay] = useState(false)



    function handleInputChange(name, event) {
        console.log(event);
        setValues({ ...values, [name]: event });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let url = 'https://fz7rq6tvx4.execute-api.us-east-1.amazonaws.com/prod';

        // setValues({...values, name: rph.user.get('full_name')})
        // setValues({...values, email: rph.user.get('email')})

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(values)
        })
        .then((response) => response.json())
        .then(json => {
            console.log(json.response)
        })
        console.log('Form submitted to AWS API Gateway')
        setValues(initialValues)
        console.log("Form values reset successfully")
        window.location.assign("https://buy.stripe.com/5kA7vi4cketEgWk6oM")
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