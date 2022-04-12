import React, { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterLuxon';
import {
    DateRangePicker,
    DatePicker,
    DesktopDatePicker,
    LocalizationProvider,
} from '@mui/lab';
import {
    Box,
    TextField,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    Grid,
    Switch,
    Fade,
    Container,
    RadioGroup,
    Stack,
    Radio,
} from '@mui/material';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Button from '../../../modules/components/Button';
import { makeStyles } from "@mui/styles";


const locations = [
    { label: 'New York City, NY', value: 'nyc' },
    { label: 'Miami, FL', value: 'miami' },
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
            marginTop: "20px !important"
        },
    },
    typographyone: {
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            fontSize: "18px !important",
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
    }
}))

const NewInitialBookingContent = ({ values, handleInputChange }) => {
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
                        <Typography className={classes.typographyone} variant='h5' color="black" sx={{ mb: 2, mr: 37 }}><ConnectingAirportsIcon sx={{ color: "#1ccc6f !important" }} /> Travel Dates</Typography>
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
                    <LocationOnIcon sx={{ color: "#1ccc6f !important", }} required="required" /> Location</Typography>
                {/* <InputLabel id="location-label" sx={{ width: '100%', maxWidth: '300px', mb: 2, mt: { xs: 4, sm: 0, } }}>Location</InputLabel> */}
                <Select
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
                </Select>
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
                        <Radio onChange={selectionChangeHandler} checked={selected === 'Email'} value="Email" label="Email" /> Email
                    </Typography>

                    <Typography className={classes.typographyone} color="black">
                        <Radio onChange={selectionChangeHandler} checked={selected === 'Mobile'} value="Mobile" label="Mobile" /> Mobile
                    </Typography>
                </Box>
            </Grid>
        </Grid >
    )
};



export default NewInitialBookingContent;