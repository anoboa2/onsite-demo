import * as React from 'react';
import NewAppBar from '../pages/NewHomepageTravelPage/NewAppBar';
import AppFooter from '../modules/views/AppFooter';
import withRoot from '../modules/withRoot';
import HeroImage from "../pages/NewHomepageTravelPage/HeroImage/HeroImage";
import PhoneMockupTwo from "../pages/NewHomepageTravelPage/OtherPageContent/PhoneMockupTwo"
import BookNow from "../pages/NewHomepageTravelPage/OtherPageContent/BookNow"
import AboutTeam from "../pages/NewHomepageTravelPage/OtherPageContent/aboutTeam"
import About from "../pages/NewHomepageTravelPage/OtherPageContent/images/travelPlanning.gif"
import { about } from '../Constants';
import AboutUsQuote from './NewHomepageTravelPage/OtherPageContent/aboutusQuote';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    main: {
        background: 'linear-gradient(to right bottom,#f9fafb , #f8eeec)',
        backgroundPosition: 1,
        [theme.breakpoints.down("sm")]: {
            width: "100% !important",
            height: "100% !important",

        },
    },
}));


const AboutUs = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <NewAppBar />
            <HeroImage details={about}/>
            <AboutUsQuote />
            <PhoneMockupTwo img={About} details={about}/>
            <AboutTeam />
            <BookNow />
            <AppFooter />
        </React.Fragment>
    )
}

export default withRoot(AboutUs);