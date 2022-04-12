import * as React from 'react';
import AppFooter from '../../../modules/views/AppFooter';
import withRoot from '../../../modules/withRoot';
import NewAppBar from '../NewAppBar';
import NewBookingContent from './NewBookingContent';

function NewBooking() {

    return (
        <React.Fragment>
            <NewAppBar />
            <NewBookingContent />
            <AppFooter />
        </React.Fragment>
    )
}

export default withRoot(NewBooking);