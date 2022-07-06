import * as React from 'react';
import NewAppBar from './NewHomepageTravelPage/NewAppBar';
import AppFooter from '../modules/views/AppFooter';
import withRoot from '../modules/withRoot';
import HeroImage from "./NewHomepageTravelPage/HeroImage/HeroImage";
import { influ } from '../Constants';
import { makeStyles } from '@mui/styles';
import Influencer from './NewHomepageTravelPage/OtherPageContent/Influencer';
import AnimationLearn from './NewHomepageTravelPage/HeroImage/AnimationLearn';

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
        <div className={classes.main}>
            <NewAppBar />
            <HeroImage details={influ}/>
            <AnimationLearn />
            <Influencer details={influ} />
            <AppFooter />
        </div>
    )
}

export default withRoot(Influyente);