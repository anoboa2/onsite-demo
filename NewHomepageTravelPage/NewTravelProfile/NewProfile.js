import * as React from 'react';
import AppFooter from '../../../modules/views/AppFooter';
import withRoot from '../../../modules/withRoot';
import NewAppBar from '../NewAppBar';
import NewTravel from './NewTravel';
import NewTravelProfile from "./NewTravelProfile";

function NewProfile() {

    return (
        <React.Fragment>
            <NewAppBar />
            <NewTravel style={{ overflowX: "visible" }} />
            <AppFooter />
        </React.Fragment>
    )
}

export default withRoot(NewProfile);