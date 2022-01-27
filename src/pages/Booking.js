import React, { useReducer, useState } from 'react';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar from '../modules/views/AppAppBar';
import BookingForm from '../modules/views/BookingForm';
import withRoot from '../modules/withRoot';

function Booking() {
    const bookingShow = (props) =>(
        <table>
            <thead>
                <tr>
                    <th>Location</th>
                    <th>Start Date</th>
                </tr>
            </thead>
            <tbody>
                {props.booking.length > 0 ? (
                    props.booking.map((book) => (
                        <tr key={book.id}>
                            <td>{booking.location}</td>
                            <td>{booking.startdate}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={2}>No data</td>
                    </tr>
                )}
            </tbody>
        </table>
    );

    const [booking, setBooking] = useState()

    const addBooking = (booking) => {
        booking.id = booking.length + 1
        setBooking(...booking, booking)
    }
    return (
        <React.Fragment>
            <AppAppBar />
            <BookingForm />
            <bookingShow />
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(Booking);