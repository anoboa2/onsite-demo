import * as React from 'react';
import NewAppBar from '../pages/NewHomepageTravelPage/NewAppBar';
import AppFooter from '../modules/views/AppFooter';
import withRoot from '../modules/withRoot';
import HeroImage from "./NewHomepageTravelPage/HeroImage/HeroImage";
import { influ } from '../Constants';
import Influencer from './NewHomepageTravelPage/OtherPageContent/Influencer';
import AnimationInfluencer from './NewHomepageTravelPage/HeroImage/AnimationInfluencer';
import Container from '@mui/material/Container';
import DiscountInfluencer from './NewHomepageTravelPage/OtherPageContent/DiscountInfluencer';
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

const Influyente = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <NewAppBar />
            <Container>
            <AnimationInfluencer />
            <Influencer details={influ} />
            </Container>
            <DiscountInfluencer />
            {/* <HeroImage details={influ}/> */}
            <AppFooter />
        </React.Fragment>
    )
}

export default withRoot(Influyente);