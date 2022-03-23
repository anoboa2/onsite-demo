import * as React from 'react';
import NewAppBar from './NewHomepageTravelPage/NewAppBar';
import TravelProfile from "../modules/views/TravelProfile";
import AppFooter from '../modules/views/AppFooter';
import withRoot from '../modules/withRoot';


function Profile() {
    return (
        <React.Fragment>
            <NewAppBar />
            <TravelProfile />
            <AppFooter />
        </React.Fragment>
    )
}

export default withRoot(Profile);