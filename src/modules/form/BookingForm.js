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




const BookingForm = (props) => {
    const initialValues = {
        location: '',
        startdate: null,
        enddate: null,
        daterange: [null, null],
        datesunsure: false,
        occasion: [],
        activities: [],
        numberofadults: 1,
        numberofkids: 0,
        budget: 0,
    }

    const [values, setValues] = useState(initialValues)
    const [display, setDisplay] = useState(false)



    function handleInputChange(name, event) {
        console.log(event);
        setValues({ ...values, [name]: event });
        // setValues({ ...values, [event.target.name]: event.target.value })
        // console.log(`Added ${event.target.value} from ${event.target.name} which updated our object to ${JSON.stringify(values)}`)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`Mock API call: ${JSON.stringify(values)}`)
        setValues(initialValues)
        console.log("Thank you for submitting your booking.")
    }


    return (
        <Container>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ justifyContent: 'center', alignItems: 'center' }}
            >
                <InitialBookingContent values={values} handleInputChange={handleInputChange.bind(this)} />
                {display ? <SubsequentBookingContent values={values} handleInputChange={handleInputChange} /> : <Grid item xs={4}><Button variant="contained" color="secondary" onClick={() => setDisplay(true)}>Let's Plan!</Button></Grid>}
            </Box>
        </Container>

    );
}

export default withRoot(BookingForm);