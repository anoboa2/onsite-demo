import React, { useReducer, useState } from 'react';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar from '../modules/views/AppAppBar';
import BookingForm from '../modules/form/BookingForm';
import withRoot from '../modules/withRoot';

function Booking() {

    return (
        <React.Fragment>
            <AppAppBar />
            <BookingForm />
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(Booking);