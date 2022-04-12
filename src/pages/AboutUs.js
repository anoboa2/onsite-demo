import * as React from 'react';
import NewAppBar from '../pages/NewHomepageTravelPage/NewAppBar';
import AppFooter from '../modules/views/AppFooter';
import withRoot from '../modules/withRoot';
import HeroImage from "../pages/NewHomepageTravelPage/HeroImage/HeroImage";
import PhoneMockupTwo from "../pages/NewHomepageTravelPage/OtherPageContent/PhoneMockupTwo"
import BookNow from "../pages/NewHomepageTravelPage/OtherPageContent/BookNow"
import AboutTeam from "../pages/NewHomepageTravelPage/OtherPageContent/aboutTeam"
import About from "../pages/NewHomepageTravelPage/OtherPageContent/images/About-Us-Picture.webp"
import { about } from '../Constants';
function AboutUs() {
    return (
        <React.Fragment>
            <NewAppBar />
            <HeroImage details={about}/>
            <PhoneMockupTwo img={About} details={about}/>
            <AboutTeam />
            <BookNow />
            <AppFooter />
        </React.Fragment>
    )
}

export default withRoot(AboutUs);