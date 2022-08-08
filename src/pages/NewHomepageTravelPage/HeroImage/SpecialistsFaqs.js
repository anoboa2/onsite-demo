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

const SpecialistsFaqs= () => {
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
                            Specialists</Typography>
                            {/* <Typography variant="h4" className={classes.maintypography1}>
                                Questions
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
                                Who are the specialists? What do they do? 
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography sx={{ color: 'text.secondary' ,  width: '105%' }}>
                                Our destination-based specialists are locals, travel influencers or people who’ve traveled to a certain destination often. <br/>  They know all the local gems of the place you are trying to visit. Our specialists plan and book your travel plans-whether <br/>you need restaurant  recommendations or full trip planning. 
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
                                How does Onsite find its specialists? 
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography sx={{ color: 'text.secondary', width: '104%' }}>
                                 We travel to different cities and countries to meet locals who specialize in trip planning for their city. We also create <br/> relationships with travel influencers via various platforms.
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
                                How responsive are Onsite’s travel specialists?
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography sx={{ color: 'text.secondary', width: '105%' }}>
                                Our specialists are available 24/7 to provide support and accommodate any concerns. As they are able to be reached <br/> at any time, we do like to communicate to our users to give them up to 24hrs to respond as they are handling multiple <br/> itineraries at once. 
                                </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: 'transparent' , boxShadow: 'none'}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>

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
export default SpecialistsFaqs;
