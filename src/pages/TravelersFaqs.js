import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import Typography from '../modules/components/Typography';
import styled from "styled-components";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const style = {
    position: 'absolute',
    top: '2%',
    left: '25%',
    width: "50%",
    overflow: 'scroll',
};

const useStyles = makeStyles((theme) => ({
    item: {
        display: " flex",
        justifyContent: "space-around",
        [theme.breakpoints.down("md")]: {
            display: " flex",
            justifyContent: "space-around",
        },
        [theme.breakpoints.down("sm")]: {
            display: 'flex',
            alignContent: 'space-between',

        },
    },
    typography: {

        borderBottom: "3px solid #0FAACD",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "10px !important",
            borderBottom: "none !important",
            fontSize: "20px !important",
            marginLeft: "5% !important",
        }
    },
    typography1: {

        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "15px !important",
            fontWeight: "lighter !important",
        }
    },
    maintypography: {
        paddingRight: "1%",
        [theme.breakpoints.down("sm")]: {

            borderBottom: "none !important",
            fontSize: "20px !important",
        }
    },
    maintypography1: {
        borderBottom: "3px solid #0FAACD",

        color: "#0FAACD !important",


        [theme.breakpoints.down("md")]: {
            borderBottom: "none !important",
        },
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "20px !important",
        }
    },
    maintypography11: {
      borderBottom: "3px solid #0FAACD",

      color: "#0FAACD !important",


      [theme.breakpoints.down("md")]: {
          borderBottom: "none !important",
      },
      [theme.breakpoints.down("sm")]: {
          borderBottom: "none !important",
          fontSize: "35px !important",
      }
  },
    boxone: {


        [theme.breakpoints.down("md")]: {
            borderBottom: "none !important",
            fontSize: "20px !important",
            marginLeft: "25% !important",
        },
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "20px !important",
            marginLeft: "20% !important",
        },
    },
    firstbox: {
        display: " flex",
        justifyContent: "center"
    },
    mainbox: {
        paddingTop: "31px",
        display: "flex",
        flexDirection: "column",
        width: "100%",

    },
    boxtwo: {
        display: "flex",
        flexDirection: "row !important",

        [theme.breakpoints.down("md")]: {
            borderBottom: "none !important",
            fontSize: "20px !important",
            marginLeft: " 30% !important",
        },
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "20px !important",
            marginLeft: " 5% !important",
        }
    },

}))

const TravelersFaqs= () => {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <Grid mb={5} pl={4} pr={4} pt={5}>
            <Fade bottom>
                <Grid container>

                <Box className={classes.mainbox} paddingBottom="55px">
                        <Box className={classes.firstbox}>
                            {/* <Typography className={classes.maintypography} variant="h4" align="center" component="h2" >
                            FAQ's</Typography> */}
                            <Typography variant="h1" className={classes.maintypography11}>
                                FAQs
                            </Typography>
                        </Box>
                    </Box>

                    <Box className={classes.mainbox}>
                        <Box className={classes.firstbox}>
                            <Typography className={classes.maintypography} variant="h4" align="center" component="h4" >
                            Travelers</Typography>
                            {/* <Typography variant="h4" className={classes.maintypography1}>
                                FAQ's
                            </Typography> */}
                        </Box>
                    </Box>

                    <Grid container item sx={{ width: "100%" }} xs={12}>
                        <Box className={classes.item} sx={{ mt: 6, display: 'flex', borderRadius: 50, width: "100%" , marginTop: "45px !important" }}>
                         
                        <div>
                        <AccordionDetails>
                        </AccordionDetails>
                            <Accordion sx={{ backgroundColor: 'transparent' , boxShadow: 'none'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                >
                                <Typography variant="h6" sx={{ width: '100%', flexShrink: 0 , fontSize: '16px'}}>
                                Can I use Onsite to reschedule dinner reservations after booking the trip?
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography sx={{ color: 'text.secondary' }}>
                                Yes. For $10 extra per day on your trip, Onsite will provide virtual support to handle any rescheduling needs or issues.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ backgroundColor: 'transparent' , boxShadow: 'none'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                                >
                                <Typography  variant="h6" sx={{ width: '100%', flexShrink: 0 , fontSize: '16px'}}>
                                Does Onsite book airfare?
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography sx={{ color: 'text.secondary', width: '104%' }}>
                                Yes.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ backgroundColor: 'transparent' , boxShadow: 'none'}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                                >
                                <Typography  variant="h6" sx={{ width: '100%', flexShrink: 0 , fontSize: '16px'}}>
                                Does Onsite book hotels?
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography sx={{ color: 'text.secondary', width: '105%' }}>
                                Yes.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ backgroundColor: 'transparent' , boxShadow: 'none'}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                                >
                                <Typography  variant="h6" sx={{ width: '100%', flexShrink: 0 , fontSize: '16px'}}>
                                Does Onsite book excursions?
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography sx={{ color: 'text.secondary', width: '104%' }}>
                                Yes.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ backgroundColor: 'transparent' , boxShadow: 'none'}} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                                >
                                <Typography  variant="h6" sx={{ width: '100%', flexShrink: 0 , fontSize: '16px'}}>
                                Does Onsite book table bookings at nightclubs?
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography sx={{ color: 'text.secondary' , width: '104%'}}>
                                If the user requests such reservations, our specialist can accommodate. 
                                </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: 'transparent' , boxShadow: 'none'}} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                                >
                                <Typography  variant="h6" sx={{ width: '100%', flexShrink: 0 , fontSize: '16px'}}>
                                Can an Onsite itinerary be shared with a group of travelers? 
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography sx={{ color: 'text.secondary' , width: '104%'}}>
                                For our current version, yes. When our mobile app is complete, any travel companions would have to download<br/> the app to view a shared itinerary
                                </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: 'transparent' , boxShadow: 'none'}} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                                >
                                <Typography  variant="h6" sx={{ width: '100%', flexShrink: 0 , fontSize: '16px'}}>
                                How long does it take to book an itinerary?
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography sx={{ color: 'text.secondary' , width: '104%'}}>
                                Our specialists require 48 hours to complete your first draft itinerary. Once the itinerary is reviewed by the user and any <br/>feedback/edits has been requested, our specialists will take 24 hours to complete the bookings. 
                                </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: 'transparent' , boxShadow: 'none'}} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>

                                <AccordionDetails>

                                </AccordionDetails>
                            </Accordion>
                        </div>
                           
                        </Box>
                    </Grid>
                </Grid>
            </Fade>
        </Grid >
    );
}
export default TravelersFaqs;
