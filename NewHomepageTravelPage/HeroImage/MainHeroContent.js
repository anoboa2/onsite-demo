import * as React from 'react';
import Typography from '../../../modules/components/Typography';
import HeroLayout from './HeroLayout';
import WaitlistButton from '../../../modules/views/WaitlistButton';
import Button from '../../../modules/components/Button';
import { useRownd } from '@rownd/react';
import SignupModal from '../../../modules/views/SignupModal';
import NewBookingForm from './NewBookingForm';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';



const backgroundImage = '/img/newheroimage.webp';
const useStyles = makeStyles((theme) => ({
    span: {
        color: "#52d681 !important",
        textDecoration: "underline 3px !important",
        [theme.breakpoints.down("sm")]: {
            textDecoration: "none ",
            fontSize: "22px !important",
        },
    },
    typo1: {
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
            fontSize: "22px !important",
        },

    },
    typo2: {
        [theme.breakpoints.down("sm")]: {
            maxWidth: "80%",
            fontSize: "16px !important",
            marginBottom: "24px !important"
        },

    },

}))
export default function MainHeroContent() {
    const { is_authenticated } = useRownd();
    const classes = useStyles()
    return (
        <HeroLayout
            sxBackground={{

                backgroundColor: '#7fc7d9', // Average color of the background image.
                backgroundPosition: 'bottom',
            }}
        >
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{ position: "absolute", width: "100%" }}
                src={backgroundImage}
                alt="increase priority"
            />

            <Typography className={classes.typo1} zIndex="3" color="inherit" align="center" variant="h2" sx={{ mt: { xs: 0.2, sm: 1 } }} >
                Travel Planning, <span className={classes.span}>Reinvented</span>
            </Typography>
            <Typography className={classes.typo2}
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 6, mt: { sx: 0.5, sm: 1 } }}
                zIndex="3"
            >
                Get the most out of your travel by leaving the planning to us
            </Typography>

            <NewBookingForm maxWidth={false} />
        </HeroLayout>
    );
}
