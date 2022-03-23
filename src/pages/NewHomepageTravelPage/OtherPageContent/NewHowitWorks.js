import * as React from 'react';
import Fade from 'react-reveal/Fade';
import { PropTypes } from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '../../../modules/components/Card';
import Typography from "../../../modules/components/Typography";
import { makeStyles } from '@mui/styles';


// add onHover animation to Cards

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifySelf: 'center',
    m: 'auto',
    px: 3,
    minHeight: '300px',
    maxHeight: '500px',
    minWidth: '200px',
    maxWidth: '300px',
    borderRadius: "30px",
    zIndex: 2,
    '&:hover': {
        transform: 'scale(1.1)',
        // transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        // transformStyle: 'preserve-3d',
    },
};


const image = {
    height: 55,
    my: 4,
};

const cardContent = [
    { icon: '/icon/suv.png', alt: 'fully packed station wagon car', text: 'Select your planning package: Full Trip Plans or Daily Plans' },
    { icon: '/icon/tickets.png', alt: 'two airplane tickets', text: 'Fill out the booking request form and checkout to receive your proposed itinerary' },
    { icon: '/icon/flight.png', alt: 'plane in flight', text: 'Provide any feedback, questions, or changes to the itinerary and your agent will quickly provide updates until you are 100% satisfied.' },
    { icon: '/icon/waypoint.png', alt: 'pin on top of map', text: 'Approve the itinerary and we will provide you with a payment link for the full amount of the trip. Once we receive payment, your agent will make all bookings and reservations.' },
    { icon: '/icon/passport.png', alt: 'silouhette of passport', text: 'A finalized itinerary will be sent including all tickets and reservations. You can continue to reach out to your agent at any time with questions or changes, even while on your trip.' },
];

const useStyles = makeStyles((theme) => ({
    typography: {
        marginLeft: "20px !important",
        borderBottom: "3px solid #0FAACD !important",
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "25px !important",
            marginLeft: "15px !important",
        }
    },
    typographyone: {

        [theme.breakpoints.down("sm")]: {
            fontSize: "25px !important",
        }
    },
    boxone: {
        display: "flex",
        flexDirection: "row !important",
        [theme.breakpoints.down("sm")]: {
            fontSize: "25px !important",
        }
    }
}))

const NewHowitWorks = () => {
    const classes = useStyles()
    const StepCards = cardContent.map((content, index) => {
        return (
            <Grid item key={index} xs={12} md={4} sx={{ justifyContent: 'center' }}>
                <Fade bottom>
                    <Card sx={item} >
                        {/* <Box sx={number}>{index+1}</Box> */}
                        <Box
                            component="img"
                            src={content.icon}
                            alt={content.alt}
                            sx={image}
                        />
                        <Typography variant="body1" align="center">{content.text}</Typography>
                    </Card>
                </Fade>
            </Grid>
        );
    });

    return (
        <Box
            component="section"
            sx={{
                display: 'flex',
                // bgcolor: 'white',
                overflow: 'hidden',
            }}
        >
            <Container
                sx={{
                    mt: 10,
                    mb: 15,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box className={classes.boxone}>
                    <Typography className={classes.typographyone} variant="h2" component="h2" sx={{ mb: 5 }}>
                        How it
                    </Typography>
                    <Typography component="h2" variant="h2" className={classes.typography} color="primary.main" display="inline-block" >works</Typography>
                </Box>
                <Box
                    component="img"
                    src="/img/productCurvyLines.png"
                    alt="curvy lines"
                    sx={{
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: -180,
                        opacity: 0.7,
                        zIndex: -1,
                    }}
                />

                <div>
                    <Grid container spacing={5} sx={{ justifyContent: 'center' }}>
                        {StepCards}
                    </Grid>
                </div>
            </Container>
        </Box>
    );
}

export default NewHowitWorks;