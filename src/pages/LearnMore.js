import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Fade } from 'react-reveal';
import NewAppBar from './NewHomepageTravelPage/NewAppBar';
import AppFooter from '../modules/views/AppFooter';
import Typography from '../modules/components/Typography';
import withRoot from '../modules/withRoot';
import "./learmore.css";
import YoutubeEmbed from "./YoutubeEmbed";
import { learn } from '../Constants';
import Learn from './NewHomepageTravelPage/HeroImage/Learn';
import { Grid } from '@mui/material';


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
            <AppFooter />
        </div>
    );
}

export default withRoot(LearnMore);
