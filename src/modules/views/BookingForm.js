import React, { useReducer, useState } from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import AppForm from './AppForm';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import RFTextField from '../form/RFTextField';
import withRoot from '../withRoot';
import { propsToClassKey } from '@mui/styles';

const onSubmit = 'tbd';


const BookingForm = (props) => {
    const initialBookingState = {
        location: '',
        startdate: 'datetime',
        enddate: 'datetime',
        numberofadults: 1,
        numberofkids: 0,
        triptype: '',
        budget: 0,
    }
    
    const [booking, setBooking] = useState(initialBookingState)
    
    const updateBooking = (booking) => {
        setBooking({
            location: booking.location,
            startdate: booking.startdate,
            enddate: booking.enddate,
            numberofadults: booking.numberofadults,
            numberofkids: booking.numberofkids,
            triptype: booking.triptype,
            budget: booking.budget,
        })
    }
    
    const handleInputChange = (event) => {
        const { name, value } = event.target
        console.log(event)
        setBooking({ name: value })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (!booking.location || !booking.startdate) return

        props.updateBooking(booking)
        setBooking(initialBookingState)
    }
    return (
        <Container>
            <Box>
            <form onSubmit={onSubmit}>
                <label>Location</label>
                <input 
                type="text"
                name="location"
                value={booking.location}
                onChange={handleInputChange}
                />
                <label>Start Date</label>
                <input 
                type="text"
                name="startdate"
                value={booking.startdate}
                onChange={handleInputChange}
                />
                <button>Book Now</button>
            </form>
            </Box>
        </Container>

    );
}

export default withRoot(BookingForm);