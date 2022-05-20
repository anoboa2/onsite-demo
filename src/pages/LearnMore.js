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
import { about } from '../Constants';
import HeroImage from './NewHomepageTravelPage/HeroImage/HeroImage';
import { Grid } from '@mui/material';


const useStyles = makeStyles((theme) => ({
  boxone: {
      display: 'flex',
      flexDirection: 'row',
      [theme.breakpoints.down("md")]: {
          display: 'flex',
          flexDirection: "column !important",
          width: "100%",
      },
      [theme.breakpoints.down("sm")]: {
          display: 'flex',
          flexDirection: "column !important",
          width: "100%",
      }
  },

  typographytwo: {
      borderBottom: "3px solid #0FAACD",
      [theme.breakpoints.down("sm")]: {
          borderBottom: "none !important",
          fontSize: "20px !important",
      }
  },
  typographyone: {
      [theme.breakpoints.down("sm")]: {
          borderBottom: "none !important",
          fontSize: "20px !important",
          paddingTop: "10% !important",
      }
  },
  thegrid: {
      padding: "5px",
      paddingRight: "55px",
  },
  typography3: {
      [theme.breakpoints.down("sm")]: {
          marginTop: "5% !important",
          fontSize: "15px !important",
          fontWeight: "lighter !important",
      }
  },
  thebox: {
      marginTop: "20%",
      [theme.breakpoints.down("md")]: {
          maxWidth: "95%",
          paddingLeft: "35px",
          marginTop: "0 !important",
      },

  },
}))

function LearnMore() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <NewAppBar />
      <HeroImage details={about}/>
      <Grid Container>
    


        <Fade bottom>
        <Grid className={classes.boxone}>
                    <Grid item sm={6} xs={12} order={1} sx={{ justifyContent: 'center' }}>
                        <div className="LearnMore">
                        <YoutubeEmbed embedId="0yQ2JXlCeTs" />
                        </div>

                    </Grid>

                    <Grid className={classes.thegrid} item sm={7} xs={12} md={7} container order={5} sx={{ justifyContent: 'left' }}>

                        <Box className={classes.thebox}>

                            <Box className={classes.boxtwo}>
                            <Typography className={classes.typographyone}  variant="h4" >
                            As the world's leading expert in on-location travel planning, Onsite curates itineraries based on your desires and your needs.</Typography>

                            <Typography className={classes.typographytwo} color="primary.main" display="inline-block" variant='h4'></Typography></Box>
                            <Typography className={classes.typography3} variant="h7">
                            Our professional travel planners are experts in their fields, with a vast knowledge of the ins and outs of their locations. They're local to your destinations, so they know how to plan itineraries that make the most of even a single day. Onsite planners can help you explore the best of your destination city by recommending local activities, restaurants, and attractions based on both your interests and what's happening that week. Whether you have just one day or an entire month to spend exploring, our planners will make sure you get the most out of it!
                            </Typography>

                        </Box>


                    </Grid>
                </Grid>
          </Fade>
        </Grid>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(LearnMore);
