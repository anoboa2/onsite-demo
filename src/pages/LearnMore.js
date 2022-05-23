import * as React from 'react';
import { makeStyles } from '@mui/styles';
import NewAppBar from './NewHomepageTravelPage/NewAppBar';
import AppFooter from '../modules/views/AppFooter';
import withRoot from '../modules/withRoot';
import "./learmore.css";
import { learn } from '../Constants';
import Learn from './NewHomepageTravelPage/HeroImage/Learn';
import LearnContent from './NewHomepageTravelPage/OtherPageContent/LearnContent';
import AnimationLearn from './NewHomepageTravelPage/HeroImage/AnimationLearn';


const useStyles = makeStyles((theme) => ({
    main: {
        background: 'linear-gradient(to right bottom,#f9fafb , #f8eeec)',
        backgroundPosition: 1,
        [theme.breakpoints.down("sm")]: {
            width: "100% !important",
            height: "100% !important",

        },
    }
}));

const LearnMore = () => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <NewAppBar />
            <Learn details={learn} />
            <AnimationLearn/>
            <LearnContent details={learn}/>
            <AppFooter />
        </div>
    );
}

export default withRoot(LearnMore);
