import * as React from 'react';
import AppFooter from '../../../modules/views/AppFooter';
import withRoot from '../../../modules/withRoot';
import NewAppBar from '../NewAppBar';
import NewBookingForm from './NewBookingForm';

function NewBooking() {

    return (
        <React.Fragment>
            <NewAppBar />
            <NewBookingForm />
            <AppFooter />
        </React.Fragment>
    )
}

export default withRoot(NewBooking);