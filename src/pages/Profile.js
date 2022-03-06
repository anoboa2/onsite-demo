import * as React from 'react';
import AppAppBar from "../modules/views/AppAppBar";
import TravelProfile from "../modules/views/TravelProfile";
import AppFooter from '../modules/views/AppFooter';
import withRoot from '../modules/withRoot';


function Profile() {
    return (
        <React.Fragment>
            <AppAppBar />
            <TravelProfile />
            <AppFooter />
        </React.Fragment>
    )
}

export default withRoot(Profile);