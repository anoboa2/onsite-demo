import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Fade } from 'react-reveal';
import NewAppBar from './NewHomepageTravelPage/NewAppBar';
import AppFooter from '../modules/views/AppFooter';
import withRoot from '../modules/withRoot';
import Typography from '../../../modules/components/Typography';

const useStyles = makeStyles((theme) => ({
    typographyone: {
        fontStyle: "italic",
        [theme.breakpoints.down("sm")]: {
            fontSize: "18px !important",
        }
    },
}))

function LearnMore() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <NewAppBar />
      <Container>
    
    //add video youtube

        <Fade bottom>
            <Box>
                <Typography className={classes.typographyone} padding={10} marginBottom="40px" variant="h5">
                   As the world's leading expert in on-location travel planning, Onsite curates itineraries based on your desires and your needs.
                </Typography >
            </Box>
        </Fade>

       <Box sx={{ mt: 7, mb: 12 }}>
          <body>
Our professional travel planners are experts in their fields, with a vast knowledge of the ins and outs of their locations. They're local to your destinations, so they know how to plan itineraries that make the most of even a single day. Onsite planners can help you explore the best of your destination city by recommending local activities, restaurants, and attractions based on both your interests and what's happening that week. Whether you have just one day or an entire month to spend exploring, our planners will make sure you get the most out of it!

            </body>
          </Box>
        </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(LearnMore);
