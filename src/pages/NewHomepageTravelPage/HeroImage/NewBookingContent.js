import React, { useState } from 'react';
import { useRownd } from '@rownd/react';
import AdapterDateFns from '@mui/lab/AdapterLuxon';
import {
    DateRangePicker,
    DatePicker,
    DesktopDatePicker,
    LocalizationProvider,
} from '@mui/lab';
import {
    Box,
    Container,
    TextField,
    InputLabel,
    MenuItem,
    Select,
    OutlinedInput,
    Typography,
    Grid,
    Switch,
    Fade,
    RadioGroup,
    Stack,
    Radio,
    Chip,
    Input,
    InputAdornment,
} from '@mui/material';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Button from '../../../modules/components/Button';
import SignupModal from '../../../modules/views/SignupModal';
import { makeStyles } from "@mui/styles";
// import { locations } from "./locations";

const locations = [
    { label: 'New York City, NY', value: 'New York City' },
    { label: 'Miami, FL', value: 'Miami' },
    { label: 'Los Angeles, CA', value: 'Los Angeles' },
    { label: 'Denver, CO', value: 'Denver' },
    { label: 'Chicago, IL', value: 'Chicago' },
    { label: 'Seattle, WA', value: 'Seattle' },
    { label: 'Napa Valley, CA', value: 'Napa Valley' },
    { label: 'Mexico City, MX', value: 'Mexico City' },
    { label: 'Cabo San Lucas, MX', value: 'Cabo San Lucas' },
    { label: 'Tulum, MX', value: 'Tulum' },
    { label: 'Dubai, UAE', value: 'Dubai' },
    { label: 'Orlando, FL', value: 'Orlando' },
    { label: 'Washington, DC', value: 'Washington DC' },
    { label: 'San Diego, CA', value: 'San Diego' },
    { label: 'Cancun, MX', value: 'Cancun' },
    { label: 'Dallas, TX', value: 'Dallas' }
]

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
    daterange: {
        [theme.breakpoints.down("sm")]: {
            width: "200px",
        },
    },
    notSureDates: {
        padding: "10px 0 0 0",
        [theme.breakpoints.down("sm")]: {
            width: "200px",
        },
    },
    preference: {
        padding: "10px 0 0 106px !important",
        [theme.breakpoints.down("sm")]: {
            padding: "10px 0 0 56px !important",
            width: "200px",
        },
    },
    maingrid: {
        marginTop: "30px",
        paddingBottom: "50px",
        paddingLeft: "40px",
        paddingRight: "40px",
        [theme.breakpoints.down("sm")]: {
            paddingBottom: "0px !important",
            marginTop: "20px !important",
            maxHeight: "700px",
            overflow: "hidden !important",
        },
    },
    typographyone: {
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            fontSize: "18px !important",
            paddingRight: "0px !important",
            paddingTop: "10px !important",
            paddingBottom: "10px !important",
        },
    },
    typographytwo: {
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            fontSize: "18px !important",
        },
    },
    locationicon: {
        paddingLeft: "116px !important",
        [theme.breakpoints.down("sm")]: {
            marginTop: "18px !important",
            paddingLeft: "0px !important",
        },
    },
    boxes: {
        margin: "12px",
        [theme.breakpoints.down("sm")]: {
            margin: "0px 12px !important",
        },
    },
    inputlabel: {
        marginRight: "105px !important"
    },
    inputlabel2: {
        marginBottom: "40px",
        paddingRight: "320px !important",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "15px !important",
            paddingRight: "0px !important",
            paddingTop: "10px !important",
            paddingBottom: "10px !important",
        },
    }
}))

const NewBookingContent = ({ values, handleInputChange }) => {
    const { is_authenticated } = useRownd();
    const classes = useStyles()
    const [toggle, setToggle] = useState(false)
    const [selected, setSelected] = useState('');

    const selectionChangeHandler = (event) => {
        setSelected(event.target.value);
        handleInputChange('contact_pref', event.target.value)
    };
    const handleSwitch = (event) => {
        setToggle(event.target.checked)
        handleInputChange('dateunsure', event.target.checked)
    };


    return (
        <Grid className={classes.maingrid} container columns={{ xs: 6, sm: 12, }} spacing={0} sx={{}} >
            <Grid item xs={6} className={classes.daterange}>
                <Box>
                    <Box sx={{ alignItems: "center" }}>
                        <Typography className={classes.typographyone} variant='h5' color="black" sx={{ mb: 2, mr: 37 }}><ConnectingAirportsIcon sx={{ color: "#1ccc6f !important" }} /> When are you planning to travel?</Typography>
                    </Box>

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Fade in={toggle}>
                            <DateRangePicker
                                id="booking-date-range-picker"
                                startText="Start Date"
                                endText="End Date"
                                name="daterange"
                                disabled={toggle}
                                value={values.daterange}
                                onChange={(evt) => handleInputChange('daterange', evt)}
                                renderInput={(startDate, endDate) => (
                                    <React.Fragment>
                                        <TextField id="booking-start-date-input" sx={{ background: 'white' }} {...startDate} />
                                        <Box color="black" sx={{ mx: 2 }}> to </Box>
                                        <TextField id="booking-end-date-input" sx={{ background: 'white' }} {...endDate} />
                                    </React.Fragment>
                                )}
                                sx={{ backgroundColor: 'white', }}
                            />
                        </Fade>
                    </LocalizationProvider>
                    {/* <Box display="flex" alignItems="baseline" justifyContent="flex-start">
                        <Switch
                            id="booking-date-unsure"
                            name="dateunsure"
                            value={toggle}
                            checked={toggle}
                            onChange={handleSwitch}
                        />
                        <Typography color="black">I'm not sure of my dates</Typography>
                    </Box> */}
                </Box>
            </Grid>
            <Grid className={classes.locationicon} item xs={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '275px', }}>

                <Typography className={classes.typographytwo} variant='h5' color="black" sx={{ mb: 2, mr: 25 }}>
                    <LocationOnIcon sx={{ color: "#1ccc6f !important", }} required="required" /> Where would you like to go?</Typography>
                {/* <InputLabel id="location-label" sx={{ width: '100%', maxWidth: '300px', mb: 2, mt: { xs: 4, sm: 0, } }}>Location</InputLabel> */}
                {/* <Select
                    id="booking-location-select"
                    hiddenlabel="true"
                    labelId="location-label"
                    name="location"
                    required
                    value={values.location}
                    onChange={(evt) => handleInputChange('location', evt.target.value)}
                    sx={{
                        width: '100%',
                        maxWidth: '300px',
                        background: 'white',
                    }}
                >
                    {locations.map((location) => {
                        return <MenuItem key={location.value} value={location.value}>{location.label}</MenuItem>
                    })}
                </Select> */}
                <Autocomplete 
                    id="booking-location-select"
                    options={locations}
                    required
                    value={values.location}
                    onChange={(evt) => handleInputChange('location', evt.target.value)}
                    sx={{
                        width: '100%',
                        maxWidth: '300px',
                        background: 'white',
                    }}
                    renderInput={(params) => <TextField {...params} label="Location" />}
                />
            </Grid>

            <Grid item xs={6} className={classes.notSureDates}>
                <Box>
                    <Box display="flex" alignItems="baseline" justifyContent="flex-start">
                        <Switch id="booking-date-unsure" name="dateunsure" value={toggle} onChange={handleSwitch}></Switch>
                        <Typography color="black">I'm not sure of my dates</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid
                className={classes.preference}
                item xs={6} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <Typography className={classes.typographytwo} variant='h5' color="black" sx={{ mb: 2, mr: 25 }}>
                    Contact Preference</Typography>
                <Box sx={{ alignItems: "left" }}>
                    <Typography className={classes.typographyone} color="black">
                        <Radio onChange={selectionChangeHandler} checked={selected === 'Phone'} value="Phone" label="Phone" /> Phone
                    </Typography>

                    <Typography className={classes.typographyone} color="black">
                        <Radio onChange={selectionChangeHandler} checked={selected === 'Email'} value="Email" label="Email" /> Mobile
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Container>
                    <Typography className={classes.typographyone} sx={{ color: 'black', }}>Number of People</Typography>
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
                   sx={{ mb: 1, width: '100%', maxWidth: '300px', }}>Budget</InputLabel>
                   
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
                <InputLabel id="booking-occasion-label" className={classes.inputlabel2} sx={{ mb: 1, width: '100%', maxWidth: '500px', }}>Type of Trip</InputLabel>
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
                >
                    {occasions.map((occasion) => {
                        return <MenuItem key={occasion} value={occasion}>{occasion}</MenuItem>
                    })}
                </Select>
            </Grid>
            <Grid className={classes.reducebottom} item xs={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', }}>
                <InputLabel id="booking-activities-label" className={classes.inputlabel} sx={{
                    mb: 1,
                    width: '100%',
                    maxWidth: '300px',

                }}
                >
                    Activities
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
                >
                    {activities.map((activity) => {
                        return <MenuItem key={activity} value={activity}>{activity}</MenuItem>
                    })}
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
                        {'Book Now'}
                    </Button>
                ) : (
                    <SignupModal />
                )}
            </Grid>
        </Grid>
    )
};



export default NewBookingContent;