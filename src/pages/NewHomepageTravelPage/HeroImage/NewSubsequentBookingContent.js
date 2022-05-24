import React, { useState } from 'react';
import { useRownd } from '@rownd/react';
import {
    Box,
    Container,
    TextField,
    InputLabel,
    MenuItem,
    Select,
    OutlinedInput,
    Chip,
    Button,
    Input,
    Textfield,
    Typography,
    Grid,
    InputAdornment,
} from '@mui/material';
import SignupModal from '../../../modules/views/SignupModal';
import { makeStyles } from '@mui/styles';


const numpeople = [0, 1, 2, 3, 4, 5, 6]
const occasions = [
    'Anniversary',
    'Destination Wedding',
    'Bachelorette/Bachelor Trip',
    'Honeymoon',
    'Birthday',
    'Friends Trip',
    'Family Trip',
    'Business Trip',
    'Couples Getaway',
    'Post-Breakup Escape',
    'Spontaneous',
    'Spiritual Learning',
    'Other',
]

const activities = [
    'Nature Adventures',
    'Cultural Activities',
    'Events',
    'Sporty Activities',
    'Water Activities',
    'Nightlife',
    'Relaxation',
    'Shopping',
]
const useStyles = makeStyles((theme) => ({
    maingrid: {
        [theme.breakpoints.down("sm")]: {
            maxHeight: "700px",
            overflow: "hidden !important",
        },
    },
    reducebottom: {
        marginBottom: "40px",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "15px !important",
        },
    },
    boxes: {
        margin: "12px",
        [theme.breakpoints.down("sm")]: {
            margin: "0px 12px !important",
        },
    },
    typographyone: {
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            paddingRight: "0px !important",
            paddingTop: "10px !important",
            paddingBottom: "10px !important",
        },
    },
    reducetop: {
        marginTop: "24px !important",
        [theme.breakpoints.down("sm")]: {
            marginTop: "6px !important",
        },
    },
    inputlabel2: {
        marginBottom: "40px",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "15px !important",
            paddingRight: "0px !important",
            paddingTop: "10px !important",
            paddingBottom: "10px !important",
        },
    },
}))

const NewSubsequentBookingContent = ({ values, handleInputChange }) => {
    const { is_authenticated } = useRownd();
    const [activityOpen, setActivityOpen] = useState(false);
    const [occasionOpen, setOccassionOpen] = useState(false);
    const classes = useStyles()
    const handleCancel = (type)=>{
        handleInputChange(type, [])
    }
    console.log(values, occasions);
    return (
        <Grid container className={classes.maingrid} columns={{ xs: 6, sm: 12, }} sx={{ maxHeight: 'sm', mt: 0, mb: 0, ml: 'auto', mr: 'auto', pt: 0, pl: 4, pr: 4, alignItems: 'flex-end', }}>
            <Grid x container item xs={6}>
                <Container>
                    <Typography className={classes.typographyone} sx={{ color: 'black', }}>How many travelers?</Typography>
                </Container>
                <Grid item xs={3}>
                    <Box className={classes.boxes} sx={{ width: '100%' }}>
                        <InputLabel id="booking-num-adults-label">Adults</InputLabel>
                        <Select
                            labelid="booking-num-adults-label"
                            id="booking-num-adults-select"
                            label="num-adults"
                            name="numberofadults"
                            value={values.numberofadults}
                            onChange={(evt) => handleInputChange('numberofadults', evt.target.value)}
                            sx={{
                                width: 80,
                                background: 'white',
                                mb: 3,
                            }}
                        >
                            {numpeople.map((number) => {
                                return <MenuItem key={number} value={number}>{number}</MenuItem>
                            })}
                        </Select>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.boxes} >
                        <InputLabel id="booking-num-kids-label">Kids</InputLabel>
                        <Select

                            labelid="booking-num-kids-label"
                            id="booking-num-kids-select"
                            label="num-kids"
                            name="numberofkids"
                            value={values.numberofkids}
                            onChange={(evt) => handleInputChange('numberofkids', evt.target.value)}
                            sx={{
                                width: 80,
                                background: 'white',
                                mb: 3,
                            }}
                        >
                            {numpeople.map((number) => {
                                return <MenuItem key={number} value={number}>{number}</MenuItem>
                            })}
                        </Select>
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={6} className={classes.reducebottom} 
                sx={{ mb: 5, display: 'flex', flexDirection: 'column', alignItems: 'flex-end',  }}>
                <InputLabel id="booking-budget-label" className={classes.inputlabel}  required="required" 
                   sx={{ mb: 1, width: '100%', maxWidth: '300px', }}>What's your budget?</InputLabel>
                   
                <TextField
                    hiddenlabel="true"
                    labelid="booking-budget-label"
                    id="booking-budget-input"
                    variant="filled"
                    name="budget"
                    required
                    value={values.budget}
                    onChange={(evt) => handleInputChange('budget', evt.target.value)}
                    InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                    sx={{ background: 'white', width: '100%', maxWidth: '300px', }} />
            </Grid>
            <Grid item xs={6} className={classes.reducebottom} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', }}>
                <InputLabel id="booking-occasion-label" className={classes.inputlabel2} sx={{ mb: 1, width: '100%', maxWidth: '500px', }}>Why are you traveling?</InputLabel>
                <Select
                    hiddenlabel="true"
                    labelid="booking-occasion-label"
                    id="booking-occasion-select"
                    multiple
                    name="occasion"
                    value={values.occasion}
                    onChange={(evt) => handleInputChange('occasion', evt.target.value)}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    sx={{
                        width: '100%',
                        maxWidth: '300px',
                        background: 'white'
                    }}
                    open={occasionOpen}
                    onOpen={()=>setOccassionOpen(true)}
                >
                    {occasions.map((occasion) => {
                        return <MenuItem key={occasion} value={occasion}>
                            <input type="checkbox" checked={values.occasion.includes(occasion)} ></input>    
                            {occasion}</MenuItem>
                    })}
                    <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <Button onClick={()=>setOccassionOpen(false)} variant="outlined" style={{width:"45%", margin:"5px", height:"40px", color:"black", border:"1px solid black"}}>Okay</Button>
                    <Button onClick={()=>(handleCancel("occasion"), setOccassionOpen(false))} variant="outlined" style={{width:"45%", margin:"5px", height:"40px", color:"black", border:"1px solid black"}}>Cancel</Button>
                    </div>
                </Select>
            </Grid>
            <Grid className={classes.reducebottom} item xs={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', }}>
                <InputLabel id="booking-activities-label" className={classes.inputlabel} sx={{
                    mb: 1,
                    width: '100%',
                    maxWidth: '300px',

                }}
                >
                    Which activities do you want to book?
                </InputLabel>
                <Select
                    hiddenlabel="true"
                    labelid="booking-activities-label"
                    id="booking-activities-select"
                    multiple
                    name="activities"
                    value={values.activities}
                    onChange={(evt) => handleInputChange('activities', evt.target.value)}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    sx={{
                        width: '100%',
                        maxWidth: '300px',
                        background: 'white'
                    }}
                    onOpen={()=> setActivityOpen(true)}
                    open={activityOpen}
                    
                >
                    {activities.map((activity) => {
                        return <MenuItem divider={true} key={activity} value={activity}>
                            <input type="checkbox" checked={values.activities.includes(activity)} ></input>
                            {activity}</MenuItem>
                    })}
                    <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <Button onClick={()=> setActivityOpen(false)} variant="outlined" style={{width:"45%", height:"40px", color:"black", border:"1px solid black"}}>Okay</Button>
                    <Button onClick={()=>(handleCancel("activities"), setActivityOpen(false))} variant="outlined" style={{width:"45%", height:"40px", color:"black", border:"1px solid black"}}>Cancel</Button>
                    </div>
                </Select>
            </Grid>
            <Grid className={classes.reducetop} item xs={12} mb={1} sx={{ alignContent: 'center', pl: { xs: 0, sm: "20%" } }}>
                <TextField
                    id="booking-notes-input"
                    multiline
                    rows={4}
                    label="Additional Notes"
                    name="notes"
                    placeholder="Anything else to add?"
                    variant="filled"
                    value={values.notes}
                    onChange={(evt) => handleInputChange('notes', evt.target.value)}
                    sx={{
                        width: '100%',
                        maxWidth: '600px',
                        background: 'white',
                    }}
                />
            </Grid>
            <Grid className={classes.reducetop} item mb={2} xs={12} sx={{ textAlign: 'center', mt: 4, }}>
                {is_authenticated ? (
                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        sx={{ pt: 1, pr: 1, pl: 1, pb: 1 }}
                    >
                        {'Request Your Trip'}
                    </Button>
                ) : (
                    <SignupModal />
                )}
            </Grid>
        </Grid>
    );
};

export default NewSubsequentBookingContent;