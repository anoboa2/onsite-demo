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
    


    function handleInputChange(event) {
        setValues({ ...values, [event.target.name]: event.target.value })
        console.log(`Added ${event.target.value} from ${event.target.name} which updated our object to ${JSON.stringify(values)}`)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let url = 'https://wvjy6ieml5.execute-api.us-east-1.amazonaws.com/live';
        let message = `<p>Traveler Name: Name<br />Traveler Email: email<br />Location: ${values.location}<br />Start Date: ${values.startdate}<br />End Date: ${values.enddate}<br />Unsure of dates?: ${values.datesunsure}<br />Occasion: ${values.occasion}<br />Activities: ${values.activities}<br />Adults: ${values.numberofadults}<br />Kids: ${values.numberofkids}<br />Budget: ${values.budget}<br /></p>`
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
    }


    return (
        <Container>
            <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ justifyContent: 'center', alignItems: 'center' }}
            >
                <InitialBookingContent values={values} handleInputChange={handleInputChange} />
                { display ? <SubsequentBookingContent values={values} handleInputChange={handleInputChange} /> : <Grid item xs={4}  sx={{ mx: 'auto' }}><Button variant="contained" color="secondary" onClick={() => setDisplay(true)} sx={{ width: 200, }}>Let's Plan!</Button></Grid> }
            </Box>
        </Container>

    );
}

export default withRoot(BookingForm);