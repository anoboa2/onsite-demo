import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import Typography from '../../../modules/components/Typography';
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

const AboutOnsiteFaqs= () => {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <Grid mb={5} pl={4} pr={4} pt={5}>
            <Fade bottom>
                <Grid container>

                    <Box className={classes.mainbox}>
                        <Box className={classes.firstbox}>
                            <Typography className={classes.maintypography} variant="h4" align="center" component="h2" >
                                About Onsite</Typography>
                            {/* <Typography variant="h4" className={classes.maintypography1}>
                                Questions
                            </Typography> */}
                        </Box>
                        <Box>
                            {/* <Typography className={classes.typography1} variant="h6" align="center" component="h2" paddingTop="15px !important" >
                            We’ve got all the answers right here.
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
                                What is Onsite Planning? Is it the same as booking with a travel agent?
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography sx={{ color: 'text.secondary',  width: '104%' }}>
                                Onsite values personalization and wants your travel experience to be the best one yet. We believe in turning <br/>your dreams into a reality.  We connect  ourtravelers to destination-based specialists to plan and book the perfect trip for<br/> you. Our specialists offer concierge level support and communication.  
                                The process differs from a traditional<br/> travel agency because our specialists are either from the desired destination or have traveled there often.  
                                <br/> They also curate personalized plans based on your needs, interests and preferences. 

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
                                Is there a minimum spend on Onsite?
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography sx={{ color: 'text.secondary', width: '104%' }}>
                                No.
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
                                What are the perks for using Onsite?
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography sx={{ color: 'text.secondary', width: '105%' }}>
                                Receiving a customized trip planned by a travel specialist who knows places first handle over reading Google<br/> reviews. 
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
                                Does Onsite have an app?
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography sx={{ color: 'text.secondary', width: '104%' }}>
                                 Our mobile app, is currently being built and will be released in a few months.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ backgroundColor: 'transparent' , boxShadow: 'none'}} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel5bh-header"
                                >
                                <Typography  variant="h6" sx={{ width: '100%', flexShrink: 0 , fontSize: '16px'}}>
                                How is Onsite similar to American Express Concierge?
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography sx={{ color: 'text.secondary' , width: '104%'}}>
                                Onsite is similar to the support and care that American Express Concierges offer. However, all of our communication<br/> is done via chat or sms and our service  does not have an annual fee of $800. 
                                </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: 'transparent' , boxShadow: 'none'}} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel6bh-header"
                                >
                                <Typography  variant="h6" sx={{ width: '100%', flexShrink: 0 , fontSize: '16px'}}>
                                Does Onsite have a membership program?
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography sx={{ color: 'text.secondary' , width: '104%'}}>
                                Not yet, but we will introduce one very soon.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: 'transparent' , boxShadow: 'none'}} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>

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
export default AboutOnsiteFaqs;
