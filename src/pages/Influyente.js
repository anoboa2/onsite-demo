import * as React from 'react';
import NewAppBar from './NewHomepageTravelPage/NewAppBar';
import AppFooter from '../modules/views/AppFooter';
import withRoot from '../modules/withRoot';
import HeroImage from "./NewHomepageTravelPage/HeroImage/HeroImage";
import { influ } from '../Constants';
import Influencer from './NewHomepageTravelPage/OtherPageContent/Influencer';
import AnimationInfluencer from './NewHomepageTravelPage/HeroImage/AnimationInfluencer';
import Container from '@mui/material/Container';
import DiscountInfluencer from './NewHomepageTravelPage/OtherPageContent/DiscountInfluencer';


const Influyente = () => {
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