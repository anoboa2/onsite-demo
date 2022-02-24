import React, { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterLuxon';
import {
    DateRangePicker,
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
    Container
} from '@mui/material';


const locations = [
    {label: 'New York City, NY', value: 'nyc'},
    {label: 'Miami, FL', value: 'miami'},
]

const InitialBookingContent = ({ values, handleInputChange }) => {
    const [toggle, setToggle] = useState(false)

    const handleSwitch = (event) => {
        setToggle(event.target.checked)
        handleInputChange(event)
    };

    return (
        <Grid container justify="center" columns={6} spacing={3} sx={{ m: 2, pb: 5, alignText: 'center' }} >
            <Grid item xs={6}>
                <InputLabel id="location-label">Location</InputLabel>
                <Select
                labelId="location-label"
                id="location-select"
                label="loc"
                name="location"
                value={values.location}
                onChange={handleInputChange}
                sx={{
                    width: 300,
                    background: 'white',
                }}
                >
                    {locations.map((location) => {
                        return <MenuItem key={location.value} value={location.value}>{location.label}</MenuItem>
                    })}
                </Select>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{ width: '500px', justifySelf: 'center' }}>
                <Typography color="black">Travel Dates</Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Fade in={toggle}>
                    <DateRangePicker 
                    startText="Start Date"
                    endText="End Date"
                    name="daterange"
                    disabled={toggle}
                    value={values.daterange}
                    onChange={handleInputChange}
                    renderInput={(startDate, endDate) => (
                        <React.Fragment>
                            <TextField {...startDate} />
                            <Box color="black" sx={{ mx: 2}}> to </Box>
                            <TextField {...endDate} />
                        </React.Fragment>
                    )}
                    sx={{ background: 'white', }}
                    />
                    </Fade>
                </LocalizationProvider>
                <Box display="flex" alignItems="baseline" justifyContent="flex-end">
                    <Switch
                    name="datesunsure"
                    value={toggle}
                    checked={toggle}
                    onChange={handleSwitch}
                    />
                    <Typography color="black">I'm not sure of my dates</Typography>
                </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default InitialBookingContent;