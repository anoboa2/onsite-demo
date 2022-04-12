import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Fade } from 'react-reveal';
import Typography from '../../../modules/components/Typography';

const useStyles = makeStyles((theme) => ({
    item: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down("sm")]: {


        }
    },
    typographyone: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px !important",
        }
    },
    typographytwo: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px !important",
        }
    },
}))


const AboutUsQuote = () => {
    const classes = useStyles()
    return (
        <Fade bottom>
            <Box>
                <Typography className={classes.typographyone} padding={10} marginBottom="40px" variant="h5">
                    "Our mission is to eliminate the stress and uncertainty of travel planning by connecting you with destination-based travel specialists, whose only job is to make your dream trip a reality. We match your personal taste profile to your ideal travel experiences"
                </Typography >
            </Box>
        </Fade>
    );
}

export default AboutUsQuote;